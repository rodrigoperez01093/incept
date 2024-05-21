import axios from "axios"
import { endpoints, headers } from "../../../../../config/endpoints"
import { Dispatch, SetStateAction } from "react"
import { setInboundCase } from "../../../../../redux/features/actions/application"

export const getInboundCases = async(dispatch:Dispatch<SetStateAction<{}>>, dateRange:any) => {
    try {
        const { from, to } = dateRange
        const data = await axios.get(endpoints('inbound_case') + `?bot=28&local_updated__date__gte=${from}&local_updated__date__lte=${to}`, headers())
        dispatch(setInboundCase(data.data))
    } catch (error) {
        console.log(error)
    }
}