const emailRegex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
const phoneRegex = /^\d{11}$/;
const domainRegex = {
    dom : /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi,
    par : /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
  }
const phoneFormChange = function (phone:string){
    if(phone.match( /^\d{11}$/ )){
        phone = phone.substr(0,3) + "-" + phone.substr(3, 4) + "-" + phone.substr(7,4);
        return phone;
    }else{
        return '';
    }
}
export {emailRegex, phoneRegex, domainRegex, phoneFormChange};