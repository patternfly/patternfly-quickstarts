import * as React from 'react';
import { Portal, SimplePopper } from '../popper';

interface InteractiveSpotlightProps {
  element: Element;
}

const isInViewport = (elementToCheck: Element) => {
  const rect = elementToCheck.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const InteractiveSpotlight: React.FC<InteractiveSpotlightProps> = ({ element }) => {
  const { top, bottom, left, right, height, width } = element.getBoundingClientRect();
  const style: React.CSSProperties = {
    height,
    width,
    top,
    left,
    bottom,
    right,
  };
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (!clicked) {
      if (!isInViewport(element)) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
      const handleClick = () => setClicked(true);
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
    return () => {};
  }, [element, clicked]);

  if (clicked) {
    return null;
  }

  return (
    <Portal>
      <SimplePopper>
        <div className="pfext-spotlight pfext-spotlight__element-highlight-animate" style={style} />
      </SimplePopper>
    </Portal>
  );
};

export default InteractiveSpotlight;
