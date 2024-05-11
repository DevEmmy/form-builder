import React from 'react'

interface ClickableInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: any
  size?: 'small' | 'medium' | 'large'; 
}

const ClickableInput = ({ type, placeholder, value, onChange, size }: ClickableInputProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'input-small';
      case 'medium':
        return 'input-medium';
      case 'large':
        return 'input-large';
      default:
        return '';
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${getSizeClass()} text-gray-600`}
    />
  )
}

export default ClickableInput
