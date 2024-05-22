const confirmButton = "#00D89D";
const denyButton = "#272727";
const iconWarningURI =`/icon-warning.svg`;
const iconErrorURI =`/icon-error.svg`;
const iconSuccessURI = `/icon-ok.svg`;
const iconInfoURI = `/infoIconIncept.svg`;
const basicProperties = {
    width: '400px',
    buttonsStyling: false,
    confirmButtonColor: confirmButton,
    confirmButtonText: 'Aceptar',
    imageWidth: 60,
    imageHeight: 60,
    imageAlt: 'Custom image',
    customClass: {
        popup: '.swal2-container.swal2-center>.swal2-popup',
        confirmButton: 'bg-incept-primary w-fit px-6 w-[100px] h-10 text-white rounded rounded-[20px] outline-none mr-2 transition-all hover:rounded-[4px] duration-150',
        cancelButton: 'bg-incept-black w-fit px-6 w-[100px] h-10 text-white rounded rounded-[20px] outline-none transition-all hover:rounded-[4px] duration-150'
    }
};

// -- New alerts - One option
export const inceptOnlyWarning = {
    ...basicProperties,
    text: 'Warning',
    imageUrl: iconWarningURI,
}
export const inceptOnlyError = {
    ...basicProperties,
    text: 'Error',
    imageUrl: iconErrorURI,
}
export const inceptOnlySuccess = {
    ...basicProperties,
    text: 'Done!',
    imageUrl: iconSuccessURI,
}
export const inceptOnlyInfo = {
    ...basicProperties,
    text: '',
    imageUrl: iconInfoURI,
}

// -- New alerts - Two options

export const inceptTwoResponsesWarning = {
    ...basicProperties,
    text: 'Are you sure?',
    imageUrl: iconWarningURI,
    showCancelButton: true,
    cancelButtonColor: denyButton,
    cancelButtonText: 'No',
};
export const inceptTwoResponsesSuccess = {
    ...basicProperties,
    text: 'Confirm to proceed?',
    imageUrl: iconSuccessURI,
    showCancelButton: true,
    cancelButtonColor: denyButton,
    cancelButtonText: 'No',
};


// -- Old and ugly alerts

export const swalWarning = { // recorrida todo biocomp y general
    icon: 'warning',
    text: 'Information is missing',
    confirmButtonColor: '#00D89D',
    width: '250px',
}

export const swalConfigBack = { // recorrida todo biocomp y general
    width: '250px',
    text: "Data won't be stored. Do you really want to go back?",
    icon: 'error',
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'imageWrong',
    showCancelButton: true,
    confirmButtonColor: '#00D89D',
    cancelButtonColor: '#272727',
    cancelButtonText: 'No',
    confirmButtonText: 'Yes',
};

export const swalConfigConfirm = { // recorrida todo biocomp y general
    width: '250px',
    text: 'Are you sure to confirm?',
    icon: 'success',
    imageWidth: 100,
    imageHeight: 100,
    showCancelButton: true,
    confirmButtonColor: '#00D89D',
    cancelButtonColor: '#272727',
    cancelButtonText: 'Back',
    confirmButtonText: 'Continue',
};

export const swalConfigLoading = { // recorrida todo biocomp y general
    title: 'Loading content',
    width: '250px',
};

export const swalConfigSaving = { // recorrida todo biocomp y general
    title: 'Saving data',
    width: '250px',
};

export const swalConfigOnlySuccess = { // recorrida todo biocomp y general
    width: '250px', 
    icon: 'success',
    text: 'Done!',
    imageWidth: 100,
    imageHeight: 100,
    confirmButtonColor: '#00D89D',
    confirmButtonText: 'Continue',
};

export const swalMissingInputs = { // recorrida todo biocomp y general
    icon: 'error',
    text: 'Information is missing',
    confirmButtonColor: '#00D89D',
    width: '250px',
};

export const swalMissingDates = { // recorrida todo biocomp y general
    icon: 'error',
    text: 'You must select the range of days',
    confirmButtonColor: '#00D89D',
    width: '250px',
};

export const swalMissingDate = { // recorrida todo biocomp y general
    icon: 'error',
    text: 'All days must have a date selected',
    confirmButtonColor: '#00D89D',
    width: '250px',
};