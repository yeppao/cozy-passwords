import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CustomCategoriesOption = props => {
  return (
    <div {...props.innerProps} className="select-option">
      <div className="select-icon">
        <FontAwesomeIcon className="cozy-blue" icon={props.data.value} />
      </div>
      <div className="select-label">{props.data.label}</div>
    </div>
  )
}
