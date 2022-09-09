drawTableRow = (x, y, r, currentTime, executionTime, result) => {
    let newRow = "<tr>";
    newRow += "<th>" + parseFloat(x).toFixed(3) + "</th>";
    newRow += "<th>" + parseFloat(y).toFixed(3) + "</th>";
    newRow += "<th>" + parseFloat(r).toFixed(3) + "</th>";
    newRow += "<th>" + currentTime + "</th>";
    newRow += "<th>" + executionTime + "</th>";
    newRow += (result === "false" || result === undefined)
        ? "<th><span style='color: red'>FALSE</span></th>"
        : "<th><span style='color: green'>TRUE</span></th>";
    newRow += "</tr>";
    $('#table tr:first').after(newRow);
}

cleanTable = () => {
    let standard = "<tr>\n" +
        "        <th>X</th>\n" +
        "        <th>Y</th>\n" +
        "        <th>R</th>\n" +
        "        <th>CURRENT TIME</th>\n" +
        "        <th>EXECUTION TIME</th>\n" +
        "        <th>HIT RESULT</th>\n" +
        "    </tr>"

    $('#table').html(standard);
}