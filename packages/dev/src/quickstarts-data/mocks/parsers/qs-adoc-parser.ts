import Processor from "asciidoctor";
import {
  QuickStart,
  QuickStartTask,
  QuickStartTaskReview,
  QuickStartTaskSummary,
} from "@patternfly/quickstarts";

const processor = Processor();
const asciiOptions = {
  // https://docs.asciidoctor.org/asciidoc/latest/document/doctypes/
  // article, book, manpage, inline
  doctype: "article",
  // add header/footer when true
  standalone: false,
  safe: "unsafe",
  // base_dir: "quickstarts-data/asciidoc/",
  sourcemap: true,
};

const getInnerText = (html: string) => {
  let span = document.createElement("span");
  span.innerHTML = html;
  return span.textContent || span.innerText;
};
const getListItems = (html: string) => {
  let span = document.createElement("span");
  span.innerHTML = html;
  const elements = span.querySelectorAll("li");
  let items: string[] = [];
  elements.forEach((el) => {
    items.push(el.textContent.trim());
  });
  return items;
};

export const QuickstartAsciiDocParser = (file: string, options: any = {}) => {
  const fullAdoc = processor.load(file, {
    ...asciiOptions,
    ...options,
  });
  const taskBlocks = fullAdoc.getBlocks();
  let qsTasks: QuickStartTask[] = [];
  taskBlocks.forEach((taskBlock) => {
    const adocBlocks = taskBlock.getBlocks();
    let qsTask: QuickStartTask = {};
    let qsReview: QuickStartTaskReview = {};
    let qsSummary: QuickStartTaskSummary = {};

    for (const block in adocBlocks) {
      const content = adocBlocks[block].getContent();
      switch (adocBlocks[block].getRole()) {
        case "qs-title":
          qsTask.title = getInnerText(content);
          break;
        case "qs-description":
          qsTask.description = content;
          break;
        case "qs-review instructions":
          qsReview.instructions = content;
          break;
        case "qs-review failedTaskHelp":
          qsReview.failedTaskHelp = content;
          break;
        case "qs-summary success":
          qsSummary.success = content;
          break;
        case "qs-summary failed":
          qsSummary.failed = content;
          break;
      }
    }
    qsTask.review = qsReview;
    qsTask.summary = qsSummary;

    qsTasks.push(qsTask);
  });
  const processedAsciiDoc: QuickStart = {
    metadata: {
      name: fullAdoc.getAttribute("qs-id"),
    },
    spec: {
      displayName: fullAdoc.getAttribute("qs-display-name"),
      durationMinutes: fullAdoc.getAttribute("qs-duration-minutes"),
      icon: fullAdoc.getAttribute("qs-icon"),
      description: fullAdoc.getAttribute("qs-description"),
      introduction: processor.convert(
        fullAdoc.getAttribute("qs-introduction")
      ) as string,
      conclusion: fullAdoc.getAttribute("qs-conclusion"),
      prerequisites: getListItems(
        processor.convert(fullAdoc.getAttribute("qs-prerequisites")) as string
      ),
      nextQuickStart: [fullAdoc.getAttribute("qs-next-quick-start")],
      tasks: qsTasks,
    },
  };
  return processedAsciiDoc;
};
