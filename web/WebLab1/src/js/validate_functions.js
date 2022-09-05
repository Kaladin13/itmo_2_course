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
    const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
    const integer = /^[-+]?[0-9]+$/;

    if (!(field.trim() === "")) {

        if (!field.match(decimal) && !field.match(integer)) {
            return "Координата Y задается числом!\n";
        }

        const y = parseFloat(field);

        if (y <= -3 || y >= 5) {
            return "Координата Y задается числом в промежутке (-3...5)!\n";
        }

        return "";

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