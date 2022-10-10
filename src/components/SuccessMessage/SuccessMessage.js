import './SuccessMessage.css'

function SuccessMessage({successText}) {
  return(
    <div className='successmessage'>
      <p className='successmessage__text'>{successText}</p>
    </div>
  )
}

export default SuccessMessage;