import { getWatchlist } from "../../redux/functions/vod"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import WatchlistCard from "../Cards/WatchlistCard"

const Watchlist = ({ active }) => {
    const dispatch = useDispatch()
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
        const initGetWatchlist = async () => {
            setWatchlist(await getWatchlist(dispatch))
        }
        initGetWatchlist()
    }, [])

    if (active === 'watchlist') return (
        <div className="watchlist flex flex-wrap">
            {
                watchlist.map((vod, i) => {
                    return (
                        <WatchlistCard key={i} content={vod} />
                    )
                })
            }
        </div>
    )

    return <></>
}

export default Watchlist