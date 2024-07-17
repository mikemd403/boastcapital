import { useState } from 'react';
import NewsLetterSignUp from './components/NewsLetterSignUp'
import './App.css'

function App() {
  const [isNewsletterSignedUp, setNewsletterSignUp] = useState(false);

  return (
    <>
      {!isNewsletterSignedUp &&
        <div className='news-letter-sign-up'>
          <NewsLetterSignUp />
        </div>
      }
    </>
  )
}

export default App
