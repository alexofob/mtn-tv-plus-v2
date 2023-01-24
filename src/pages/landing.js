import Button from "../components/buttons/Button"
import Header from "../components/Header"
import routes from "../constants/routes.const"
import { useEffect } from "react"
import { sendLog } from "../utils/sendLog.util"
import { COOKIES } from "../constants/global.const"
import Loader from "../components/Loader"
import { useNavigate } from "react-router"

const Landing = () => {
    // const [isLoggedIn,setIsLoggedIn]
    const navigate = useNavigate()

    useEffect(() => {
        const onPageLoad = async () => {
            await sendLog({
                action: 'visit'
            })
            if (COOKIES.get("user_info")) navigate(routes.home)
        }
        onPageLoad()
    }, [navigate])

    if (!COOKIES.get("user_info")) return (
        <>
            <Header />
            <wc-toast></wc-toast>
            <main className={styles.main}>
                <div className="flex items-center flex-col justify-center h-full">
                    <div className="text-center max-w-3xl">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-[70px]">Giving You More</h1>
                        <p className="mt-5 lg:text-2xl">Bringing Your Entertainment Closer To You</p>
                        <div className="mt-10" />
                        <div className="flex flex-wrap items-center justify-center">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tvanywhereafrica.mtnssd">
                                <img src="https://res.cloudinary.com/dou9sjstz/image/upload/v1673646844/play-store_gf2vdf.svg" alt="play_store_icon" />
                            </a>
                            <a target="_blank" href="https://apps.apple.com/us/app/mtn-tv/id6444220852">
                                <img className="lg:w-[155px] w-[180px]" src="https://res.cloudinary.com/dou9sjstz/image/upload/v1673646843/app-store_bjcdjp.svg" alt="play_store_icon" />
                            </a>
                        </div>
                        <div className="mt-10" />
                        <Button page={routes.login} label="WATCH FOR FREE" />
                    </div>
                </div>
            </main>
            <footer className="lg:fixed bottom-0 left-0 w-screen p-5 -mt-[80px]">
                <div className="flex items-center justify-center text-center">
                    <p className="text-sm">Questions? <a className="text-brand text-sm" href="tel:100">Call 100</a> or email us at <a className="text-brand text-sm" href="mailto:customercare.ss@mtn.com">customercare.ss@mtn.com</a></p>
                </div>
            </footer>
        </>
    )

    return <Loader />
}

const styles = {
    main: `auth-bg w-screen min-h-[100vh] px-5 -mt-[60px] flex items-center justify-center`,
    authContainer: `bg-secondary p-5 rounded-md mx-4`,
    h3: `font-medium text-2xl`,
    input: `outline-none w-full my-2 px-3 py-2 text-sm rounded-md max-w-[300px] text-[#222]`,
}

export default Landing