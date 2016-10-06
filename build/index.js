const React = require('react')
const ReactDOM = require('react-dom')

const Tag = require('../lib').Tag
const Button = require('../lib').Button
const LoadingSpinner = require('../lib').LoadingSpinner

ReactDOM.render((
  <section style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '2rem'
  }}
  >
    <section style={{display: 'flex', justifyContent: 'space-around'}}>
      <section>
        <div style={{marginBottom: '1rem'}}>
          <Button size='bg' mode='primary'>
            Big button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='bg' mode='success'>
            Big button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='bg' mode='danger'>
            Big button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='bg' mode='warning'>
            Big button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='bg' mode='link'>
            Big button
          </Button>
        </div>
      </section>
      <section style={{display: 'flex'}}>
        <section style={{margin: '0 1rem 0 0'}}>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='primary'>
              Normal button
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='success'>
              Normal button
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='danger'>
              Normal button
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='warning'>
              Normal button
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='link'>
              Normal button
            </Button>
          </div>
        </section>
        <section>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='primary'>
              <LoadingSpinner white small />
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='success'>
              <LoadingSpinner white small />
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='danger'>
              <LoadingSpinner white small />
            </Button>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <Button mode='warning'>
              <LoadingSpinner white small />
            </Button>
          </div>
        </section>
      </section>
      <section>
        <div style={{marginBottom: '1rem'}}>
          <Button size='sm' mode='danger'>
            Small button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='sm' mode='primary'>
            Small button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='sm' mode='success'>
            Small button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='sm' mode='danger'>
            Small button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='sm' mode='warning'>
            Small button
          </Button>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <Button size='sm' mode='link'>
            Small button
          </Button>
        </div>
      </section>
    </section>
    <section style={{display: 'flex', marginTop: '2rem'}}>
      <div style={{marginRight: '.5rem'}}><Tag value='example' active /></div>
      <Tag value='example' onClick={() => alert('I was clicked!')} />
    </section>
  </section>
), document.getElementById('root'))
