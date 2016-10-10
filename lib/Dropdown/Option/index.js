import s from './styles.css'
import React, {PropTypes, Component} from 'react'

class Option extends Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    const { option, onClick } = this.props
    if (option.onClick) option.onClick(option.value)
    onClick(this.props.option)
  }

  render () {
    const {option} = this.props
    return (
      <div className={s.root} onClick={this.onClick}>
        {option.value}
      </div>
    )
  }
}

Option.propTypes = {
  onClick: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired
}

module.exports = Option
