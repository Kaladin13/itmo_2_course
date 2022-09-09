<%@ page import="com.kaladin.weblab2.utils.HitListFormatter" %>
<%@ page import="com.kaladin.weblab2.utils.HitListFormatter" %>
<jsp:useBean id="hitStorage" scope="session" class="com.kaladin.weblab2.dto.HitStorage"/>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web2Lab</title>
    <script type="text/javascript" src="js/svg.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="js/graphHandler.js"></script>
    <script type="text/javascript" src="js/requestHandler.js"></script>
    <script type="text/javascript" src="js/dataHandler.js"></script>
    <script type="text/javascript" src="js/tableHandler.js"></script>
    <script type="text/javascript" src="js/windowHandler.js"></script>
    <script type="text/javascript" src="js/alertHandler.js"></script>
    <link rel="icon" href="icon/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="styles/body.css">
    <link rel="stylesheet" type="text/css" href="styles/header.css">
    <link rel="stylesheet" type="text/css" href="styles/table.css">
    <link rel="stylesheet" type="text/css" href="styles/user_input.css">
</head>

<body>
<!-- Шапка с именем и группой -->
<header>
    <div>
        <a href="https://github.com/Kaladin13/itmo_2_course/tree/master/web/WebLab2" style="text-decoration: none; color: white">
            <span>Lagus Maksim</span>
            <span>P32081</span>
            <span>Variant 7894</span>
        </a>
    </div>
</header>

<!-- Основные элементы -->
<main>
    <section class="user_input">

        <!-- Координатная плоскость с содержимым -->
        <div id='plot'></div>

        <!-- Форма для отправки данных серверу с помощью метода POST -->
        <form id="form"
              onsubmit="return sendOriginRequest()"
              onreset="clearAlerts(); clearX();">
            <!-- Блок для ввода значений переменных -->
            <div class="values">

                <!-- Блок для значения Y -->
                <div class="X_value">
                    <!-- Кнопки для ввода значения X -->
                    <label>X value:
                        <input type="button" name="X_value" value="-2">
                        <input type="button" name="X_value" value="-1.5">
                        <input type="button" name="X_value" value="-1">
                        <input type="button" name="X_value" value="-0.5">
                        <input type="button" name="X_value" value="0">
                        <input type="button" name="X_value" value="0.5">
                        <input type="button" name="X_value" value="1">
                        <input type="button" name="X_value" value="1.5">
                        <input type="button" name="X_value" value="2">
                    </label>
                </div>

                <!-- Блок для значения Y -->
                <div class="Y_value">

                    <!-- Поле ввода значения Y -->
                    <label for="Y_value">Y value:</label>
                    <input type="text" id="Y_value" name="Y_value" placeholder="Enter coordinate Y" maxlength="6">
                </div>

                <!-- Блок для значения R -->
                <div class="R_value">

                    <!-- Поле ввода значения R -->
                    <label for="R_value">R value:</label>
                    <input type="text" id="R_value" name="R_value" placeholder="Enter coordinate R" maxlength="5">
                </div>
            </div>

            <div class="Error_text">
                <span id="X_error"></span>
                <span id="Y_error"></span>
                <span id="R_error"></span>
            </div>

            <!-- Блок для кнопок отправки и обнуления -->
            <div class="buttons">
                <input id="submit" type="submit" value="SUBMIT">
                <input id="reset" type="reset" value="RESET">
            </div>

            <div id="Alert_text">
            </div>
        </form>
    </section>

    <!-- Блоки связанные с таблицей -->
    <section class="table_section">

        <!-- Кнопка очистки таблицы -->
        <div id="cleaner">
            <button>CLEAN TABLE</button>
        </div>

        <!-- Таблица регистрирующая попадания -->
        <div>
            <table id="table">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>CURRENT TIME</th>
                    <th>EXECUTION TIME</th>
                    <th>HIT RESULT</th>
                </tr>
                <%=HitListFormatter.getRows(hitStorage)%>
            </table>
        </div>
    </section>
</main>
<script>
    {resetDots(<%=HitListFormatter.getJson(hitStorage)%>)}
</script>
</body>
</html>