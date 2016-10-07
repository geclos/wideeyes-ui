import s from './styles.css'

import {Button} from '../index'
import ReactDOM from 'react-dom'
import React, {PropTypes} from 'react'

export class TextField extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    btnText: PropTypes.element,
    placeholder: PropTypes.string,
    onClear: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    onClear: () => {},
    onChange: () => {},
    onSubmit: () => {},
    containerProps: {}
  }

  constructor () {
    super()
    this.onClear = this.onClear.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  state = {
    value: ''
  }

  onChange (e) {
    const { onChange } = this.props
    const value = e.target.value.trim()
    this.setState({value})
    onChange(value)
  }

  onClear () {
    const { onClear } = this.props
    this.setState({value: ''})
    onClear()
  }

  onSubmit () {
    const {onSubmit} = this.props
    const val = ReactDOM.findDOMNode(this.refs.input).value.trim()
    onSubmit(val)
  }

  render () {
    const {value} = this.state
    const {placeholder, title, btnText, containerProps} = this.props

    let header = null
    if (title) {
      header = (
        <header>
          <h5 className='text-muted' style={{fontWeight: 400}}>
            {title}
          </h5>
        </header>
      )
    }

    return (
      <div {...containerProps}>
        {header}
        <div style={{position: 'relative', width: '100%'}}>
          <input
            ref='input'
            type='text'
            value={value}
            className={s.input}
            onChange={this.onChange}
            placeholder={placeholder || ''}
          />
          <div style={{position: 'absolute', top: 1, right: 1}}>
            <Button mode='primary' onClick={this.onSubmit}>
              {btnText || 'Submit'}
            </Button>
          </div>
          <div style={{position: 'absolute', top: 11, right: 85, display: value ? 'block' : 'none'}}>
            <small>
              <Button mode='link' style={{color: '#ADBED0'}} onClick={this.onClear}>
                <i className='fa fa-times' />
              </Button>
            </small>
          </div>
        </div>
      </div>
    )
  }
}
