import { QuickStart, QuickStartTask } from "@patternfly/quickstarts";

export const ProcedureAdocHtmlParser = (
  body: string,
  id: string,
  environmentVariables?: { [name: string]: string }
) => {
  const replaceEnvironmentVariables = (s: string | undefined) =>
    s?.replace(/\${(\w+)}/, (substring, name) => {
      return environmentVariables[name]
        ? environmentVariables[name]
        : substring;
    });

  const bodyDOM = document.createElement("body");
  bodyDOM.innerHTML = body;

  const displayName = replaceEnvironmentVariables(
    bodyDOM.querySelector("header")?.textContent.trim()
  );
  const introduction = replaceEnvironmentVariables(
    bodyDOM.querySelector(".qs-intro")?.innerHTML.trim()
  );
  const prereqs = bodyDOM.querySelectorAll(".qs-prerequisites ul li");
  const procedures = bodyDOM.querySelectorAll(".qs-task");
  const duration = bodyDOM.querySelector(".qs-duration")?.textContent.trim();
  const durationMinutes = parseInt(duration.match(/\d+/)[0]);
  const icon = bodyDOM.querySelector(".qs-icon .icon")?.innerHTML.trim();
  const description = replaceEnvironmentVariables(
    bodyDOM.querySelector(".qs-description")?.innerHTML.trim()
  );
  const conclusion = replaceEnvironmentVariables(
    bodyDOM.querySelector(".qs-conclusion")?.innerHTML.trim()
  );

  const prerequisites: string[] = [];
  prereqs.forEach((n) => {
    prerequisites.push(n.textContent.trim());
  });

  const qsTasks: QuickStartTask[] = [];
  procedures.forEach((procedure, index) => {
    const verificationBlock =
      procedure.querySelector(".olist.qs-task-verification ol");
    qsTasks.push({
      title: replaceEnvironmentVariables(
        procedure.querySelector(".qs-task-title")?.textContent.trim()
      ),
      description:
        replaceEnvironmentVariables(
          procedure.querySelector(".qs-task-description")?.innerHTML.trim()
        ) +
        replaceEnvironmentVariables(
          procedure.querySelector(".olist.qs-task-procedure ol")?.outerHTML.trim()
        ),
      review: {
        instructions: verificationBlock ? replaceEnvironmentVariables(`<ul>${verificationBlock.innerHTML}</ul>`) : "Have you completed these steps?",
        failedTaskHelp:
          replaceEnvironmentVariables(
            procedure.querySelector(".qs-review.failed")?.innerHTML.trim()
          ) || "This task isn’t verified yet. Try the task again.",
      },
      summary: {
        success:
          replaceEnvironmentVariables(
            procedure.querySelector(".qs-summary.success")?.innerHTML.trim()
          ) || "You have completed this task!",
        failed:
          replaceEnvironmentVariables(
            procedure.querySelector(".qs-summary.failed")?.innerHTML.trim()
          ) || "Try the steps again.",
      },
    });
  });

  const processedAsciiDoc: QuickStart = {
    metadata: {
      name: id,
    },
    spec: {
      displayName: displayName,
      durationMinutes,
      icon,
      description,
      introduction,
      conclusion,
      prerequisites,
      nextQuickStart: ["todo"],
      tasks: qsTasks,
    },
  };
  return processedAsciiDoc;
};
