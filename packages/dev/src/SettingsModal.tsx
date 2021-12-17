import React from 'react';
import {
  Modal,
  ModalVariant,
  Stack,
  StackItem,
  Switch,
  ToggleGroup,
  ToggleGroupItem,
} from '@patternfly/react-core';
import { QuickStartContext } from '@patternfly/quickstarts';
import i18n from './i18n/i18n';

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const {
    setResourceBundle,
    setAlwaysShowTaskReview,
    alwaysShowTaskReview,
    language: currentLanguage,
  } = React.useContext(QuickStartContext);

  const languages = [
    { name: 'English', shortName: 'en' },
    { name: 'Japanese', shortName: 'ja' },
    { name: 'Czech', shortName: 'cs' }
  ];

  const [language, setLanguage] = React.useState(currentLanguage);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('bridge/language', lng);
    const resourceBundle = i18n.getResourceBundle(lng, 'quickstart');
    setResourceBundle(resourceBundle, lng);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} variant={ModalVariant.small} title="Settings">
      <Stack hasGutter>
        <StackItem>
          <Switch
            label="Always show task review under task details"
            labelOff="Only show task review at end of task"
            onChange={setAlwaysShowTaskReview}
            isChecked={alwaysShowTaskReview}
          />
        </StackItem>
        <StackItem>
          <ToggleGroup aria-label="Default with multiple selectable">
            {languages.map(({ name, shortName }) => (
              <ToggleGroupItem
                text={name}
                key={name}
                buttonId={shortName}
                isSelected={language === shortName}
                onChange={() => changeLanguage(shortName)}
              />
            ))}
          </ToggleGroup>
        </StackItem>
      </Stack>
    </Modal>
  );
};
