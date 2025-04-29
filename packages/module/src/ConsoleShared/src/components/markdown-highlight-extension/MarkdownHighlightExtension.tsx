import { FC, useEffect, useState } from 'react';
import { Spotlight } from '../spotlight';

interface MarkdownHighlightExtensionProps {
  docContext: Document;
  rootSelector: string;
}
const MarkdownHighlightExtension: FC<MarkdownHighlightExtensionProps> = ({
  docContext,
  rootSelector,
}) => {
  const [selector, setSelector] = useState<string>(null);
  useEffect(() => {
    const elements = docContext.querySelectorAll(`${rootSelector} [data-highlight]`);
    let timeoutId: NodeJS.Timeout;
    function startHighlight(e) {
      const highlightId = e.target.getAttribute('data-highlight');
      if (!highlightId) {
        return;
      }
      setSelector(null);
      timeoutId = setTimeout(() => {
        setSelector(`[data-quickstart-id="${highlightId}"]`);
      }, 0);
    }
    elements && elements.forEach((elm) => elm.addEventListener('click', startHighlight));
    return () => {
      clearTimeout(timeoutId);
      elements && elements.forEach((elm) => elm.removeEventListener('click', startHighlight));
    };
  }, [docContext, rootSelector]);
  useEffect(() => {
    const elements = docContext.querySelectorAll(`${rootSelector} [class^=data-highlight__]`);
    let timeoutId: NodeJS.Timeout;
    function startHighlight(e) {
      e.preventDefault();
      const classes = e.target.getAttribute('class').split(' ');
      let highlightId;

      for (const className of classes) {
        if (className.startsWith('data-highlight__')) {
          highlightId = className.split('__')[1];
          break;
        }
      }
      if (!highlightId) {
        return;
      }
      setSelector(null);
      timeoutId = setTimeout(() => {
        setSelector(`[data-quickstart-id="${highlightId}"]`);
      }, 0);
    }
    elements && elements.forEach((elm) => elm.addEventListener('click', startHighlight));
    return () => {
      clearTimeout(timeoutId);
      elements && elements.forEach((elm) => elm.removeEventListener('click', startHighlight));
    };
  }, [docContext, rootSelector]);
  if (!selector) {
    return null;
  }
  return <Spotlight selector={selector} interactive />;
};
export default MarkdownHighlightExtension;
