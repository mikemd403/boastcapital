import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewsLetterSignUp = (props) => {
	const { handleEmailSignUp } = props;
	const [email, setEmail] = useState('');

	const handleEmailText = (event) => {
		setEmail(event.target.value);
	}

	const handleSignUp = () => {
		handleEmailSignUp(email)
	}

	return (
		<Card className="news-letter-sign-up-card" style={{ borderRadius: '10px', backgroundColor: '#00c394' }}>
			<CardContent>
				<Typography>
						Sign Up to Newsletter
				</Typography>
				<TextField id="newsletter-signup" variant="outlined" placeholder="example@boast.com" value={email} onChange={handleEmailText} />
			</CardContent>
			<Button style={{ backgroundColor: '#031417', marginBottom: '10px' }} variant="outlined" onClick={handleSignUp}><Typography>Sign Up</Typography></Button>
		</Card>
	);
}

export default NewsLetterSignUp;