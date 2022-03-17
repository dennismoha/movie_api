import React, {useEffect, useState, useContext} from 'react'
import moviesContext from '../../context/movieContext/MoviesContext'
import Navbar from '../Utils/Navbar'
import {Button, TextField} from '@material-ui/core'
import Box from '@mui/material/Box'
import SearchIcon from '@material-ui/icons/Search'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import './Search.css'
import Loader from '../Utils/Loader'

const Search = () => {
	const [searchData, setSearchData] = useState([])
	const [singleMovies, setSingleMovies] = useState([])
	const movieContext = useContext(moviesContext)
	const { fetchSearchedMovie, loading, fetchedSingleMovies} = movieContext

	const searchHandler = (e) => {	
		setSearchData(e.target.value)
	}


	const pageSections =
		singleMovies.length == 0 ? (
			<div>
				<div id="illustrati"></div>
				<div id="dontknowwh">Don’t know what to search???</div>
				<div id="heresanoff">Here’s an offer you can’t refuse</div>
			</div>
		) : (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					gap: '10px',
					position: 'absolute',
					top: '20%',
				}}
			>
				{singleMovies.results.map((cards, i) => (
					<div>
						<Grid item key={i}>
							<Card  key={i} sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
								<CardMedia
									component="img"
									image={`https://image.tmdb.org/t/p/w300/${cards.poster_path}`}
									alt="random"
									sx={{
										// 16:9
										pt: '56.25%',
									}}
									style={{height: '150px', width: '100%', padding: '0'}}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{cards.original_title}
									</Typography>
									<Typography>{truncate(cards.overview, 20, ' ')}.</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">View</Button>
									<Button size="small">Edit</Button>
								</CardActions>
							</Card>
						</Grid>
					</div>
				))}
			</div>
		)

	

	const sendSearchData = (data) => {
		fetchSearchedMovie(searchData)
	}

	useEffect(() => {		
		if (!fetchedSingleMovies) {
			setSingleMovies([])
		} else {
			setSingleMovies(fetchedSingleMovies)
		}
		
	}, [fetchSearchedMovie])

	return (
		<>
			<Navbar />
			<div className="search">
				<Box sx={{display: 'flex', alignItems: 'flex-end'}}>
					<Button
						// onClick={fetchSearch}
						variant="contained"
						style={{marginRight: '0.5'}}
						onClick={sendSearchData}
					>
						<SearchIcon fontSize="large" />
					</Button>
					<TextField
						id="input-with-sx"
						label="Search"
						variant="standard"
						className="search__bar"
						onChange={(e) => searchHandler(e)}
					/>
				</Box>{' '}
				*
			</div>
			{loading ? <Loader /> : pageSections}
		</>
	)
}

function truncate(string, length, delimiter) {
	delimiter = delimiter || ' ...;'
	return string.length > length ? string.substr(0, length) + delimiter : string
}

export default Search
