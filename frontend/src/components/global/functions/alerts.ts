import Swal from "sweetalert2";
import { inceptOnlyWarning , inceptOnlyError , inceptOnlySuccess , inceptTwoResponsesWarning , inceptTwoResponsesSuccess } from "../../utils/swalConfig"

export const errorAlert = (text:string = 'Error' , outPut?:any , denyOption?:boolean) => {
    Swal.fire(
        denyOption ? {...inceptOnlyError,text: text} : {...inceptOnlyError,text: text}
    ).then((result) => {
        if(result.isConfirmed && outPut) {
            outPut();
        }
    })
};
export const successAlert = (text:any = 'Done!' , outPut?:any , denyOption?:boolean) => {
    Swal.fire(
        denyOption ? {...inceptTwoResponsesSuccess,text: text} : {...inceptOnlySuccess,text: text}
    ).then((result) => {
        if(result.isConfirmed && outPut) {
            outPut();
        }
    })
};
export const warningAlert = (text:string = 'Warning' , outPut?:any , denyOption?:boolean) => {
    Swal.fire(
        denyOption ? {...inceptTwoResponsesWarning,text: text} : {...inceptOnlyWarning,text: text}
    ).then((result) => {
        if(result.isConfirmed && outPut) {
            outPut();
        }
    })
};