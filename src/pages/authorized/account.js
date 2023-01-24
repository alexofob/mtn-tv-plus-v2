import { useState } from "react";
import Header from "../../components/Header"
import { PROFILE_TAB_ITEMS } from "../../constants/tabs";
import Watchlist from "../../components/account/Watchlist";

const Account = () => {
    const [activeTab, setActiveTab] = useState("watchlist");
    const setActiveTabName = (str) => setActiveTab(str);

    return (
        <>
            <Header />
            <wc-toast></wc-toast>
            <main className="max-w-6xl pt-10 px-5 flex lg:flex-row flex-col m-auto">
                <div className="mr-10">
                    <h2 className="mb-5 font-medium">My Account</h2>
                    <ul className="flex overflow-x-scroll lg:block lg:overflow-x-hidden">
                        {
                            PROFILE_TAB_ITEMS.map((item, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={activeTab === item.value ? styles.active : styles.tab}
                                        onClick={() => setActiveTabName(item.value)}
                                    >
                                        <img src={item.icon} className="w-[17px] mr-2" alt={item.iconAlt} />
                                        <p>{item.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.tabContentContainer}>
                    <Watchlist active={activeTab} />
                    {/* <Devices active={activeTab} />
                    <ProfileCard active={activeTab} />
                    <Support active={activeTab} /> */}
                </div>
            </main>
        </>
    )
}

// const Devices = ({ active }) => {
//     if (active === 'devices') return (<></>)
//     return <></>
// }

// const ProfileCard = ({ active }) => {
//     if (active === 'devices') return (<></>)
//     return <></>
// }

// const Support = ({ active }) => {
//     if (active === 'devices') return (<></>)
//     return <></>
// }

const styles = {
    tabContentContainer: ``,
    tab: `flex mb-3 mr-10 items-center cursor-pointer hover:opacity-80 select-none transition-all`,
    active: `text-secondary flex mr-10 mb-3 items-center cursor-pointer hover:opacity-80 select-none transition-all`,
}

export default Account