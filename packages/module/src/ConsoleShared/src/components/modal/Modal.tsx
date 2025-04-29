import { FC, Ref } from 'react';
import { Modal as PfModal, ModalProps as PfModalProps } from '@patternfly/react-core/deprecated';
import { css } from '@patternfly/react-styles';

type ModalProps = {
  isFullScreen?: boolean;
  ref?: Ref<PfModal>;
} & PfModalProps;

const Modal: FC<ModalProps> = ({ isFullScreen = false, className, ...props }) => (
  <PfModal
    {...props}
    className={css('pfext-modal', className)}
    appendTo={() => (isFullScreen ? document.body : document.querySelector('#modal-container'))}
  />
);

export default Modal;
