window.onload = function () {
    document.querySelector('.values').onchange = function () {

        let Y_value = $('#Y_value').val();
        let X_value = $('#X_value').val();
        let R_value = $('#R_value').val();
        let dot = $('#dot');

        if (validateForm(false)) {
            dot.attr('r', '5px');
            dot.attr('cx', 150 + 100 / R_value * X_value);
            dot.attr('cy', 150 - 100 / R_value * Y_value);
        }
    }
}