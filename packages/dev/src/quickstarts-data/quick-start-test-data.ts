import {
  QuickStart
} from "@patternfly/quickstarts";
import {
  ProcedureAdocHtmlParser,
  ProcedureAsciiDocParser,
  QuickstartAsciiDocParser,
} from "./mocks/parsers";

import { explorePipelinesQuickStart } from "./mocks/json/explore-pipeline-quickstart";
import { exploreServerlessQuickStart } from "./mocks/json/explore-serverless-quickstart";
import { monitorSampleAppQuickStart } from "./mocks/json/monitor-sampleapp-quickstart";

import addHealthchecksQuickstart from "./mocks/yamls/add-healthchecks-quickstart.yaml";
import demo from "./mocks/yamls/demo.yaml";
import installAssociatePipelineQuickstart from "./mocks/yamls/install-associate-pipeline-quickstart.yaml";
import sampleApplicationQuickstart from "./mocks/yamls/sample-application-quickstart.yaml";
import serverlessApplicationQuickstart from "./mocks/yamls/serverless-application-quickstart.yaml";
import external from "./mocks/yamls/external.yaml";
import nodeWithS2i from "./mocks/yamls/node-with-s2i.yaml";

// import addHealthchecksQuickstartADoc from "raw-loader!./mocks/asciidoc/add-healthchecks-quickstart.adoc";
// import template from "raw-loader!./mocks/asciidoc/TEMPLATE_PROCEDURE.adoc";
import sampleA from "raw-loader!./mocks/asciidoc/business-central-editing-data-sources-proc.adoc";
// import sampleB from "raw-loader!./mocks/asciidoc/case-management-dynamic-user-task-API-proc.adoc";
// import sampleC from "raw-loader!./mocks/asciidoc/template-deploy-replicas-auth-proc.adoc";

// import sampleD from "raw-loader!./mocks/html/adding_health_checks.quickstart.html";

// import { ProcQuickStartParser } from './mas-guides/procedure-parser';
// import masGettingStarted from "./mas-guides/getting-started/output/getting-started.quickstart.json";
// import masKafkaBinScripts from "./mas-guides/kafka-bin-scripts/output/kafka-bin-scripts.quickstart.json";

export const allAsciiDocImports = {
//   'template': {
//     file: template,
//     options: {
//       attributes: {
//         context: "template",
//         "qs-duration-minutes": 5,
//       },
//     }
//   },
  'sampleA': {
    file: sampleA,
    options: {
      attributes: {
        CENTRAL: "CENTRAL",
        "qs-duration-minutes": 25,
        "qs-conclusion": `You have learned how to manage data sources.`,
      },
    }
  },
//   'sampleB': {
//     file: sampleB,
//     options: {
//       attributes: {
//         CENTRAL: "CENTRAL",
//         KIE_SERVER: "KIE SERVER",
//         URL_DEVELOPING_PROCESS_SERVICES: "dev.proc.services",
//         SHOWCASE_APPLICATION_CASE_MANAGEMENT: "showcase",
//         "qs-duration-minutes": 15,
//         "qs-conclusion": `You have learned how to create a dynamic user task.`,
//         "qs-icon": `data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2UwMzQwMDt9LmNscy0ye2ZpbGw6I2NlMmUwMDt9LmNscy0ze2ZpbGw6bm9uZTt9LmNscy00e2ZpbGw6I2ZmZjt9LmNscy01e2ZpbGw6I2RjZGNkYzt9LmNscy02e2ZpbGw6I2FhYTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlJlZF9IYXQtT3BlbnNoaWZ0NC1DYXRhbG9nX0ljb25zLVNlcnZlcmxlc3M8L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik04NS4zNiwxNC42NEE1MCw1MCwwLDAsMSwxNC42NCw4NS4zNloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00MC41Nyw0Ny40MmEzLjg5LDMuODksMCwxLDAsMy44OCwzLjg4QTMuODksMy44OSwwLDAsMCw0MC41Nyw0Ny40MloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yMS40Miw0Ny40MkEzLjg5LDMuODksMCwxLDAsMjUuMyw1MS4zLDMuODksMy44OSwwLDAsMCwyMS40Miw0Ny40MloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik01MC4wOSw0OC44NmgtLjE4YTQuMTEsNC4xMSwwLDAsMS0zLjI2LTEuNjMsNy42OSw3LjY5LDAsMCwwLTEyLjE2LDAsNC4xMyw0LjEzLDAsMCwxLTMuMjYsMS42M0gzMWE0LjA5LDQuMDksMCwwLDEtMy4yNS0xLjYzQTcuNjksNy42OSwwLDAsMCwxNCw1MS45M2gwVjY0LjZhMi43OSwyLjc5LDAsMCwwLDIuNzksMi43OWgxNS44TDUxLjM0LDQ4LjY2QTQsNCwwLDAsMSw1MC4wOSw0OC44NloiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik03OC4wNSw0NC4yNWE3LjY1LDcuNjUsMCwwLDAtNS44NSwzQTQuMSw0LjEsMCwwLDEsNjksNDguODZoLS4xOWE0LjEzLDQuMTMsMCwwLDEtMy4yNi0xLjYzLDcuNjksNy42OSwwLDAsMC0xMi4xNiwwLDQuMTYsNC4xNiwwLDAsMS0yLDEuNDNMMzIuNjEsNjcuMzlIODMuMTlBMi43OSwyLjc5LDAsMCwwLDg2LDY0LjZWNTIuMDdBNy43Nyw3Ljc3LDAsMCwwLDc4LjA1LDQ0LjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTIxLjEsNjNoMTBhMS44MywxLjgzLDAsMSwwLDAtMy42NmgtMTBhMS44MywxLjgzLDAsMCwwLDAsMy42NloiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjQwLjU3IiBjeT0iMzcuNzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjQwLjU3IiBjeT0iMjguMjMiIHI9IjEuMzUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjU5LjcyIiBjeT0iMjguMjMiIHI9IjEuMzUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjIxLjQyIiBjeT0iMzcuNzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjUwIiBjeT0iNDMuNDUiIHI9IjIuOTMiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjY4Ljg5IiBjeT0iNDMuNDUiIHI9IjIuOTMiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjMxLjA5IiBjeT0iNDMuNDUiIHI9IjIuOTMiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNiIgY3g9Ijc3Ljk0IiBjeT0iNTQuMzEiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNiIgY3g9IjY4LjkxIiBjeT0iNTQuMzEiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9Ijc3Ljk0IiBjeT0iMzcuNzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjU5LjcyIiBjeT0iMzcuNzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjUwIiBjeT0iMzMuMSIgcj0iMy4wMSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMzEuMDkiIGN5PSIzMy4xIiByPSIzLjAxIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSI2OC44OSIgY3k9IjMzLjEiIHI9IjMuMDEiLz48L3N2Zz4=`,
//       },
//     }
//   },
//   'sampleC': {
//     file: sampleC,
//     options: {
//       attributes: {
//         CENTRAL: "CENTRAL",
//         KIE_SERVER: "KIE SERVER",
//         startlink: "redhat.com",
//         CENTRAL_CAPITAL_UNDER: "CAPITAL",
//         subcontext: "sub",
//         "qs-duration-minutes": 5,
//       },
//     }
//   }
}

export const allQuickStarts: QuickStart[] = [
  // explorePipelinesQuickStart,
  // exploreServerlessQuickStart,
  // monitorSampleAppQuickStart,
  addHealthchecksQuickstart,
  demo,
  installAssociatePipelineQuickstart,
  sampleApplicationQuickstart,
  serverlessApplicationQuickstart,
  external,
  nodeWithS2i,
  // QuickstartAsciiDocParser(addHealthchecksQuickstartADoc),
  // ProcedureAsciiDocParser(template, allAsciiDocImports.template.options),
  ProcedureAsciiDocParser(sampleA, allAsciiDocImports.sampleA.options),
  // ProcedureAsciiDocParser(sampleB, allAsciiDocImports.sampleB.options),
  // ProcedureAsciiDocParser(sampleC, allAsciiDocImports.sampleC.options),
  // ProcedureAdocHtmlParser(sampleD, "abc-123", {
  //   BOOTSTRAP_SERVER_HOST: "foo.kafka.devshift.net:443"
  // }),
  // ProcQuickStartParser(masGettingStarted),
  // ProcQuickStartParser(masKafkaBinScripts)
];
