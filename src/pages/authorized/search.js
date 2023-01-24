import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSearchResults } from "../../redux/functions/vod"
import Card from "../../components/Cards/Card"
import Header from "../../components/Header"
import Loader from "../../components/Loader"
import vodStyles from "../../styles/vodGrid.style"

const Search = () => {
    const dispatch = useDispatch()
    const { searchQuery, searchResultsLoading } = useSelector(state => state.ui)
    const [searchResults, setSearchResults] = useState([])
    const [noResults, setNoResults] = useState(false)

    useEffect(() => {
        const initGetSearchResults = async () => {
            let results = await getSearchResults(searchQuery, dispatch)

            if (results) {
                if (results.length > 0) {
                    setNoResults(false)
                } else setNoResults(true)

                setSearchResults(results)
                // console.log(results)
            }
        }

        if (searchQuery) initGetSearchResults()
    }, [searchQuery])

    if (searchResultsLoading) return (
        <>
            <Header />
            <Loader />
        </>
    )

    return (
        <>
            <Header />
            <wc-toast></wc-toast>
            {searchResults && searchResults.length > 0 ?
                <div className="py-5">
                    <div className={vodStyles.gridWrapper}>
                        <div className={vodStyles.grid}>
                            {searchResults.map((vod, i) => {
                                vod.type = "movie"
                                return <Card
                                    key={i}
                                    content={vod}
                                    isGridItem
                                />
                            })}
                        </div>
                    </div>
                </div> : <></>}

            {noResults ? <div className="w-screen h-[50vh] -mt-[70px] flex items-center justify-center">
                <p>No results found for {searchQuery}</p>
            </div> : <></>}
        </>
    )
}

export default Search