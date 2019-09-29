import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function TextFieldGroup({ field, value, error, label, type, onChange, checkUserExists}) {
    return (
        <div className={classnames('class_Was_form-group', { 'is-invalid': error })}>
          {/* <label className="control-label">{label}</label> */}
          <input
            onChange={onChange}
            onBlur={checkUserExists}
            type={type}
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
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
    type: 'text'
}