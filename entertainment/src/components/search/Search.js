import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = () => {
    const [searchData, setSearchData] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.value
        console.log('event target is ', event.target.value)
        setSearchData({ ...value })

    }

    useEffect(() => {
        console.log('search data is ', searchData)
        return () => {

        }
    }, [searchData])



    return (
        <>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="search" id="search__bar" onChange={(e) => setSearchData(e)} placeholder="search movies ..." />
                    <input type='submit' style={{ color: 'white' }} />
                </form>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div id="illustrati"></div>
            <div id="dontknowwh">
                Don’t know what to search?
            </div>
            <div id="heresanoff">
                Here’s an offer you can’t refuse
            </div>


        </>
    )
}

export default Search