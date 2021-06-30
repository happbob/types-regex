declare const emailRegex: RegExp;
declare const phoneRegex: RegExp;
declare const domainRegex: {
    dom: RegExp;
    par: RegExp;
};
declare const phoneFormChange: (phone: string) => string;
export { emailRegex, phoneRegex, domainRegex, phoneFormChange };
