import s from './styles.css'

import cn from 'classnames'
import ReactDOM from 'react-dom'
import {Button} from '../buttons'
import React, {PropTypes} from 'react'

export class TextField extends React.Component {
  static propTypes = {
    size: PropTypes.string,
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
    const {
      size,
      title,
      btnText,
      placeholder,
      containerProps
    } = this.props

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
        <div
          style={{
            width: '100%',
            position: 'relative'
          }}
        >
          <input
            ref='input'
            type='text'
            value={value}
            className={cn({
              [s.input]: true,
              [s.inputBig]: size && size === 'bg',
              [s.inputSmall]: size && size === 'sm'
            })}
            onChange={this.onChange}
            placeholder={placeholder || ''}
          />
          <div
            style={{
              top: 1,
              right: 1,
              position: 'absolute'
            }}
          >
            <Button size={size || null} mode='primary' onClick={this.onSubmit}>
              {btnText || 'Submit'}
            </Button>
          </div>
          <div
            className={cn({
              [s.clearContainer]: true,
              [s.clearContainerBig]: size && size === 'bg',
              [s.clearContainerSmall]: size && size === 'sm'
            })}
            style={{display: value ? 'block' : 'none'}}
          >
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
