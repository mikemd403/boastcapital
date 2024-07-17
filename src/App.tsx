import { useState } from 'react';
import NewsLetterSignUp from './components/NewsLetterSignUp';
import NewsLetterSuccess from './components/NewsLetterSuccess';
import './App.css'

function App() {
  const [isNewsletterSignedUp, setNewsletterSignUp] = useState(false);
  const [isNewsletterSuccess, setNewsletterSuccess] = useState(false);
  
  const handleEmailSignUp = (email) => {
    setNewsletterSignUp(!isNewsletterSignedUp);
    setNewsletterSuccess(true);
  };

  const handleNewsLetterSuccess = () => {
    setNewsletterSuccess(false);
  };

  return (
    <>
      {!isNewsletterSignedUp &&
        <div className='news-letter-sign-up'>
          <NewsLetterSignUp handleEmailSignUp={handleEmailSignUp} />
        </div>
      }
      {isNewsletterSuccess &&
        <div className='news-letter-sign-up'>
          <NewsLetterSuccess handleNewsLetterSuccess={handleNewsLetterSuccess} />
        </div>
      }
    </>
  )
}

export default App
