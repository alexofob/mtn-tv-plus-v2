export const secondsToReadableTime = (t = 0) => {
    if (t) {
        const time = t;
        const formattedTime = new Date(time * 60 * 1000).toISOString().substr(11, 8);
        const hours = formattedTime.substr(0, 2)
        const minutes = formattedTime.substr(3, 2)
        const seconds = formattedTime.substr(6, 7)
        const readableTime = `${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`
        return readableTime
    }

    return '0h 0m 0s'
}

export default secondsToReadableTime