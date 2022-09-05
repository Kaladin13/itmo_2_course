function cleanTable() {
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