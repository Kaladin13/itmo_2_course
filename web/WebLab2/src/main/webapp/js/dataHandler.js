const X_START = -2;
const X_END = 2;

const Y_START = -5;
const Y_END = 5;

const R_START = 2;
const R_END = 5

let values = {
    x: null,
    y: null,
    r: null
};

loadValues = () => {
    values.x = $('.X_value .selected').val();
    values.y = $('#Y_value').val();
    values.r = $("#R_value").val();
}

getValues = () => {
    return values;
}

setXValue = (target) => {
    $('.X_value input[type="button"]').removeClass('selected');
    $(target).addClass('selected');
    values.x = target.value;
}

clearX = () => {
    $('.X_value input[type="button"]').removeClass('selected');
}

setYValue = (target) => {
    values.y = target.value;
}

setRValue = (target) => {
    values.r = target.value;
}

validateForm = () => {
    return validateX(values.x) &&
        validateY(values.y) &&
        validateR(values.r);
}

validateX = (x) => {
    console.log(validateButtonExist(x) &&
        validateXRange(x))
    return validateButtonExist(x) &&
        validateXRange(x);
}

validateY = (y) => {
    console.log(validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y));
    return validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y);
}

validateR = (r) => {
    console.log(validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r));
    return validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r);
}

validateButtonExist = (field) => {
    return !jQuery.isEmptyObject(field);
}

validateXRange = (field) => {
    let eps = 0.0001;
    let cur = X_START;
    while (cur < X_END + 0.5) {
        if (Math.abs(parseFloat(field) - cur) <=  eps) {
            return true;
        }
        cur+=0.5;
    }
    return false;
}

validateTextExist = (field) => {
    return !jQuery.isEmptyObject(field) && (field.trim() !== "");
}

validateTextForm = (field) => {
    return (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/).test(field);
}

validateXRange = (field) => {
    return (Number(field) >= X_START) && (Number(field) <= X_END);
}

validateYRange = (field) => {
    return (Number(field) > Y_START) && (Number(field) < Y_END);
}

validateRRange = (field) => {
    return (Number(field) > R_START) && (Number(field) < R_END);
}