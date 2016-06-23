'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Button = require('../lib').Button

ReactDOM.render((
  <div>
    <div style={{marginBottom: '1rem'}}><Button size='bg' mode='primary'>This is a very long button</Button></div>
    <div style={{marginBottom: '1rem'}}><Button size='bg' mode='success'>This is a very long button</Button></div>
    <div style={{marginBottom: '1rem'}}><Button size='bg' mode='danger'>This is a very long button</Button></div>
    <div style={{marginBottom: '1rem'}}><Button size='bg' mode='warning'>This is a very long button</Button></div>
  </div>
), document.getElementById('root'))
