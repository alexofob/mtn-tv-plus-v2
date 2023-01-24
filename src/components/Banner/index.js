import Button from "../buttons/Button"

const Banner = ({ content }) => {
    const { title, description, bgImage, watchLink } = content

    // const clickButton = (e) => {
    //     e.click()
    // }

    if (!title && !description && !bgImage) { 
        return (
            <main className="w-full h-full flex items-center justify-center z-[1000] relative mt-[100px]">
                <button
                    className="bg-brand p-3 px-5 text-black rounded-md"
                    // ref={clickButton}
                    onClick={() => window.history.go()}
                >Refresh</button>
            </main>
        )
    }

    return (
        <div className="-mt-[60px] w-screen lg:h-screen h-[65vh] relative">
            <div className="px-5 h-full flex items-center">
                <div className="max-w-4xl mt-10 z-10">
                    <h1 className="text-3xl lg:text-5xl font-medium">{title}</h1>
                    <div className="m-6" />
                    <p>{description}</p>
                    <div className="m-6" />
                    <div className="max-w-[120px]">
                        <Button label="Play" page={watchLink} />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-screen h-full">
                <div className="banner-gradient w-full h-full absolute left-0 top-0" />
                <img src={bgImage} alt={title + " banner_image"} className="object-cover lg:object-fill h-full w-full" />
            </div>
        </div>
    )
}

export default Banner