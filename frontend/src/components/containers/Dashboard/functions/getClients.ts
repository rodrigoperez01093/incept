import axios from "axios"
import { endpoints, headers } from "../../../../config/endpoints"
import { setClients } from "../../../../redux/features/actions/application"
import { Dispatch, SetStateAction } from "react"

export const getClients = async(dispatch:Dispatch<SetStateAction<[]>>) => {
    try {
        const data = await axios.get(endpoints('clients'), headers())
        dispatch(setClients(data.data))
    } catch (error) {
        console.log(error)
    }
}