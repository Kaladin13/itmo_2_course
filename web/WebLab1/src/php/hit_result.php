<?php

function isHit($x, $y, $r): bool
{
    return isHalfCircleHit($x, $y, $r) || isRectangleHit($x, $y, $r) || isTriangleHit($x, $y, $r);
}

function isHalfCircleHit($x, $y, $r): bool
{
    return ($x * $x + $y * $y <= $r * $r / 4) && ($x <= 0) && ($y <= 0);
}

function isRectangleHit($x, $y, $r): bool
{
    return ($x >= 0) && ($y >= 0) && ($x <= $r / 2) && ($y <= $r);
}

function isTriangleHit($x, $y, $r): bool
{
    return ($x >= 0) && ($y <= 0) && ($x - 2 * $y <= $r);
}