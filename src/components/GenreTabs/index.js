import { useDispatch, useSelector } from "react-redux"
import { genreTabItems } from "../../constants/tabs"
import { setActiveMovieGenre } from "../../redux/slices/ui.slice"

const GenreTabs = () => {
    const dispatch = useDispatch()
    const { activeMovieGenre } = useSelector(state => state.ui)

    const onTabClick = (tab) => {
        dispatch(setActiveMovieGenre(tab))
    }

    return (
        <>
            <ul className={styles.tabWraper}>
                {genreTabItems.map((tab, i) => {
                    return <li
                        key={i}
                        onClick={() => onTabClick(tab)}
                        className={activeMovieGenre === tab ? styles.activeTabItem : styles.tabItem}
                    >{tab}</li>
                })}
            </ul>
        </>
    )
}

const styles = {
    tabWraper: `w-screen overflow-x-scroll flex items-center lg:justify-center mt-5 p-3`,
    tabItem: `p-2 px-5 uppercase font-[500] border-2 border-[#ffffff22] cursor-pointer hover:opacity-50 transition-all border-borderGrey rounded-md m-1 lg:m-3`,
    activeTabItem: `bg-secondary p-1 px-3 uppercase font-[500] border-2 cursor-pointer hover:opacity-50 transition-all border-secondary rounded-md m-1 lg:m-3`,
}

export default GenreTabs