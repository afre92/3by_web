import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function TextFieldGroup({ field, value, error, placeholder, type, onChange, checkUserExists, icon}) {
    return (
        <div className={classnames('input-group input-group-alternative', { 'form-control-danger': error })}>
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className={`tim-icons ${icon}`}></i>
            </div>
          </div>
          <input
            onChange={onChange}
            onBlur={checkUserExists}
            type={type}
            placeholder={placeholder}
            name={field}
            value={value}
            className="form-control"
          />
          {error && <span className='help-block'>{error}</span>}
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
    placeholder: ''
}