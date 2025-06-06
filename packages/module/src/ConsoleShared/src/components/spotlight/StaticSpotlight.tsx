import './spotlight.scss';
import { CSSProperties, FC } from 'react';
import { useBoundingClientRect } from '../../hooks';
import Portal from '../popper/Portal';

interface StaticSpotlightProps {
  element: Element;
}

const StaticSpotlight: FC<StaticSpotlightProps> = ({ element }) => {
  const clientRect = useBoundingClientRect(element as HTMLElement);
  const style: CSSProperties = clientRect
    ? {
        top: clientRect.top,
        left: clientRect.left,
        height: clientRect.height,
        width: clientRect.width,
      }
    : {};
  return clientRect ? (
    <Portal>
      <div className="pf-v6-c-backdrop pfext-spotlight__with-backdrop">
        <div
          className="pfext-spotlight pfext-spotlight__element-highlight-noanimate"
          style={style}
        />
      </div>
    </Portal>
  ) : null;
};

export default StaticSpotlight;
