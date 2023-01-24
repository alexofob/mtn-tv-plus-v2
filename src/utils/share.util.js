const share = async (details) => {
    try {
        const shareData = {
            title: `Afriplay | ${details.title}`,
            text: details.description,
            url: window.location.href
        }
        await navigator.share(shareData)
    } catch (e) {
        // console.log("share: ", e)
    }
}

export default share