package com.kaladin.weblab2.utils;

public class OutOfBoundCoordinates extends RuntimeException {

    public OutOfBoundCoordinates(String coordinateName, double coordinateValue) {
        super(String.format("Coordinate %s is out of bounds(%f)", coordinateName, coordinateValue));
    }
}
