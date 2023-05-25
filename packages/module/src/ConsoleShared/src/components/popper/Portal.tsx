import { useIsomorphicLayoutEffect } from '@patternfly/react-core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type GetContainer = Element | null | undefined | (() => Element);

interface PortalProps {
  children: React.ReactNode;
  container?: GetContainer;
}

const getContainer = (container: GetContainer): Element | null | undefined =>
  typeof container === 'function' ? container() : container;

const Portal = ({ children, container }: PortalProps) => {
  const [containerNode, setContainerNode] = React.useState<Element>();

  useIsomorphicLayoutEffect(() => {
    setContainerNode(getContainer(container) || document.body);
  }, [container]);

  return containerNode ? ReactDOM.createPortal(children, containerNode) : null;
};

export default Portal;
