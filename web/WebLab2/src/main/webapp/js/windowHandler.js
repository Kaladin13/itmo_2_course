window.onload = () => {
    // {drawPlot()}
    console.log("^_^")
    console.log("Made by kaladin aka maksim lagus")
    console.log("^_^")
    $("#plot").on("click", (e) => {
        clearServerAlert();
        clickPointEvent(e);
    });

    $(".X_value").on("click", (e) => {
        let x = e.target;
        if (validateX(x.value)) {
            setXValue(x);
        }
        injectXAlert(x.value);
    });

    $('#Y_value').on("input", (e) => {
        let y = e.target;
        if (validateY(y.value)) {
            setYValue(y);
        }
        injectYAlert(y.value);
    });

    $('#R_value').on("input", (e) => {
        let r = e.target;
        if (validateR(r.value)) {
            setRValue(r);
            switchRadius(getValues());
        }
        injectRAlert(r.value);
    });

    $('#cleaner').on("click", () => {
        cleanPlot();
        cleanTable();
        clearRequest();
    });
}