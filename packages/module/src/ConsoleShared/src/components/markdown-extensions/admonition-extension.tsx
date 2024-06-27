import * as React from 'react';
import { removeTemplateWhitespace } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';
import { Alert } from '@patternfly/react-core';
import LightbulbIcon from '@patternfly/react-icons/dist/js/icons/lightbulb-icon';
import FireIcon from '@patternfly/react-icons/dist/js/icons/fire-icon';
import QuickStartMarkdownView from '../../../../QuickStartMarkdownView';

enum AdmonitionType {
  TIP = 'TIP',
  NOTE = 'NOTE',
  IMPORTANT = 'IMPORTANT',
  WARNING = 'WARNING',
  CAUTION = 'CAUTION',
}

const admonitionToAlertVariantMap = {
  [AdmonitionType.NOTE]: { variant: 'info' },
  [AdmonitionType.TIP]: { variant: 'default', customIcon: <LightbulbIcon /> },
  [AdmonitionType.IMPORTANT]: { variant: 'danger' },
  [AdmonitionType.CAUTION]: { variant: 'warning', customIcon: <FireIcon /> },
  [AdmonitionType.WARNING]: { variant: 'warning' },
};

const useAdmonitionShowdownExtension = () =>
  // const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
   React.useMemo(
    () => ({
      type: 'lang',
      regex: /\[(.+)]{{(admonition) ([\w-]+)}}/g,
      replace: (
        text: string,
        content: string,
        admonitionLabel: string,
        admonitionType: string,
        groupId: string,
      ): string => {
        if (!content || !admonitionLabel || !admonitionType || !groupId) {
          return text;
        }
        admonitionType = admonitionType.toUpperCase();

        const { variant, customIcon } = admonitionToAlertVariantMap[admonitionType];
        const style =
          admonitionType === AdmonitionType.CAUTION ? { backgroundColor: '#ec7a0915' } : {};
        const mdContent = <QuickStartMarkdownView content={content} />;
        const pfAlert = (
          <Alert
            variant={variant}
            customIcon={customIcon && customIcon}
            isInline
            title={admonitionType}
            className="pfext-markdown-admonition"
            style={style}
          >
            {mdContent}
          </Alert>
        );
        return removeTemplateWhitespace(renderToStaticMarkup(pfAlert));
      },
    }),
    [],
  )
;

export default useAdmonitionShowdownExtension;
