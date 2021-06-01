import * as React from "react";
import "@patternfly/patternfly/base/patternfly-shield-inheritable.css";
import "@patternfly/patternfly/patternfly.min.css";
import "@patternfly/patternfly/utilities/Accessibility/accessibility.css";
import "@patternfly/react-catalog-view-extension/dist/css/react-catalog-view-extension.css";
import "@patternfly/quickstarts/dist/quickstarts.css";
import {
  QuickStartDrawer,
  QuickStartCatalogPage,
  useValuesForQuickStartContext,
  QuickStartContext,
  ProcedureAsciiDocParser,
  useLocalStorage,
} from "@patternfly/quickstarts";
import { Base64 } from "js-base64";

export const QuickStartsPreview = ({
  initialData: config,
  filePath,
  vscode,
}) => {
  const decodedConfig = Base64.decode(config);
  const allQuickStarts = [];
  if (filePath.endsWith(".adoc")) {
    allQuickStarts.push(ProcedureAsciiDocParser(decodedConfig));
  } else {
    allQuickStarts.push(JSON.parse(decodedConfig));
  }
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage(
    "quickstartId",
    ""
  );
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage(
    "quickstarts",
    {}
  );
  const valuesForQuickstartContext = useValuesForQuickStartContext({
    allQuickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
  });
  return (
    <QuickStartContext.Provider value={valuesForQuickstartContext}>
      <QuickStartDrawer>
        <QuickStartCatalogPage />
      </QuickStartDrawer>
    </QuickStartContext.Provider>
  );
};
