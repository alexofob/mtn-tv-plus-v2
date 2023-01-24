import { useEffect } from "react"
import ReactPlayer from "react-player"

const BannerBackground = (props) => {
    const { bgImage, muted, playVideo, video, isPlaying } = props

    useEffect(() => {
        const initGetTrailer = async () => {
            // if (playVideo)
            // console.log(await getTrailer(id, ""))
        }
        initGetTrailer()
    }, [playVideo])

    if (playVideo) return (
        <ReactPlayer
            height='100%'
            width='100%'
            className={styles.videoBannerBgImg}
            url={video}
            playing={isPlaying}
            muted={muted}
            autoPlay={true}
            controls={false}
        />
    )

    else return (
        <div>
            <img className={styles.bannerBgImg} src={bgImage} alt="" />
            <div className="banner-gradient" />
        </div>
    )
}

const styles = {
    bannerBgImg: `absolute top-0 left-0 h-[50vh] lg:h-[100vh] w-full object-cover`,
    videoBannerBgImg: `react-player absolute top-0 left-0 h-full w-full object-cover`,
}

export default BannerBackground