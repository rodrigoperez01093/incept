import axios from "axios"
import { endpoints, headers } from "../../../../../config/endpoints"
import { Dispatch } from "redux"
import { setInboundCase } from "../../../../../redux/features/actions/application"
import { errorAlert } from "../../../../global/functions/alerts"

export const getInboundCases = async(dispatch:Dispatch, dateRange:{from:string, to:string}) => {
    try {
        const { from, to } = dateRange
        const { data } = await axios.get(endpoints('inbound_case') + `?bot=28&local_updated__date__gte=${from}&local_updated__date__lte=${to}`, headers())
        dispatch(setInboundCase(data))
    } catch (error) {
        console.log(error)
        errorAlert('Ha ocurrido un error')
    }
}