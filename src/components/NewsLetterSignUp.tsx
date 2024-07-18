import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface NewsLetterSignUpProps {
	handleEmailSignUp: (email: string) => void;
}

const NewsLetterSignUp: React.FC<NewsLetterSignUpProps> = (props) => {
	const { handleEmailSignUp } = props;
	const [email, setEmail] = useState('');

	const handleEmailText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handleSignUp = () => {
		handleEmailSignUp(email)
	}

	return (
		<Card className="news-letter-sign-up-card">
			<CardContent>
				<Typography className="news-letter-sign-up-card-header">
						Boast Newsletter
				</Typography>
				<TextField className="news-letter-sign-up-card-textfield" variant="outlined" placeholder="example@boast.com" value={email} onChange={handleEmailText} />
			</CardContent>
			<Button className="news-letter-sign-up-card-button" variant="outlined" onClick={handleSignUp}><Typography>Sign Up</Typography></Button>
		</Card>
	);
}

export default NewsLetterSignUp;