<?php

require_once "hit_result.php";

date_default_timezone_set('Europe/Moscow');

$start = microtime(true);
$current_time = date("H:i:s");

if (!isset($_POST["x"]) || !isset($_POST["y"]) || !isset($_POST["r"]))
    die("Requ");

$x = $_POST["x"];
$y = $_POST["y"];
$r = $_POST["r"];

$allowedValuesOfX = ['-4', '-3', '-2', '-1', '0', '1', '2', '3', '4'];
$allowedValuesOfR = ['1', '2', '3', '4', '5'];

if (!in_array($x, $allowedValuesOfX) || !preg_match("/^(((-?[0-3])|([3-5]).\d*(?=[1-9])[1-9])|0|(-?[12]))$/", $y) || !in_array($r, $allowedValuesOfR))
    die("Data is incorrect!");

$isHit = isHit($x, $y, $r);

$script_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;
?>

<tr>
    <th><?= $x ?></th>
    <th><?= $y ?></th>
    <th><?= $r ?></th>
    <th><?= $current_time ?></th>
    <th><?= $script_time ?></th>
    <th>
        <?php if ($isHit): ?>
            <span style='color: green'>TRUE</span>
        <?php else: ?>
            <span style='color: red'>FALSE</span>
        <?php endif; ?>
    </th>
</tr>