import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FaCheck } from 'react-icons/fa';
import { IoClose, IoSearch } from 'react-icons/io5';
import { components } from 'react-select';
import Input from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

// Define translations for different languages
const translations = {
  en: {
    enterValue: 'Enter value',
    required: 'This field is required',
    email: 'Enter a valid email',
    createOption: 'Create option',
    noOptions: 'No options available',
    startTyping: 'Start typing to search...',
    uploadFile: 'Upload file',
    selectDate: 'Select date',
  },
  ar: {
    enterValue: 'أدخل القيمة',
    required: 'هذه الخانة مطلوبه',
    email: 'أدخل بريد إلكتروني صالح',
    createOption: 'إنشاء خيار',
    noOptions: 'لا توجد خيارات متاحة',
    startTyping: 'ابدأ الكتابة للبحث...',
    uploadFile: 'رفع ملف',
    selectDate: 'اختر تاريخ',
  },
};

// Helper function to translate text based on language
const translate = (text, lang) => translations[lang][text] || text;

const FormField = ({
  label,
  inputLabel,
  type = 'text',
  value,
  onChange,
  error,
  language = 'en',
  placeholder,
  options = [],
  description,
  name,
  required = false,
  readOnly = false,
  tooltipText,
  disabled,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  // Determine if the language is Arabic
  const isArabic = language === 'ar';

 // Tailwind CSS classes for styling
 const sharedClasses = `appearance-none border outline-none w-full px-4 py-2 text-black transition duration-150 ease-in-out`;
 const borderColorClass = `border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
   !isFocused ? 'hover:border-black' : ''
 }`;
 const inputClasses = `rounded-lg ${sharedClasses} ${borderColorClass} ${isArabic ? 'text-right' : ''}`;
 const textAreaClasses = `sm:text-sm rounded-xl ${sharedClasses} ${borderColorClass} ${isArabic ? 'text-right' : ''}`;
 const classNameLabel = `block text-base my-2 ${
   isFocused ? 'text-blue-500' : 'text-black'
 } ${isArabic ? 'text-right' : 'text-left'} transition-colors duration-150`;
 const tooltipClasses = `text-gray-500 text-sm ${isArabic ? 'text-right' : 'text-left'}`;

 // Custom MultiValueRemove component
const CustomMultiValueRemove = (props) => (
  <components.MultiValueRemove {...props}>
    <IoClose color="#234895" /> {/* Replace the default icon with your color */}
  </components.MultiValueRemove>
);

// Updated custom styles
const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: '10px',
    borderColor: state.isFocused ? '#007BFF' : '#ddd',
    boxShadow: 'none',
    padding: '3px',
    '&:hover': {
      borderColor: 'black',
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#fff' // Keep background white when selected
      : state.isFocused
      ? '#234895' // Hover color
      : '#fff', // Default background color
    color: state.isSelected
      ? '#000' // Text color when selected
      : state.isFocused
      ? '#fff' // Text color when focused (hovered)
      : '#000', // Default text color
    '&:active': {
      backgroundColor: state.isSelected ? '#fff' : '#234895', // Override active background color
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#E0E0E0', // Set the background color for selected items
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: '#000', // Set the text color for selected items
  }),
  multiValueRemove: (base, state) => ({
    ...base,
    color: '#234895', // Change the cross icon color to your desired color
    ':hover': {
      backgroundColor: '#E0E0E0', // Optional: Set background color on hover
      color: '#234895', // Keep the cross color consistent on hover
    },
  }),
  direction: isArabic ? 'rtl' : 'ltr', // Handle RTL styling
};
  
  

  // Option component with remove functionality
  const CloseOption = (props) => (
    <components.Option {...props}>
      <div className="flex items-center justify-between text-sm">
        {props.data.label}
        <IoClose
          className="text-gray-400"
          onClick={(e) => {
            e.stopPropagation();
            onOptionDelete(props.data);
          }}
          style={{
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        />
      </div>
    </components.Option>
  );

  // No options message component for react-select
  const NoOptionsMessage = (props) => (
    <components.NoOptionsMessage {...props}>
      <div
        className="text-black text-left cursor-pointer"
        onClick={() => {
          onCreateOption(props.selectProps.inputValue);
          setInputValue(''); // Clear the input field
        }}
      >
        {props.selectProps.inputValue
          ? `${translate('createOption', language)} "${props.selectProps.inputValue}"`
          : translate('noOptions', language)}
      </div>
    </components.NoOptionsMessage>
  );

  // Handle option delete in select input
  const onOptionDelete = (optionToDelete) => {
    const newValue = value.filter((option) => option.value !== optionToDelete.value);
    onChange(newValue, {
      action: 'remove-value',
      removedValue: optionToDelete,
    });
  };

  // Handle option creation in select input
  const onCreateOption = (inputValue) => {
    if (inputValue) {
      onChange([...value, { label: inputValue, value: inputValue }], {
        action: 'create-option',
      });
    }
  };

  // Handle search click
  const onSearchClick = () => {
    // Implement search logic if needed
  };

  // Render field based on type
  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <Select
            id={name}
            name={name}
            value={options.find((option) => option.value === value)}
            classNamePrefix="react-select"
            onChange={(selected) => onChange({ target: { name, value: selected.value } })}
            options={options}
            styles={customStyles}
            components={{ NoOptionsMessage, Option: CloseOption }}
            inputValue={inputValue}
            onInputChange={(newValue) => setInputValue(newValue)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={translate(placeholder, language)} // Dynamic placeholder
            {...rest}
          />
        );
      case 'multiselect':
        return (
          <Select
            id={name}
            name={name}
            value={value}
            classNamePrefix="react-select"
            onChange={(selected) => onChange({ target: { name, value: selected } })}
            options={options}
            isMulti
            styles={customStyles}
            components={{ MultiValueRemove: CustomMultiValueRemove }} // Use the custom MultiValueRemove
            inputValue={inputValue}
            onInputChange={(newValue) => setInputValue(newValue)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={translate(placeholder, language)} // Dynamic placeholder
            isDisabled={disabled}
            {...rest}
          />
        );
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            placeholder={translate(placeholder, language)} // Dynamic placeholder
            className={textAreaClasses}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            readOnly={readOnly}
            {...rest}
            style={{ direction: isArabic ? 'rtl' : 'ltr' }}
          />
        );
      case 'checkbox':
        return (
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={value}
              className="hidden"
              onChange={onChange}
              {...rest}
            />
            <div
              className={`flex-none w-6 h-6 flex items-center justify-center border-2 rounded cursor-pointer transition-all ${
                value ? 'bg-primary border-primary' : 'border-primary hover:bg-primarylighter'
              }`}
              onClick={() => onChange({ target: { name, value: !value } })}
            >
              {value && <FaCheck className="text-white text-xs" />}
            </div>
            <label htmlFor={name} className="text-sm flex-1">
              {isArabic ? translate(inputLabel, 'ar') : inputLabel}
            </label>
          </div>
        );
      case 'tel':
        return (
          <Input
            id={name}
            name={name}
            value={value}
            placeholder={translate(placeholder, language)} // Dynamic placeholder
            type="text"
            readOnly={readOnly}
            country="US"
            className={inputClasses}
            onChange={(value) => onChange({ target: { name, value: value } })}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
            required={required}
            style={{ direction: isArabic ? 'rtl' : 'ltr' }}
          />
        );
      case 'search':
        return (
          <div className="relative">
            <input
              type="search"
              placeholder={translate(placeholder, language)} // Dynamic placeholder
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={inputClasses + ' pr-14'}
              {...rest}
              style={{ direction: isArabic ? 'rtl' : 'ltr' }}
            />
            <button
              className="absolute text-primary text-xl right-1 top-1/2 transform -translate-y-1/2 bg-secondarylight px-3 py-2 rounded-full"
              onClick={onSearchClick}
            >
              <IoSearch />
            </button>
          </div>
        );
      case 'file':
        return (
          <div className="flex flex-col">
            <label
              htmlFor={name}
              className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
            >
              <span className="flex items-center space-x-2">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.94A5 5 0 0 1 10 16H6.5a.5.5 0 0 1 0-1h3.9a4 4 1 0-3.9-4.5h2a2.5 2.5 0 1 1-2-1H4a4.5 4.5 0 1 1 4.9-4.9A5.005 5.005 0 0 1 16.88 9.94z"></path>
                </svg>
                <span className="font-medium text-gray-600">
                  {translate('uploadFile', language)} <span className="text-blue-600">browse</span>
                </span>
              </span>
              <input
                id={name}
                name={name}
                type="file"
                className="hidden"
                onChange={(e) => {
                  onChange({ target: { name, value: e.target.files[0] } });
                  setInputValue(URL.createObjectURL(e.target.files[0]));
                }}
                {...rest}
              />
            </label>
            {value && (
              <div className="mt-2 text-gray-600">
                {typeof value === 'string' ? value : value.name}
                {inputValue && (
                  <div className="mt-2">
                    {value.type && value.type.startsWith('image/') && (
                      <img src={inputValue} alt="Preview" className="max-h-32" />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      case 'date':
        return (
          <div className="customDatePickerWidth">
            <DatePicker
              selected={value}
              onChange={(date) => onChange({ target: { name, value: date } })}
              className={`${inputClasses} w-full`}
              dateFormat="yyyy/MM/dd"
              placeholderText={translate(placeholder, language)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              readOnly={disabled}
              style={{ width: '100%' }}
              {...rest}
            />
          </div>
        );

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            placeholder={translate(placeholder, language)} // Dynamic placeholder
            className={inputClasses}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            {...rest}
            style={{ direction: isArabic ? 'rtl' : 'ltr' }}
          />
        );
    }
  };

  return (
    <div className="w-full">
      {type !== 'readonly' && label && (
        <div className="flex flex-row justify-between">
          <label htmlFor={name} className={classNameLabel}>
            {isArabic ? translate(label, 'ar') : label}
          </label>

          {tooltipText && (
            <div className="flex items-center">
              {/* <ToolTip tooltipText={tooltipText} /> */}
            </div>
          )}
        </div>
      )}

      {renderField()}
      {description && (
        <p className={tooltipClasses}>
          {isArabic ? `وصف: ${description}` : `Description: ${description}`}
        </p>
      )}
      {error && (
        <div className="text-red-500 text-sm mt-1 capitalize">
          {isArabic ? translate(error, 'ar') : error}
        </div>
      )}
    </div>
  );
};

// PropTypes for the component
FormField.propTypes = {
  label: PropTypes.string,
  inputLabel: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  language: PropTypes.oneOf(['en', 'ar']),
  placeholder: PropTypes.string,
  options: PropTypes.array,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  tooltipText: PropTypes.string,
};

export default FormField;
