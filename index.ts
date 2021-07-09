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

const passwordRegex = function (min:number=8,max:number=20,specialChar:string='N',capitalFlag:string='N'){
    let finalReg = `^(?=.*[a-z])(?=.*[0-9])`;
    const length = `(?=.{${min},${max}})`;
    let special=``;
    let capital=``;
    if(specialChar=='Y'){
        special = `(?=.*[!@#\$%\^&\*])`;
    }
    if(capitalFlag=='Y'){
        capital = `(?=.*[A-Z])`;
    }
    finalReg = finalReg+special+capital+length;

    return new RegExp(finalReg);
}

export {emailRegex, phoneRegex, domainRegex, phoneFormChange, passwordRegex};