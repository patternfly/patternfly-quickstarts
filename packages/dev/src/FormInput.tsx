import React from 'react';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

export const FormInput = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: any;
}) => {
  return (
    <Form isWidthLimited>
      <FormGroup label="Substitution for 'CENTRAL'" isRequired fieldId="central-name">
        <TextInput
          value={inputValue}
          type="text"
          id="central-name"
          name="horizontal-form-name"
          onChange={setInputValue}
        />
      </FormGroup>
    </Form>
  );
};
