import './ErrorMessage.css'

function ErrorMessage({errorText}) {
  return(
    <div className='errormessage'>
      <p className='errormessage__text'>{errorText}</p>
    </div>
  )
}

export default ErrorMessage;