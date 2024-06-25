const element = (
  <div className='Container'>
    <h1 className='note'>Super Over League</h1>
    <div className='imagecontainer'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='image'
        alt='RCB-Image'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='image'
        alt='CSK-Image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
