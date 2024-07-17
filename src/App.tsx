import { useState } from 'react';
import NewsLetterSignUp from './components/NewsLetterSignUp'
import './App.css'

function App() {
  const [isNewsletterSignedUp, setNewsletterSignUp] = useState(false);
  
  const handleEmailSignUp = (email) => {
    setNewsletterSignUp(!isNewsletterSignedUp);
    console.log(email);
  }

  return (
    <>
      {!isNewsletterSignedUp &&
        <div className='news-letter-sign-up'>
          <NewsLetterSignUp handleEmailSignUp={handleEmailSignUp} />
        </div>
      }
    </>
  )
}

export default App
