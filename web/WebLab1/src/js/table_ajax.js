const storage = window.localStorage;

function receiveSubmit() {

    window.scrollTo(0, document.querySelector('#table').scrollHeight);

    if (validateForm(true)) {

        let Y_value = $('#Y_value').val();
        let X_value = $('#X_value').val();
        let R_value = $('#R_value').val();

        $.ajax({
            type: 'POST',
            url: '../src/php/upload.php',
            data: {'y': Y_value.trim(), 'x': X_value.trim(), 'r': R_value.trim()},
            success: function (data) {
                if (data === "Data is incorrect!") alert("Возникла ошибка: " + data);
                else {
                    storage.setItem('tableData', (storage.getItem('tableData') != null ? storage.getItem('tableData') : '') + data);
                    $('#table > tbody').append(data);
                }
            },
            error: function (data) {
                alert("Возникла ошибка: " + data);
            }
        })
    }
}