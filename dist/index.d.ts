declare const emailRegex: RegExp;
declare const phoneRegex: RegExp;
declare const domainRegex: {
    dom: RegExp;
    par: RegExp;
};
declare const phoneFormChange: (phone: string) => string;
declare const passwordRegex: (min?: number, max?: number, specialChar?: string, capitalFlag?: string) => RegExp;
export { emailRegex, phoneRegex, domainRegex, phoneFormChange, passwordRegex };
