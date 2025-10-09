
export const saveSessionVar = (keyName, keyValue) => {
    //Make sure both truthy.
    if (keyName && keyValue) {
        if (Array.isArray(keyValue)) {
            keyValue = JSON.stringify(keyValue);
        }
        sessionStorage.setItem(keyName, keyValue);
    }
};

export const getSessionVar = (keyName) => {
    if (keyName) {
        const value = sessionStorage.getItem(keyName);

        //May need to investigate better way to do this.
        try {
            return JSON.parse(value);
        } catch {
            return value; // plain string
        }
    }
};