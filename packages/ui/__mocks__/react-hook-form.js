import React from 'react';

export const useForm = () => ({
  errors: {},
  formState: {
    isSubmitting: false,
    isValid: true,
  },
  handleSubmit: () => jest.fn().mockName('handleSubmit(fn)'),
  register: jest.fn().mockName('register'),
  watch: jest.fn().mockName('watch'),
});

export const useFormContext = () => ({
  errors: {},
  register: jest.fn().mockName('register'),
});

export const FormContext = props => {
  const formProps = useFormContext();

  return <x-FormContext {...props} {...formProps} />;
};
