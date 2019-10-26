import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function TextFieldGroup({ field, value, error, placeholder, type, onChange, onBlur, icon , required, disabled}) {
    return (
        <div className={classnames('input-group input-group-alternative', { 'has-danger': error })}>
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className={`tim-icons ${icon}`}></i>
            </div>
          </div>
          <input
            onChange={onChange}
            onBlur={onBlur}
            type={type}
            placeholder={placeholder}
            name={field}
            value={value}
            className="form-control"
            required={required}
            disabled={disabled}
          />
          <div className="w-100">
          {error && <span className='help-block'>{error}</span>}
          </div>
        </div> 
    )
}


TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
    type: 'text',
    placeholder: '',
    required: false,
    disabled: false
}