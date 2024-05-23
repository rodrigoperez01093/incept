import axios from "axios"
import { endpoints, headers } from "../../../../config/endpoints"
import { setClients } from "../../../../redux/features/actions/application"
import { Dispatch } from 'redux';
import { errorAlert } from "../../../global/functions/alerts"

export const getClients = async(dispatch:Dispatch) => {
    try {
        const { data } = await axios.get(endpoints('clients'), headers())
        dispatch(setClients(data))
    } catch (error:any) {
        console.log(error)
        if(error.response.status === 401) return errorAlert(`${error?.response?.data?.detail} Por favor, vuelva a iniciar sesión`)
        errorAlert('Ha ocurrido un error')
    }
}