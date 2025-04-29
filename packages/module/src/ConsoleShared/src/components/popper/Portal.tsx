import { useIsomorphicLayoutEffect } from '@patternfly/react-core';
import { useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type GetContainer = Element | null | undefined | (() => Element);

interface PortalProps {
  children: ReactNode;
  container?: GetContainer;
}

const getContainer = (container: GetContainer): Element | null | undefined =>
  typeof container === 'function' ? container() : container;

const Portal = ({ children, container }: PortalProps) => {
  const [containerNode, setContainerNode] = useState<Element>();

  useIsomorphicLayoutEffect(() => {
    setContainerNode(getContainer(container) || document.body);
  }, [container]);

  return containerNode ? createPortal(children, containerNode) : null;
};

export default Portal;
