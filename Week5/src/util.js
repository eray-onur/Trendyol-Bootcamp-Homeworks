export function divide(param1, param2) {

    if(param2 === 0) {
        throw new Error("Number cannot be divided by zero.");
    }

    if(isNaN(param1)) {
        throw new Error("Non-number values cannot be divided.");
    }

    return param1 / param2;
}

export function toPascalCase(title) {
    return title.split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.substr(1))
                .join(' ');
}
