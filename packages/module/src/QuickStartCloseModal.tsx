import * as React from 'react';
import { Button, Flex, FlexItem, ModalVariant } from '@patternfly/react-core';
import { Modal } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';

type QuickStartCloseModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const QuickStartCloseModal: React.FC<QuickStartCloseModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <Modal
      className="co-quick-start-drawer__modal"
      isOpen={isOpen}
      variant={ModalVariant.small}
      showClose={false}
      title={getResource('Leave quick start?')}
      footer={
        <Flex>
          <FlexItem align={{ default: 'alignRight' }}>
            <Button variant="secondary" onClick={onCancel}>
              {getResource('Cancel')}
            </Button>
          </FlexItem>
          <FlexItem>
            <Button variant="primary" onClick={onConfirm}>
              {getResource('Leave')}
            </Button>
          </FlexItem>
        </Flex>
      }
      isFullScreen
    >
      {getResource('Your progress will be saved.')}
    </Modal>
  );
};

export default QuickStartCloseModal;
