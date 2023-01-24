// import RangeSlider from "../RangeSlider"
import { useInView } from 'react-hook-inview'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProgressSlider from "../../ProgressSlider"
import getVODImage from "../../../utils/vod/getVODImage"

const EpisodeCard = ({ nextEpisode, episode }) => {
    const [ref, isVisible] = useInView({ threshold: 1 })
    const [lengthWatched, setLengthWatched] = useState(0)

    const getMiddleVerticalSliderCard = () => {
        let cardsInView = document.querySelectorAll('.scrolled-vertical-slider')
        if (!cardsInView || cardsInView.length < 1) return
        cardsInView[0].classList.add("active-vertical-slider-in-view")
    }

    useEffect(() => {
        let container = document.querySelector('.vertical-slider-wrapper')
        if (!container) return
        container.addEventListener('scroll', () => getMiddleVerticalSliderCard())
    }, [isVisible])

    return (
        <>
            <Link to={`/watch/series/${episode.id}?next=${nextEpisode.id ? nextEpisode.id : ''}&title=${episode.title}`}>
                <div ref={ref} className={styles.card}>
                    <div>
                        <img
                            className={styles.cardImg}
                            src={getVODImage(episode.image_id)}
                            alt={"poster of" + episode.title}
                        />
                    </div>
                    <div className={styles.content}>
                        <div className="title-wrapper">
                            <h3 className="max-lines-1">{episode.title}</h3>
                            <h3>{episode.duration} mins</h3>
                        </div>

                        <ProgressSlider
                            _key={episode.id}
                            progress={lengthWatched}
                        />
                    </div>
                </div>
            </Link>
        </>
    )
}

const styles = {
    card: `flex mb-3 w-full rounded-md bg-secondary text-left`,
    content: `mx-2 w-full flex-1`,
    cardImg: `h-[100px] flex-1 rounded-md`,
}

export default EpisodeCard