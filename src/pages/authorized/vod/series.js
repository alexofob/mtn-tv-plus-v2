import { useEffect, useState } from "react"
import { getGenres, getSeriesDetails, getSimilarMovies } from "../../../redux/functions/vod"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../../components/Loader"
import Header from "../../../components/Header"
import getGenreName from "../../../utils/vod/getGenreName"
import getVODImage from "../../../utils/vod/getVODImage"
import Button from "../../../components/buttons/Button"
import EpisodeCard from "../../../components/Cards/EpisodeCard"
import Carousel from "../../../components/Carousel"

const Series = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()
    const { vodDetailsLoading } = useSelector(state => state.ui)
    const [vodDetails, setVODDetails] = useState({})
    const [genre, setGenre] = useState("")
    const [similarMovies, setSimilarMovies] = useState([])
    const [activeSeasonEpisodes, setActiveSeasonEpisodes] = useState([])
    const [activeSeason, setActiveSeason] = useState([])
    let _index = activeSeason.number - 1

    useEffect(() => {
        const init = async () => {
            window.scrollTo(0, 0);
            setVODDetails(await getSeriesDetails(id, dispatch))
        }

        init()
    }, [location])

    useEffect(() => {
        const getGenreDetails = async () => {
            if (vodDetails && vodDetails.genres) {
                setGenre(getGenreName(vodDetails.genres, await getGenres()))
            }
        }
        getGenreDetails()
    }, [vodDetails])

    useEffect(() => {
        if (vodDetails && vodDetails.seasons) {
            setActiveSeasonEpisodes(vodDetails.seasons[0].episodes)
            setActiveSeason(vodDetails.seasons[0])
        }
    }, [vodDetails])

    useEffect(() => {
        const initFetchSimilarMovies = async () => {
            setSimilarMovies(await getSimilarMovies(id, "series", dispatch))
        }
        initFetchSimilarMovies()
    }, [])

    const selectSeason = (type) => {
        switch (type) {
            case 'NEXT':
                setActiveSeasonEpisodes(vodDetails.seasons[_index + 1].episodes)
                setActiveSeason(vodDetails.seasons[_index + 1])
                return

            case 'PREV':
                setActiveSeasonEpisodes(vodDetails.seasons[_index - 1].episodes)
                setActiveSeason(vodDetails.seasons[_index - 1])
                return

            default:
                return
        }
    }

    if (vodDetailsLoading) return (
        <Loader />
    )

    // if (vodDetails) 
    return (
        <>
            <Header />
            <wc-toast></wc-toast>
            {vodDetails ? <main>
                <div className={styles.banner}>
                    <div className={styles.bannerWrapper}>
                        <div className={styles.bannerContent}>
                            {/* <div className="max-w-[500px] m-auto text-center"> */}
                            <div className="flex-1 w-full">
                                <h1 className={styles.h1}>{vodDetails.title}</h1>
                                <div className="m-6" />
                                <p className="max-lines-8">{vodDetails.description}</p>
                                <div className="m-6" />
                                <div className="max-w-[200px] m-auto mb-10">
                                    {activeSeasonEpisodes.length > 0
                                        ? <Button label='Play' page={`/watch/series/${activeSeasonEpisodes[activeSeasonEpisodes.length - 1].id}`} />
                                        : <></>}
                                </div>
                                {vodDetails.seasons
                                    ? <div className="gradient-btn w-max text-[#fff] px-3 py-2 rounded-md m-auto mt-3 whitespace-nowrap flex items-center ">
                                        {activeSeason.number > 1 ? <NextArrow action={() => selectSeason('PREV')} /> : <></>}
                                        <div className="mx-3">SEASON {activeSeason.number}/{vodDetails.seasons.length}</div>
                                        {activeSeason.number < vodDetails.seasons.length ? <PrevArrow action={() => selectSeason('NEXT')} /> : <></>}
                                    </div>
                                    : <></>}
                                <div className="m-6" />
                                <div className="flex items-center justify-between">
                                    <p>{genre}</p>
                                    <p>{vodDetails.year}</p>
                                    <p>{vodDetails.user_rating}</p>
                                </div>
                            </div>
                            {/* <div className="max-h-[400px] overflow-scroll"> */}
                            <div className="flex-1 w-full mt-10 lg:ml-10 lg:mt-0 h-[500px] overflow-y-scroll">
                                {
                                    activeSeasonEpisodes.map((_episode, i) => {
                                        return <EpisodeCard
                                            nextEpisode={activeSeasonEpisodes[i + 1] || {}}
                                            episode={_episode}
                                            key={_episode.id}
                                        />
                                    })
                                }
                            </div>
                        </div>
                        {/* <div className="p-5 flex-1 overflow-y-scoll flex flex-col h-[300px]"> */}
                    </div>
                    {
                        vodDetails.images
                            ? <div className="fixed top-0 w-screen h-screen">
                                <img className={styles.bannerBgImg} src={getVODImage(vodDetails.images.PREVIEW || vodDetails.images.POSTER)} alt={"poster of " + vodDetails.title} />
                                <div className="banner-gradient vod-details-gradient w-full h-full fixed left-0 top-0" />
                            </div>
                            : <></>
                    }
                </div>
                <div className={styles.bannerSlide}>
                    <Carousel
                        title="More like this"
                        items={similarMovies}
                    />
                </div>
            </main> : <></>}
        </>
    )
}

const NextArrow = ({ action }) => {
    return <p onClick={action}>
        <svg xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="#fff"
            className="cursor-pointer"
            viewBox="0 0 24 24">
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
    </p>
}

const PrevArrow = ({ action }) => {
    return <p onClick={action}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="#fff"
            className="cursor-pointer"
            viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
    </p>
}

const styles = {
    banner: `text-[#fff] flex flex-col items-center -mt-[60px]`,
    bannerWrapper: `z-10 w-screen mt-[100px] pb-32 max-w-[1300px] m-auto lg:mt-[180px]`,
    bannerContent: `lg:flex mt-10 p-5`,
    bannerSlide: `z-50 w-screen`,
    bannerBgImg: `absolute top-0 left-0 h-full w-full object-cover`,
    h1: `text-3xl text-secondary font-medium`,
}

export default Series