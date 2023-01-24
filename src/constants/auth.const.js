const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
const LOG_MESSAGES = {
    login: "User logged in",
    logout: "User logged out",
    playMovie: "User played movie",
    playSeries: "User played series",
    visitLandingGlobal: "User visited global instance",
    visitLandingGH: 'User visited Ghana instance',
    visitLandingNG: 'User visited Nigeria instance',
    search: "User searched for content",
    quit: "User closed web client",
}

export { COOKIES, LOG_MESSAGES, TOAST, EMAIL_REGEXP, ERROR_MESSAGES, USER_INFO_COOKIE, LOCALSTORAGE, USER_OPERATOR_INFO }