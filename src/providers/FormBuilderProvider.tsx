"use client";
import React, { createContext, useState } from 'react';

// Define the interface for the form data object
interface FormData {
  title: string;
  description: string;
  fields: FormElement[];
}

// Define the interface for a form element
export interface FormElement {
  label: string;
  type: string; // Can be "text", "email", "textarea", etc.
  option?: string[]

}

// Create the context with typed interfaces
const FormBuilderContext = createContext<({
  formData: FormData;
  addFormElement: (newElement: FormElement) => void;
  updateFormDescription: ( updatedDescription: string) => void;
  updateFormTitle: (updatedTitle: string) => void;
})>({
  formData: {
    title: '',
    description: '',
    fields: [],
  },
  addFormElement: () => {},
  updateFormTitle: () => {},
  updateFormDescription: () => {},
});

const FormBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    fields: [],
    
  });

  const addFormElement = (newElement: FormElement) => {
    setFormData((prevData) => ({ ...prevData, fields: [...prevData.fields, newElement] }));
  };

  const updateFormTitle = (updatedTitle: string) => {
    setFormData((prevData) => ({ ...prevData, title: updatedTitle}));
  };

  const updateFormDescription = (updatedDescription: string) => {
    setFormData((prevData) => ({ ...prevData, description: updatedDescription }));
  };

  return (
    <FormBuilderContext.Provider value={{ formData, addFormElement, updateFormTitle, updateFormDescription }}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export { FormBuilderContext, FormBuilderProvider };
