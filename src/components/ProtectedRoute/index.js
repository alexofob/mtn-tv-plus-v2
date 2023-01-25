import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { COOKIES } from "../../constants/global.const"
import routes from "../../constants/routes.const"
import { checkDeviceIP } from "../../redux/functions/auth"
import Loader from "../Loader"

const ProtectedRoute = ({ children }) => {
    const navigate=useNavigate()
    const userInfoCookie = COOKIES.get("user_info")
    const [loading, setLoading] = useState(true)
    const [isIPValid, setIsIPValid] = useState(false)

    useEffect(() => {
        const initCheckIP = async () => {
            let x = await checkDeviceIP(navigate)
            setIsIPValid(x)
            if (x) setLoading(false)
        }
        initCheckIP()
    }, [navigate])

    if (loading) return <Loader />
    if (!userInfoCookie) return <Navigate replace to={routes.login} />
    return children
}

export default ProtectedRoute


// import { useEffect, useState } from "react"
// import { Navigate } from "react-router-dom"
// import { COOKIES } from "../../constants/global.const"
// import routes from "../../constants/routes.const"
// import Signup from "../../pages/authorized/signup"
// import { checkDeviceIP } from "../../redux/functions/auth"
// import Loader from "../Loader"

// const ProtectedRoute = ({ children }) => {
//     const userInfoCookie = COOKIES.get("user_info")
//     const [isIPValid, setIsIPValid] = useState(true)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         const initCheckIP = async () => {
//             await checkDeviceIP()
//         }
//         initCheckIP()
//     }, [])

//     if (userInfoCookie) return children
// }

// export default ProtectedRoute