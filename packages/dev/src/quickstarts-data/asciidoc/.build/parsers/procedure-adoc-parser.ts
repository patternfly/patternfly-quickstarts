/* eslint-disable */

import Processor from 'asciidoctor';
import { QuickStart, QuickStartTask } from '@patternfly/quickstarts';

const processor = Processor();
const asciiOptions = {
  // https://docs.asciidoctor.org/asciidoc/latest/document/doctypes/
  // article, book, manpage, inline
  doctype: 'article',
  // add header/footer when true
  standalone: false,
  safe: 'unsafe',
  // base_dir: "quickstarts-data/asciidoc/",
  sourcemap: true,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getInnerText = (html: string) => {
  const span = document.createElement('span');
  span.innerHTML = html;
  return span.textContent || span.innerText;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getInnerList = (html: string) => {
  const span = document.createElement('span');
  span.innerHTML = html;
  return span.querySelector('ol') || span.querySelector('ul');
};
const getListItems = (html: string) => {
  const span = document.createElement('span');
  span.innerHTML = html;
  const elements = span.querySelectorAll('li');
  const items: string[] = [];
  elements.forEach((el) => {
    items.push(el.textContent.trim());
  });
  return items;
};
const elementWithoutTitle = (html: string) => {
  const span = document.createElement('span');
  span.innerHTML = html;
  span.querySelector('.title') && span.querySelector('.title').remove();
  return span;
};
const addClasses = (html: string) => {
  const span = document.createElement('span');
  span.innerHTML = html;
  span.querySelectorAll('div.title').forEach((el) => el.classList.add('pf-v5-c-title', 'pf-m-md'));
  return span;
};

const getIntro = (taskBlocks: any[]) => {
  let intro = '';
  let lastIndex = -1;
  // @ts-ignore-next-line
  taskBlocks.some((taskBlock) => {
    lastIndex += 1;
    let stopHere = false;
    // grab until we hit a subtitle, or an olist or ulist with a title of
    // Prerequisites || Procedure
    if (taskBlock.context === 'floating_title') {
      stopHere = true;
    } else if (taskBlock.context === 'ulist' || taskBlock.context === 'olist') {
      if (taskBlock.title === 'Prerequisites' || taskBlock.title === 'Procedure') {
        stopHere = true;
      }
    }
    if (!stopHere) {
      intro += taskBlock.convert();
    } else {
      return true;
    }
  });
  return {
    intro,
    lastIndex,
    nextBlock: taskBlocks[lastIndex].title,
  };
};

const getPrereqs = (taskBlocks: any[], startingIndex: number) => {
  const lastIndex = startingIndex;
  const initialBlock = taskBlocks[startingIndex];
  if (
    (initialBlock.context !== 'olist' || initialBlock.context !== 'ulist') &&
    initialBlock.title !== 'Prerequisites'
  ) {
    return {
      prereqs: [],
      lastIndex,
    };
  }
  const list: any[] = [];
  (initialBlock.getItems() as any[]).forEach((li) => {
    list.push(li.getText());
  });
  return {
    prereqs: list,
    lastIndex: lastIndex + 1,
  };
};

const getProcedures = (taskBlocks: any[], startingIndex: number) => {
  const procedures: any[] = [];
  let procedure: any;
  let lastIndex = startingIndex;
  const nextPossibleSections = ['Next steps', 'Verification', 'Additional resources'];
  const endOfDoc = (block: any) => {
    return block.$$id === taskBlocks.slice(-1)[0].$$id;
  };
  // @ts-ignore-next-line
  taskBlocks.slice(startingIndex).some((taskBlock) => {
    if ((taskBlock.title && typeof taskBlock.title === 'string') || endOfDoc(taskBlock)) {
      // new section, first push the previous procedure
      procedure &&
        procedure.hasSeenList &&
        procedures.push({
          ...procedure,
        });
      if (nextPossibleSections.indexOf(taskBlock.title) > -1) {
        // another (non-procedure) section
        return true;
      }
      if (!procedure || procedure.hasSeenList) {
        // next procedure
        procedure = {
          title: '',
          description: '',
          hasSeenList: false,
        };
      }
    }
    lastIndex += 1;
    if (taskBlock.context === 'floating_title') {
      (procedure as any).title = taskBlock.getTitle();
    } else {
      (procedure as any).description += elementWithoutTitle(taskBlock.convert()).outerHTML;
      if (taskBlock.context === 'olist' || taskBlock.context === 'ulist') {
        (procedure as any).hasSeenList = true;
      }
    }
  });
  return {
    procedures,
    lastIndex,
  };
};

const getRest = (taskBlocks: any[], startingIndex: number) => {
  let remainingContent = '';
  taskBlocks.slice(startingIndex).some((taskBlock, index) => {
    remainingContent += addClasses(taskBlock.convert()).outerHTML;
  });
  return remainingContent;
};

export const ProcedureAsciiDocParser = (file: string, options: any = {}) => {
  const fullAdoc = processor.load(file, {
    ...asciiOptions,
    ...options,
  });
  const docId = fullAdoc.getId();
  const docTitle = fullAdoc.getDocumentTitle();
  const taskBlocks = fullAdoc.getBlocks();
  const { intro: docIntro, lastIndex: lastIndexIntro, nextBlock } = getIntro(taskBlocks);
  const { prereqs, lastIndex: lastIndexPrereqs } = getPrereqs(taskBlocks, lastIndexIntro);
  const { procedures, lastIndex: lastIndexProcedures } = getProcedures(
    taskBlocks,
    lastIndexPrereqs,
  );
  const remainingContent = getRest(taskBlocks, lastIndexProcedures);

  const qsTasks: QuickStartTask[] = [];
  procedures.forEach((procedure, index) => {
    qsTasks.push({
      title: procedure.title || `Procedure ${index + 1}`,
      description: procedure.description,
      review: {
        instructions: 'Have you completed these steps?',
        failedTaskHelp: 'This task isn’t verified yet. Try the task again.',
      },
      summary: {
        success: 'You have completed this task!',
        failed: 'Try the steps again.',
      },
    });
  });

  const processedAsciiDoc: QuickStart = {
    metadata: {
      name: fullAdoc.getAttribute('qs-id') || docId,
    },
    spec: {
      displayName: fullAdoc.getAttribute('qs-display-name') || (docTitle as string),
      durationMinutes: fullAdoc.getAttribute('qs-duration-minutes'),
      icon: fullAdoc.getAttribute('qs-icon'),
      description: fullAdoc.getAttribute('qs-description') || docIntro,
      introduction:
        (fullAdoc.getAttribute('qs-introduction') &&
          (processor.convert(fullAdoc.getAttribute('qs-introduction')) as string)) ||
        docIntro,
      conclusion: fullAdoc.getAttribute('qs-conclusion') || remainingContent,
      prerequisites:
        (fullAdoc.getAttribute('qs-prerequisites') &&
          getListItems(processor.convert(fullAdoc.getAttribute('qs-prerequisites')) as string)) ||
        prereqs,
      nextQuickStart: fullAdoc.getAttribute('qs-next-quick-start') && [
        fullAdoc.getAttribute('qs-next-quick-start'),
      ],
      tasks: qsTasks,
    },
  };
  return processedAsciiDoc;
};
