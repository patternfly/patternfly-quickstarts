import { FC, useContext } from 'react';
import { Button, Flex, FlexItem } from '@patternfly/react-core';
import { ModalVariant } from '@patternfly/react-core/deprecated';
import { Modal } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';

interface QuickStartCloseModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const QuickStartCloseModal: FC<QuickStartCloseModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  const { getResource } = useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <Modal
      isOpen={isOpen}
      variant={ModalVariant.small}
      showClose={false}
      data-test="leave-quickstart"
      title={getResource('Leave quick start?')}
      footer={
        <Flex>
          <FlexItem align={{ default: 'alignRight' }}>
            <Button variant="secondary" data-test="cancel button" onClick={onCancel}>
              {getResource('Cancel')}
            </Button>
          </FlexItem>
          <FlexItem>
            <Button variant="primary" data-test="leave button" onClick={onConfirm}>
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
