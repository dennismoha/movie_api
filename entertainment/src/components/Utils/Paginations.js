import React, {useContext} from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import styles from 'styled-components'
import {ThemeProvider} from '@emotion/react'
import {createTheme} from '@material-ui/core'
import moviesContext from '../../context/movieContext/MoviesContext'

const Styles = styles.div`
  width:100%;
  display:flex;
  justify-content: center;
  margin-top:20px;
  margin-bottom:20px;  
`

const whiteTheme = createTheme({
	palette: {
		type: 'dark',
	},
})

export default function Paginations({setPage, totalPages = 10}) {
	const genreContext = useContext(moviesContext)
	const {listOfGenreMovies} = genreContext

	const paginationHandler = (page) => {
		listOfGenreMovies(page)
		console.log('page is ', page)
		window.scroll(0, 0)
	}

	return (
		<Styles>
			<ThemeProvider theme={whiteTheme}>
				<Stack spacing={2}>
					<Pagination
						count={totalPages}
						onChange={(e) => paginationHandler(e.target.textContent)}
						variant="outlined"
						color="primary"
					/>
				</Stack>
			</ThemeProvider>
		</Styles>
	)
}
