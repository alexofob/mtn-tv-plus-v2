import { sliderConfig } from "../../config/slider.config"
import Slider from "react-slick"
import Card from "../Cards/Card"
import { capitalizeString } from "../../utils/global.utils"

const Carousel = ({ maxLines = 2, showTitles = false, items = [], title }) => {
    if (items.length < 1 || !title) return (<></>)
    return (
        <>
            <div className="max-w-[2000px] px-5 py-[30px] pb-[10px] m-auto">
                <h2 className="relative text-[#fff] text-xl font-medium">{capitalizeString(title)}</h2>
                <div className="-ml-2">
                    <Slider {...sliderConfig(7)}>
                        {
                            items.map((item, i) => {
                                return (
                                    <Card
                                        key={i}
                                        content={item}
                                        showTitles={showTitles}
                                        maxLines={maxLines}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Carousel