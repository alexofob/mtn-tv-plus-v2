import "../../ui.css"

const Loader = () => {
    return (
        <>
            {/* <Header /> */}
            <wc-toast></wc-toast>
            <main className={styles.main}>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </main>
        </>
    )
}

const styles = {
    main: `w-screen h-screen fixed top-0 flex items-center justify-center z-[1000] bg-[#000]`
}

export default Loader