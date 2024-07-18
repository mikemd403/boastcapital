import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';

interface NewsLetterSignUpProps {
	handleEmailSignUp: (email: string) => void;
  handleNewsLetterClose: () => void;
}

const NewsLetterSignUp: React.FC<NewsLetterSignUpProps> = (props) => {
	const { handleEmailSignUp, handleNewsLetterClose } = props;
	const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [send, setSend] = useState(false);

  useEffect(() => {
    if(send !== false) {
      const loading = setInterval(() => {
        handleEmailSignUp(email);
        setIsLoading(false);
        setEmail('');
        setSend(false);
      }, 1500)
      return () => {clearInterval(loading)}
    }
  }, [email, isLoading, send, handleEmailSignUp])

	const handleEmailText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handleSignUp = () => {
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    if(isEmailValid) {
      setEmailInvalid(false);
      setIsLoading(true);
      setSend(true);
    } else {
      setEmailInvalid(true);
    }
	}

	return (
		<Card className="news-letter-sign-up-card" data-test="news-letter-sign-up-card">
			<CardContent className="news-letter-sign-up-card-content">
        <div className="news-letter-sign-up-card-header">
          <Typography>
            Boast Newsletter
          </Typography>
          <IconButton style={{ marginLeft: '5px' }} onClick={handleNewsLetterClose} data-test="news-letter-close-button">
            <KeyboardArrowDownIcon style={{ fill: '#031417' }}  />
          </IconButton>
        </div>
				<TextField className="news-letter-sign-up-card-textfield" variant="outlined" placeholder="example@boast.com" value={email} onChange={handleEmailText} data-test="news-letter-sign-up-card-textfield"/>
        {emailInvalid && <Typography className="news-letter-sign-up-card-error" data-test="news-letter-sign-up-card-error">Invalid Email</Typography>}
			</CardContent>
      {!isLoading &&
        <Button className="news-letter-sign-up-card-button" variant="outlined" onClick={handleSignUp} data-test="news-letter-sign-up-card-button">
          <Typography>Sign Up</Typography>
        </Button>
      }
      {isLoading &&
        <CircularProgress style={{ color: "#00c394", marginBottom: "10px" }}/>
      }
		</Card>
	);
}

export default NewsLetterSignUp;