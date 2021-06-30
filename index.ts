const emailRegex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
const phoneRegex = /^\d{11}$/;
const phoneFormChange = function (phone){
    if(phone.match( /^\d{11}$/ )){
        phone = phone.substr(0,3) + "-" + phone.substr(3, 4) + "-" + phone.substr(7,4);
        return phone;
    }else{
        return '';
    }
}
export {emailRegex, phoneRegex, phoneFormChange};