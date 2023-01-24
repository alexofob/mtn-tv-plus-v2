import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenreMovies } from "../../redux/functions/vod"
import vodStyles from "../../styles/vodGrid.style"
import Card from "../Cards/Card"
import Loader from "../Loader"

const GenreMovies = () => {
    const dispatch = useDispatch()
    const { activeMovieGenre, genreMoviesLoading } = useSelector(state => state.ui)
    const [genreMovies, setGenreMovies] = useState([])

    useEffect(() => {
        const initGetGenreMovies = async () => {
            setGenreMovies(await getGenreMovies(activeMovieGenre, dispatch))
        }
        initGetGenreMovies()
    }, [activeMovieGenre])

    if (genreMoviesLoading) return (
        <Loader />
    )

    if (genreMovies) return (
        <>
            <wc-toast></wc-toast>
            <div className={vodStyles.gridWrapper}>
                <div className={vodStyles.grid}>
                    {genreMovies.map((vod, i) => {
                        return <Card
                            key={i}
                            content={vod}
                            isGridItem
                        />
                    })}
                </div>
            </div>
        </>
    )

    return (<></>)
}

export default GenreMovies