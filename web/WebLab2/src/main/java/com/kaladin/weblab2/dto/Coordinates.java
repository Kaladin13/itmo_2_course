package com.kaladin.weblab2.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
@Setter
public class Coordinates implements Serializable {
    private double x;
    private double y;
    private double r;
}
