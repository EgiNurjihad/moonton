import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

const TextInput = forwardRef(function TextInput({
    type = 'text',
    className,
    name,
    value,
    isFocused,
    defaultValue,
    variant = 'primary',
    autoComplete,
    required,
    handleChange,
    placeholder,
    isError,
}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);


    return (
        <input
            // {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className} ${isError ? 'input-error' : ''
                }`
            }
            ref={input}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file', 'url', 'date']),
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(['primary', 'error', 'outline-primary']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput

