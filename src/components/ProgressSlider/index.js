import { useEffect } from 'react'

const ProgressSlider = ({ progress, _key }) => {
    useEffect(() => {
        const initProgressSlider = () => {
            const sliderDiv = document.querySelector(`#slider_${_key}`);
            sliderDiv.style.width = `${progress}%`
        }
        initProgressSlider()
    }, [_key, progress])

    return (
        <>
            <div className={styles.range}>
                <div className={styles.slider} id={`slider_${_key}`}></div>
            </div>
        </>
    )
}

const styles = {
    range: `h-[10px] border relative overflow-hidden`,
    slider: `h-[30px] w-0 -mt-[10px] bg-[#150522]`,
}

export default ProgressSlider