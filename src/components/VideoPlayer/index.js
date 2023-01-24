import React, { useRef, useState, useEffect } from 'react';
import videojs from 'video.js';

// those imports are important
import qualitySelector from 'videojs-hls-quality-selector';
import qualityLevels from 'videojs-contrib-quality-levels';
import { FiMaximize } from "react-icons/fi";
import "./videoPlayer.css"
//

const VideoPlayer = ({ liveURL, title, onEnded_, onPause_, onStart_, onBufferEnd_, onPlay_, onProgress_ }) => {

    const videoRef = useRef();
    const [player, setPlayer] = useState(undefined);

    const getVideoPlayerEvents = () => {
        let videoPlayerElement = document.querySelector(".vjs-tech")

        videoPlayerElement.addEventListener("progress", () => onProgress_(videoPlayerElement))
        videoPlayerElement.addEventListener("onended", onProgress_)
        videoPlayerElement.addEventListener("onpause", onPause_)
        videoPlayerElement.addEventListener("onstart", onStart_)
        videoPlayerElement.addEventListener("onbufferend", onBufferEnd_)
        videoPlayerElement.addEventListener("onplay", onPlay_)
    }

    useEffect(() => {
        if (player) {
            player.src([liveURL]);
            getVideoPlayerEvents()
        }
    }, [liveURL]);

    useEffect(() => {
        const videoJsOptions = {
            preload: 'auto',
            autoplay: 'any',
            controls: true,
            fluid: true,
            responsive: true,
            sources: [
                {
                    src: liveURL || "",
                },
            ],
        };

        // videojs.registerPlugin('hlsQualitySelector', qualitySelector);
        const p = videojs(videoRef.current, videoJsOptions, function onPlayerReaady() {
            // console.log('onPlayerReady');
        })

        p.autoplay(true)

        // p.bigPlayButton = `<div></div>`

        setPlayer(p);
        return () => {
            if (player) player.dispose();
        };
    }, []);

    useEffect(() => {
        if (player) player.hlsQualitySelector({ displayCurrentQuality: true });
    }, [player]);
    return (
        <main className="h-[100vh] w-[100vw] overflow-hidden">
            <div className="fixed top-0 l-0 w-screen h-[60px] z-10">
                <div className="w-full h-full flex items-center justify-between px-5">
                    <p className="cursor-pointer text-sm hover:opacity-40 whitespace-nowrap transition-all" onClick={() => window.history.back()} >&larr; Back</p>
                    <p className="max-lines-1 mx-1 text-sm">{title}</p>
                    <div />
                </div>
            </div>
            <div data-vjs-player>
                <video ref={videoRef} className="video-js vjs-default-skin vjs-big-play-centered"></video>
            </div>
        </main>
    );
};

export default VideoPlayer

// style={{ position: "absolute", width: "80%", height: "20vh", background: "red" }}