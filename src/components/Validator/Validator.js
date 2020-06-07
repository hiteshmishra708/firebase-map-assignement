export const isVaild = (type, val) => {
    let re;
    switch (type) {
        case 'num':
            re = /^[0-9\b]+$/;
            break;
        case 'mobilenum':
            re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
            break;
        case 'int':
            re = /^\d*[1-9]\d*$/;
            break;
        case 'email':
            re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            break;
        default:
            re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            break;
    }
    return val && re.test(val) && val.trim();
}

export const isEmpty = (val) => {
    return val && val.trim();
}