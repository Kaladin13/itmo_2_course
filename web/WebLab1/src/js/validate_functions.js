function validateForm(print_permission) {

    let Y_value = $('#Y_value').val();
    let X_value = $('#X_value').val();
    let R_value = $('#R_value').val();

    let info = "";
    info += "<span>" + validateY(Y_value) + "</span>";
    info += "<span>" + validateX(X_value) + "</span>";
    info += "<span>" + validateR(R_value) + "</span>";

    if (print_permission) {
        $('.Error_text').html(info);
    }

    return (info === "<span></span>".repeat(3));
}

function validateY(field) {

    if (!(field.trim() === "")) {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(field)) {
            if ((parseInt(field) > -3) && (parseInt(field) < 5)) {
                return "";
            } else return "Координата Y задается числом в промежутке (-3...5)!\n";
        } else return "Координата Y задается числом!\n";
    } else return "Не введена координата Y!\n";
}

function validateX(field) {

    if (field === null) {
        return "Не введена координата X!\n";
    } else return "";
}

function validateR(field) {

    if (field === null) {
        return "Не введена координата R!\n";
    } else return "";
}