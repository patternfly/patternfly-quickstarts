import './spotlight.scss';
import * as React from 'react';
import { useBoundingClientRect } from '../../hooks';
import Portal from '../popper/Portal';

type StaticSpotlightProps = {
  element: Element;
};

const StaticSpotlight: React.FC<StaticSpotlightProps> = ({ element }) => {
  const clientRect = useBoundingClientRect(element as HTMLElement);
  const style: React.CSSProperties = clientRect
    ? {
        top: clientRect.top,
        left: clientRect.left,
        height: clientRect.height,
        width: clientRect.width,
      }
    : {};
  return clientRect ? (
    <Portal>
      <div className="pf-c-backdrop pfext-spotlight__with-backdrop">
        <div
          className="pfext-spotlight pfext-spotlight__element-highlight-noanimate"
          style={style}
        />
      </div>
    </Portal>
  ) : null;
};

export default StaticSpotlight;
