import axios from "axios"
import { toast } from "wc-toast"
import { setAuthLoading } from "../slices/ui.slice"
import { BASE_URL, OPERATOR_UID } from "../../config/apis.config"
import routes from "../../constants/routes.const"
import { sendLog } from "../../utils/sendLog.util"


export const subscribe = async (productId, dispatch, navigate) => {
    try {

        if (!productId) {
            toast.error("Product ID not specified")
            return
        }

        dispatch(setAuthLoading(true))

        const purchaseRes = await axios.post(
            BASE_URL + `/api/purchase/?operator_uid=${OPERATOR_UID}`, {
                headers: {
                    'Password': 'tva12345#',
                    'Username': 'tva'
                },
                subscriber_uid: localStorage.getItem("_tva_username"),
                subscription_type:"one-off",
                bill: true,
                product_id: productId,
                medium: "web",
                operator: ""

        })

        if (purchaseRes.data.status === "error") {
            dispatch(setAuthLoading(false))
            toast.error(purchaseRes.data.message)
            return
        }

        dispatch(setAuthLoading(false))
        toast.success(purchaseRes.data.message)
        await sendLog({ action: "subscribe" })
        navigate(routes.home)

    } catch (e) {
        dispatch(setAuthLoading(false))
        toast.error(e.message)
        // console.error('subscribe error: ', e.message)
    }
}
