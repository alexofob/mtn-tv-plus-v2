import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getMovieDetails } from "../../../redux/functions/vod"
import { capitalizeString } from "../../../utils/global.utils"
import getVODImage from "../../../utils/vod/getVODImage"

const WatchlistCard = ({ content, maxLines }) => {
    const dispatch = useDispatch()
    const [vodDetails, setVODDetails] = useState({})

    useEffect(() => {
        const initgetMovieDetails = async () => {
            const _vodDetails = await getMovieDetails(content.movie_id, "", dispatch)
            setVODDetails(_vodDetails)
        }
        initgetMovieDetails()
    }, [content.movie_id])

    return (
        <>
            <Link to={`/vod/movie/` + vodDetails.id}>
                <div className={styles.card}>
                    {vodDetails.image_store_id ? <div>
                        <img className="rounded-md" src={getVODImage(vodDetails.image_store_id)} alt={"poster of " + content.title} />
                    </div> : <></>}
                </div>
            </Link>
        </>
    )
}

const styles = {
    card: `w-full max-w-[120px] lg:max-w-[150px] m-3`,
}

export default WatchlistCard