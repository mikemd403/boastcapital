import { useState } from 'react';
import NewsLetterSignUp from './components/NewsLetterSignUp';
import NewsLetterSuccess from './components/NewsLetterSuccess';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const [isNewsletterSignedUp, setNewsletterSignUp] = useState(false);
  const [isNewsletterSuccess, setNewsletterSuccess] = useState(false);
  const [isNewsletterClose, setNewsletterClose] = useState(false);
  
  const handleEmailSignUp = (email) => {
    setNewsletterSignUp(!isNewsletterSignedUp);
    setNewsletterSuccess(true);
  };

  const handleNewsLetterSuccess = () => {
    setNewsletterSuccess(false);
  };

  const handleNewsLetterClose = () => {
    setNewsletterClose(!isNewsletterClose);
  }

  return (
    <>
      {!isNewsletterSignedUp && !isNewsletterClose &&
        <div className='news-letter-sign-up'>
          <NewsLetterSignUp
            handleEmailSignUp={handleEmailSignUp}
            handleNewsLetterClose={handleNewsLetterClose}
          />
        </div>
      }
      {isNewsletterSuccess &&
        <div className='news-letter-sign-up'>
          <NewsLetterSuccess handleNewsLetterSuccess={handleNewsLetterSuccess} />
        </div>
      }
      {isNewsletterClose &&
        <div className="news-letter-sign-up">
          <Button
            className="news-letter-sign-up-button"
            variant="outlined"
            onClick={handleNewsLetterClose}
          >
          <Typography>Newsletter</Typography>
        </Button>
        </div>
      }
    </>
  )
}

export default App
