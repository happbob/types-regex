"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneFormChange = exports.domainRegex = exports.phoneRegex = exports.emailRegex = void 0;
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
