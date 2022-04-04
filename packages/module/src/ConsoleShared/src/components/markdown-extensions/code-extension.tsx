import * as React from 'react';
import { removeTemplateWhitespace } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';
import { CodeBlock } from '@patternfly/react-core';
import './showdown-extension.scss';

const useCodeShowdownExtension = () => {
  return React.useMemo(
    () => ({
      type: 'output',
      regex: /<pre><code>(.*?)\n?<\/code><\/pre>/g,
      replace: (text: string, content: string): string => {
        if (!content) {
          return text;
        }
        const pfCodeBlock = <CodeBlock>{content}</CodeBlock>;

        return removeTemplateWhitespace(renderToStaticMarkup(pfCodeBlock));
      },
    }),
    [],
  );
};

export default useCodeShowdownExtension;
