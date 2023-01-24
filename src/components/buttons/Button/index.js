import { Link } from "react-router-dom"

const Button = ({ label, action, icon, page, isDisabled }) => {
    if (action) return (
        <button disabled={isDisabled} onClick={action} className={styles.btn}>
            {icon ? <div className="mr-1">{icon}</div> : <></>}
            <p className="text-[18px] ">{label}</p>
        </button>
    )

    if (page) return (
        <Link className={styles.btn} to={page}>
            {icon ? <div className="mr-1">{icon}</div> : <></>}
            <p className="text-[18px] ">{label}</p>
        </Link>
    )

    return <></>
}

const styles = {
    btn: `bg-brand disabled:opacity-50 text-black font-medium border-2 border-secondary active:scale-90 hover:opacity-70 transition-all whitespace-nowrap flex items-center justify-center px-[20px] py-[8px] px-4 rounded-md`
}

export default Button