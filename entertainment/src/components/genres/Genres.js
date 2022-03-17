import './Genres.css'
import React, {useEffect, useContext, useState} from 'react'
import moviesContext from '../../context/movieContext/MoviesContext'
import Navbar from '../Utils/Navbar'
import Cards from '../Utils/Cards'
import Paginations from '../Utils/Paginations'
import Modals from '../Utils/Modals'

const Genres = () => {
	const genreContext = useContext(moviesContext)
	const {genres, listOfGenreMovies} = genreContext
	const [page, setPage] = useState(1)
	const [content, setContent] = useState([])
	const [totalPages, setTotalPages] = useState(1)

	useEffect(() => {
		listOfGenreMovies()
	}, [])

	useEffect(() => {
		setContent(genres.results)
		setTotalPages(genres.total_pages)
	}, [listOfGenreMovies])

	const Genress = genres.length === 0 ? 'null' : genres.results.map((genre) => <Cards Genre={genre} />)

	return (
		<>
			<Navbar />
			<div className="rectanlge__flex__container">{Genress}</div>
			<Paginations setPage={setPage} totalPages={totalPages} />
			<Modals />
		</>
	)
}

export default Genres
