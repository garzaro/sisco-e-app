import toastr from 'toastr'
import {toast} from "react-toastify";

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
/**generic**/
export function showToast(title, message, type) {
    toastr[type](title, message)
};

export function errorLoginMessage(message) {
    showToast('Ocorreu um erro ao fazer o login! ', message, 'error');
}
export function successLoginMessage(message) {
    showToast('Login realizado com sucesso! ', message, 'success');
}
export function errorCreateUserMessage(message) {
    showToast('Ocorreu um erro ao criar o usuário! ', message, 'error');
}
export function successCreateUserMessage(message) {
    showToast('Usuario criado com sucesso! ', message, 'success');
}