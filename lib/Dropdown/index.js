import cn from 'classnames'
import s from './styles.css'
import Option from './Option'
import ReactDOM from 'react-dom'
import React, {PropTypes, Component} from 'react'

export class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string,
    onSelected: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    options: [],
    title: 'Options',
    onSelected: () => {}
  }

  constructor () {
    super()
    this.toggle = this.toggle.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.toggleFalse = this.toggle.bind(this, false)
  }

  componentWillMount () {
    this.setState({options: this.props.options.map((op, i) =>
      <Option key={i} option={op} onClick={this.onSelected} />
    )})
  }

  componentDidMount () {
    const elm = ReactDOM.findDOMNode(this.refs.root)
    elm.addEventListener('mouseleave', this.toggleFalse)
  }

  componentWillUnmount () {
    const elm = ReactDOM.findDOMNode(this.refs.root)
    elm.removeEventListener('mouseleave', this.toggleFalse)
  }

  state = {
    open: false,
    options: []
  }

  toggle (val) {
    this.setState({open: val != null ? val : !this.state.open})
  }

  onSelected (op) {
    const {onSelected} = this.props
    this.toggle(false)
    onSelected(op)
  }

  render () {
    const { title, containerProps } = this.props
    const { open, options } = this.state

    return (
      <section {...containerProps} ref='root'>
        <section className={s.root} onClick={() => this.toggle()}>
          <div className={s.title}>
            {title}
            <span className={s.caret}>
              <i className={cn({'fa fa-caret-down': true, [s.rotated]: open})} />
            </span>
          </div>
          <div
            className={cn({
              [s.opened]: open,
              [s.optionsContainer]: true
            })}
          >
            {options}
          </div>
        </section>
      </section>
    )
  }
}
