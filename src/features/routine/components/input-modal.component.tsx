import React, { Dispatch, FC, useEffect, useRef } from 'react';
import { Formik, FormikProps } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppContainer } from '../../../components/safe-area/app-container.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SecondaryButton, ButtonTitle, FormContainer } from './routine.styles';
import uuid from 'react-native-uuid';
import { InputLabel, FormInputField } from '../components/routine.styles';

import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.component';
import { TextInput } from 'react-native';

interface FormInputs {
  name: string;
  id: string;
}

type Props = {
  closeModal: Dispatch<React.SetStateAction<boolean>>;
  title: string;
  func: (data: any) => void;
  // navBarFunc?: boolean;
  formInputs?: FormInputs;
};

export const InputModal: FC<Props> = ({ closeModal, title, func }) => {
  const initialValues: FormInputs = {
    name: '',
    id: uuid.v4().toString(),
  };

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (inputRef.current) {
      timeout = setTimeout(() => {
        inputRef.current?.blur();
        inputRef.current?.focus();
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, []);

  const onSave = (data: FormInputs) => {
    func(data);
  };

  return (
    <AppContainer>
      <NavigationBar title={title} />
      <FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSave(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          }: FormikProps<FormInputs>) => (
            <>
              <KeyboardAwareScrollView>
                <InputLabel>{title}: </InputLabel>
                <FormInputField
                  ref={inputRef}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  onSubmitEditing={() => handleSubmit()}
                  keyboardType={'default'}
                />
              </KeyboardAwareScrollView>

              <SecondaryButton onPress={() => handleSubmit()}>
                <ButtonTitle>Save</ButtonTitle>
              </SecondaryButton>
              <Spacer position='bottom' size='large' />
            </>
          )}
        </Formik>
      </FormContainer>
    </AppContainer>
  );
};
