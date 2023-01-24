
const goFullScreen = () => {
    var element = document.getElementsByTagName("video")

    element[0].requestFullscreen()
        .then(function () {
            // element has entered fullscreen mode successfully
        })
        .catch(function (error) {
            // element could not enter fullscreen mode
            // error message
            // console.log(error.message);
        })

}

export default goFullScreen