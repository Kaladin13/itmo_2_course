package com.kaladin.weblab2.utils;

import com.kaladin.weblab2.dto.Coordinates;
import org.apache.commons.math3.util.Precision;

public class CoordinatesValidation {

    private static final double MAX_X = 2, MIN_X = -2, X_INTERVAL = 0.5;
    private static final double MAX_Y = 5, MIN_Y = -5;
    private static final double MAX_R = 5, MIN_R = 2;


    static public void validate(Coordinates coordinates) {
        validateX(coordinates.getX());
        validateY(coordinates.getY());
        validateR(coordinates.getR());
    }

    static private void validateR(double r) {
        if (r > MAX_R || r < MIN_R) {
            throw new OutOfBoundCoordinates("r", r);
        }
    }

    static private void validateY(double y) {
        if (y > MAX_Y || y < MIN_Y) {
            throw new OutOfBoundCoordinates("y", y);
        }
    }

    static private void validateX(double x) {
        double currentValue = MIN_X;
        double epsilon = 0.12d;
        while (currentValue <= MAX_X + X_INTERVAL) {
            if (Precision.equals(x, currentValue, epsilon)) {
                return;
            }
            currentValue += X_INTERVAL;
        }
        throw new OutOfBoundCoordinates("x", x);
    }


}
