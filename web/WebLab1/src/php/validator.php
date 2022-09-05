<?php

const R_MIN = 1, R_MAX = 5;
const X_MIN = -4, X_MAX = 4;
const Y_MIN = -3, Y_MAX = 5;

function isValid($x, $y, $r): bool
{

    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r)) {
        return false;
    }

    if (!is_int(intval($x)) || !is_double(doubleval($y)) || !is_int(intval($r))) {
        return false;
    }

    if ($r < R_MIN || $r > R_MAX) {
        return false;
    }

    if ($x < X_MIN || $x > X_MAX) {
        return false;
    }

    if ($y < Y_MIN || $y > Y_MAX) {
        return false;
    }

    return true;
}