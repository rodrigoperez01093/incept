import Swal from "sweetalert2";
import { inceptOnlyWarning , inceptOnlyError , inceptOnlySuccess , inceptTwoResponsesWarning , inceptTwoResponsesSuccess } from "../../utils/swalConfig"

export const errorAlert = (text = 'Error' , outPut , denyOption) => {
    Swal.fire(
        denyOption ? {...inceptOnlyError,text: text} : {...inceptOnlyError,text: text}
    ).then((result) => {
        if(result.isConfirmed && outPut) {
            outPut();
        }
    })
};
export const successAlert = (text = 'Done!' , outPut , denyOption) => {
    Swal.fire(
        denyOption ? {...inceptTwoResponsesSuccess,text: text} : {...inceptOnlySuccess,text: text}
    ).then((result) => {
        if(result.isConfirmed && outPut) {
            outPut();
        }
    })
};
export const warningAlert = (text = 'Warning' , outPut , denyOption) => {
    Swal.fire(
        denyOption ? {...inceptTwoResponsesWarning,text: text} : {...inceptOnlyWarning,text: text}
    ).then((result) => {
        if(result.isConfirmed && outPut) {
            outPut();
        }
    })
};