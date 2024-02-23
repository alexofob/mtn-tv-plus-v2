
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { AirTimePricing, MoMoPricing } from "../../constants/pricing.const"
import checkedCircle from "../../assets/icons/check-circle.svg"
import { subscribe } from "../../redux/functions/subscribe"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

const Price = ({price}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 id={price.id} className="text-base font-semibold leading-7 text-white">
            {price.name}
            </h3>
            <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-5xl font-bold tracking-tight text-white">{price.price}</span>
            
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-500">valid for {price.validity}</p>
            <button
            onClick={() => subscribe(price.id, dispatch, navigate)}
            aria-describedby={price.id}
            className="mt-10 block rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Subscribe Now
            </button>
            <p className="mt-10 text-sm font-semibold leading-6 text-white">{price.description}</p>
            <ul className="mt-6 space-y-3 leading-6 text-white/60">
            {price.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-xs">
                <img src={checkedCircle} alt="Checked Circle" />
                {feature}
                </li>
            ))}
            </ul>
        </div>
    )
}

const Subscribe = () => {
    return (
        <>
            <Header />
            <wc-toast></wc-toast>
            <div className="bg-gray-900 my-12 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Choose the right plan for&nbsp;you
                    </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/60 sm:text-center">
                    Get an Unlimited Experience of African Entertainment
                    </p>
                    <div className="mt-20 flow-root">
                        <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-5 lg:divide-x lg:divide-y-0 xl:-mx-4">
                            {AirTimePricing.map((price) => (
                                <Price price={price} key={price.id} />
                            ))}
                        </div>
                    </div>
                     <div className="mt-20 flow-root">
                        <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-5 lg:divide-x lg:divide-y-0 xl:-mx-4">
                            {MoMoPricing.map((price) => (
                                <Price price={price} key={price.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Subscribe
