import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OtpInput from 'react-otp-input';
import { verifyOTP } from "../../redux/functions/auth"
import Button from "../../components/buttons/Button"
import Header from "../../components/Header"
import authStyle from "../../styles/auth.style";
import { useNavigate } from "react-router";

const Verify = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { authLoading } = useSelector(state => state.ui)
    const [otp, setOTP] = useState("")
    const [showAuthButton, setShowAuthButton] = useState(false)

    const handleInput = (e) => {
        setOTP(e)
        if (e.length === 6) setShowAuthButton(true)
        else setShowAuthButton(false)
    }

    return (
        <>
            <Header />
            <wc-toast></wc-toast>
            <main className={authStyle.main}>
                <div className={authStyle.authContainer}>
                    <h3 className={authStyle.h3}>Verify OTP</h3>
                    <div className="mt-5 flex flex-col">
                        <div className="flex flex-col mb-3 text-[#000]">
                            <OtpInput
                                value={otp}
                                onChange={handleInput}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle="outline-none border border-[#ddd] w-full min-w-[33px] lg:min-w-[40px] mr-1"
                            />
                        </div>

                        {showAuthButton ? <Button
                            isDisabled={authLoading}
                            action={() => verifyOTP(otp, dispatch, navigate)}
                            label={authLoading ? "Loading..." : "Continue"}
                        /> : <></>}


                    </div>
                </div>
            </main>
        </>
    )
}

export default Verify