"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRegex = exports.phoneFormChange = exports.domainRegex = exports.phoneRegex = exports.emailRegex = void 0;
var emailRegex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
exports.emailRegex = emailRegex;
var phoneRegex = /^\d{11}$/;
exports.phoneRegex = phoneRegex;
var domainRegex = {
    dom: /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi,
    par: /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
};
exports.domainRegex = domainRegex;
var phoneFormChange = function (phone) {
    if (phone.match(/^\d{11}$/)) {
        phone = phone.substr(0, 3) + "-" + phone.substr(3, 4) + "-" + phone.substr(7, 4);
        return phone;
    }
    else {
        return '';
    }
};
exports.phoneFormChange = phoneFormChange;
var passwordRegex = function (min, max, specialChar, capitalFlag) {
    if (min === void 0) { min = 8; }
    if (max === void 0) { max = 20; }
    if (specialChar === void 0) { specialChar = 'N'; }
    if (capitalFlag === void 0) { capitalFlag = 'N'; }
    var finalReg = "^(?=.*[a-z])(?=.*[0-9])";
    var length = "(?=.{" + min + "," + max + "}$)";
    var special = "";
    var capital = "";
    if (specialChar == 'Y') {
        special = "(?=.*[!@#$%^&*])";
    }
    if (capitalFlag == 'Y') {
        capital = "(?=.*[A-Z])";
    }
    finalReg = finalReg + special + capital + length;
    return new RegExp(finalReg);
};
exports.passwordRegex = passwordRegex;
