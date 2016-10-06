import s from './Tag.scss'
import cn from 'classnames'
import React, { PropTypes } from 'react'

export const Tag = ({value, active, ...props}) =>
  <div className={s.container} {...props}>
    <span className={cn({[s.root]: true, [s.active]: active || false})}>
      {value}
    </span>
  </div>

Tag.propTypes = {
  active: PropTypes.bool,
  value: PropTypes.string.isRequired
}
