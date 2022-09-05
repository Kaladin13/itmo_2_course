<?php

require_once "hit_result.php";
require_once "validator.php";

date_default_timezone_set('Europe/Moscow');

$start = microtime(true);
$current_time = date("H:i:s");

if (!isset($_POST["x"]) || !isset($_POST["y"]) || !isset($_POST["r"]))
    die("Permitted parameters are not listed");

$x = $_POST["x"];
$y = $_POST["y"];
$r = $_POST["r"];

if (!isValid($x, $y, $r))
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