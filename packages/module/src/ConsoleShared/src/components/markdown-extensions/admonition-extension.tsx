import { useMemo } from 'react';
import { removeTemplateWhitespace } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';
import { Alert } from '@patternfly/react-core';
import LightbulbIcon from '@patternfly/react-icons/dist/js/icons/lightbulb-icon';
import FireIcon from '@patternfly/react-icons/dist/js/icons/fire-icon';
import { marked } from 'marked';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const DOMPurify = require('dompurify');

enum AdmonitionType {
  TIP = 'TIP',
  NOTE = 'NOTE',
  IMPORTANT = 'IMPORTANT',
  WARNING = 'WARNING',
  CAUTION = 'CAUTION',
}

const admonitionToAlertVariantMap = {
  [AdmonitionType.NOTE]: { variant: 'info' },
  [AdmonitionType.TIP]: { variant: 'custom', customIcon: <LightbulbIcon /> },
  [AdmonitionType.IMPORTANT]: { variant: 'danger' },
  [AdmonitionType.CAUTION]: { variant: 'warning', customIcon: <FireIcon /> },
  [AdmonitionType.WARNING]: { variant: 'warning' },
};

const useAdmonitionShowdownExtension = () =>
  // const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  useMemo(
    () => ({
      type: 'lang',
      regex: /\[(.+)]{{(admonition) ([\w-]+)}}/g,
      replace: (
        text: string,
        content: string,
        admonitionLabel: string,
        admonitionType: string,
      ): string => {
        if (!content || !admonitionLabel || !admonitionType) {
          return text;
        }
        if (admonitionLabel !== 'admonition') {
          return text;
        }
        admonitionType = admonitionType.toUpperCase();

        // Process markdown content directly using marked
        const processedContent = marked.parseInline(content);
        const sanitizedContent = DOMPurify.sanitize(processedContent);
        
        // Handle unknown admonition types by defaulting to NOTE
        const admonitionConfig = admonitionToAlertVariantMap[admonitionType] || admonitionToAlertVariantMap['NOTE'];
        const { variant, customIcon } = admonitionConfig;
        const pfAlert = (
          <Alert
            variant={variant}
            {...(customIcon && { customIcon })}
            isInline
            title={admonitionType}
            className="pfext-markdown-admonition"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </Alert>
        );
        return removeTemplateWhitespace(renderToStaticMarkup(pfAlert));
      },
    }),
    [],
  );
export default useAdmonitionShowdownExtension;
