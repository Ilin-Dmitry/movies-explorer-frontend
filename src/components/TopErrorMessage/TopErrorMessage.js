import { useEffect } from 'react';
import './TopErrorMessage.css';

function TopErrorMessage({errorText}) {
function handleCloseMessage() {
  const errMessages = document.querySelectorAll('.toperrormessage');
  errMessages.forEach(message => {
    message.classList.remove('toperrormessage_active')
  })
}

useEffect(() => {
  setTimeout(handleCloseMessage, 7000)
})

  return (
    <div className='toperrormessage toperrormessage_active'>
      <div className='toperrormessage__container page__container'>
        <p className='toperrormessage__text'>{errorText}</p>
        <button className='toperrormessage__close-btn' type='button' onClick={handleCloseMessage} />
      </div>
    </div>
  )
}

export default TopErrorMessage;