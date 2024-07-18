import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface NewsLetterSuccessProps {
	handleNewsLetterSuccess: () => void;
}

const NewsLetterSuccess: React.FC<NewsLetterSuccessProps> = (props) => {
	const { handleNewsLetterSuccess } = props;
	const [timer, setTimer] = useState(3);

	useEffect(() => {
		const intTimer = setInterval(() => {
			setTimer(timer - 1);
		}, 1000)
		if(timer === 0) {
			handleNewsLetterSuccess();
			return clearInterval(intTimer);
		}
	}, [timer, handleNewsLetterSuccess])

	return (
		<Card style={{ borderRadius: '10px', backgroundColor: '#00c394' }}>
			<CardContent>
				<Typography className="news-letter-success-message">Thank you for signing up! 🎉</Typography>
			</CardContent>
		</Card>
	);
}

export default NewsLetterSuccess;