import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

export default function Modals(props) {
	console.log('props child', props)
	console.log('props knownFor child', props.knownFor)
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button onClick={handleOpen}>{props.children}</Button>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				<Box sx={style}>
					{!props.knownFor > 0 ? (
						'no more'
					) : (
						<div>
							{' '}
							<Card sx={{maxWidth: 345}}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="140"
									image={`https://image.tmdb.org/t/p/w300/${props.knownFor[0].poster_path}`}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{props.knownFor[0].original_title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{props.knownFor[0].overview}
									</Typography>
								</CardContent>
								<CardActions></CardActions>
							</Card>
						</div>
					)}
				</Box>
			</Modal>
		</div>
	)
}
