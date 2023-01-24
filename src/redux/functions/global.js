

// import LOG_MESSAGES from "../../constants/logMessages.const";


// export const sendLog = async (data) => {
//     const { action, content_uid, content_type, content_name, duration, instance } = data

//     try {
//         let logMessage
//         let deviceInfoCookie = cookies.get("device_info")
//         let device_id = cookies.get("device")
//         let user_uid = window.localStorage.getItem("afri_username")
//         let device_platform = deviceInfoCookie.os.name
//         let device_name = deviceInfoCookie.browser.name
//         let durationInt = 0

//         if (action === 'logout') logMessage = LOG_MESSAGES.logout
//         if (action === 'search') logMessage = LOG_MESSAGES.search
//         if (action === 'login') logMessage = LOG_MESSAGES.login
//         if (action === 'quit') logMessage = LOG_MESSAGES.quit

//         if (action === 'play' && content_type === 'movie') logMessage = LOG_MESSAGES.playMovie
//         if (action === 'play' && content_type === 'series') logMessage = LOG_MESSAGES.playSeries
//         if (action === 'play' && (content_type !== 'series' && content_type !== 'movie')) logMessage = LOG_MESSAGES.playMovie

//         if (action === 'visit' && instance === 'NG') logMessage = LOG_MESSAGES.visitLandingNG
//         if (action === 'visit' && instance === 'GH') logMessage = LOG_MESSAGES.visitLandingGH
//         if (action === 'visit' && (instance !== 'GH' && instance !== 'NG')) logMessage = LOG_MESSAGES.visitLandingGlobal

//         if (duration) {
//             duration.replace(',', '')
//             durationInt = Number(duration)
//         }

//         const requestData = {
//             "subscriber_uid": user_uid || 'anonymous',
//             "device_id": device_id,
//             "device_type": deviceInfoCookie.device.vendor || "Desktop",
//             "device_name": device_name,
//             "platform": device_platform,
//             "action": action,
//             "content_uid": content_uid,
//             "content_type": content_type,
//             "content_name": content_name,
//             "content_details": logMessage,
//             "duration": durationInt,
//             "medium": "Web"
//         }

//         const logResponse = await axios.post(logAPI(), requestData)

//         console.warn('log request data: ', requestData)
//         console.warn('log response: ', logResponse.data)


//     } catch (e) {
//         console.warn('log error:', e.message)
//     }

// }