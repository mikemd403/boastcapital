import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

interface NewsLetterSignUpProps {
	handleEmailSignUp: (email: string) => void;
}

const NewsLetterSignUp: React.FC<NewsLetterSignUpProps> = (props) => {
	const { handleEmailSignUp } = props;
	const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);

	const handleEmailText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handleSignUp = () => {
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    if(isEmailValid) {
      setEmailInvalid(false);
		handleEmailSignUp(email);
    } else {
      setEmailInvalid(true);
    }
	}

	return (
		<Card className="news-letter-sign-up-card">
			<CardContent className="news-letter-sign-up-card-content">
        <div className="news-letter-sign-up-card-header">
          <Typography >
            Boast Newsletter
          </Typography>
          <IconButton style={{ marginLeft: '5px' }}>
            <KeyboardArrowDownIcon style={{ fill: '#031417' }}  />
          </IconButton>
        </div>
				<TextField className="news-letter-sign-up-card-textfield" variant="outlined" placeholder="example@boast.com" value={email} onChange={handleEmailText} />
        {emailInvalid && <Typography className="news-letter-sign-up-card-error">Invalid Email</Typography>}
			</CardContent>
			<Button className="news-letter-sign-up-card-button" variant="outlined" onClick={handleSignUp}><Typography>Sign Up</Typography></Button>
		</Card>
	);
}

export default NewsLetterSignUp;