package com.kaladin.weblab2.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
@Setter
public class HttpError implements Serializable {
    private int statusCode;
    private String errorMessage;
}
