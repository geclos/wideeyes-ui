import cn from 'classnames'
import React, {PropTypes} from 'react'

import s from './LoadingSpinner.css'

export class LoadingSpinner extends React.Component {
  static propTypes = {
    fixed: PropTypes.bool,
    small: PropTypes.bool,
    white: PropTypes.bool
  }

  render () {
    const {fixed, white, small} = this.props

    const loadingFixed = (
      <div className={cn({
        [s.fixed]: fixed || false,
        [s.white]: white || false
      })}
      >
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.root}>
              <div className={s.spinner} />
            </div>
          </div>
        </div>
      </div>
    )

    const loading = (
      <div className={cn({
        [s.small]: small || false,
        [s.white]: white || false
      })}
      >
        <div className={s.root}>
          <div className={s.spinner} />
        </div>
      </div>
    )

    return fixed ? loadingFixed : loading
  }
}
