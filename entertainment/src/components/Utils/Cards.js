import * as React from 'react'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import {red} from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Modals from './Modals'

const ExpandMore = styled((props) => {
	const {expand, ...other} = props
	return <IconButton {...other} />
})(({theme, expand}) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

export default function Cards(props) {
	console.log('card props are ', props)
	const image_300 = 'https://image.tmdb.org/t/p/w300/'
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const singleActorHandler = (e, actor) => {
		console.log('actor is ', actor)
	}

	return (
		<Modals knownFor={props.Genre.known_for}>
			<Card sx={{maxWidth: 345}}>
				<CardHeader
					avatar={
						<Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
							{props.Genre.media_type === 'movie' ? 'M' : 'S'}
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={props.Genre.name}
					subheader={props.Genre.release_date}
				/>
				<CardMedia
					component="img"
					height="194"
					image={`${image_300}/${props.Genre.profile_path}`}
					alt="Paella dish"
					style={{cursor: 'pointer'}}
					onClick={(e) => singleActorHandler(e, props.Genre.known_for)}
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						known for : {props.Genre.known_for_department}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
					<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
			</Card>
		</Modals>
	)
}

function truncate(string, length, delimiter) {
	delimiter = delimiter || ' ...;'
	return string.length > length ? string.substr(0, length) + delimiter : string
}
