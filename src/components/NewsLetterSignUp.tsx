import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewsLetterSignUp = () => {
	return (
		<Card className="news-letter-sign-up-card" style={{ borderRadius: '10px', backgroundColor: '#00c394' }}>
			<CardContent>
				<Typography>
						Sign Up to Newsletter
				</Typography>
				<TextField id="newsletter-signup" variant="outlined" placeholder="example@boast.com"/>
			</CardContent>
			<Button style={{ backgroundColor: '#031417', marginBottom: '10px' }} variant="outlined"><Typography>Sign Up</Typography></Button>
		</Card>
	);
}

export default NewsLetterSignUp;