const Footer = () => {
    return (
        <footer>
            <div className={styles.footerWrapper}>
                &copy;{new Date().getFullYear()} All Rights Reserved
            </div>
        </footer>
    )
}

const styles = {
    footerWrapper: `flex items-center justify-center p-10 text-center text-sm`,
}

export default Footer