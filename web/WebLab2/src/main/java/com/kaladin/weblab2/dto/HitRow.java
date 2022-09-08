package com.kaladin.weblab2.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import org.kopitubruk.util.json.JSONUtil;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class HitRow implements Serializable {
    private double x;
    private double y;
    private double r;
    private String currentTime;
    private double executionTime;
    private boolean result;

    public String jsonHit() {
        return JSONUtil.toJSON(this.getMap());
    }

    private Map<String, String> getMap() {
        Map<String, String> fields = new HashMap<>();
        fields.put("x", String.valueOf(x));
        fields.put("y", String.valueOf(y));
        fields.put("r", String.valueOf(r));
        fields.put("currentTime", String.valueOf(currentTime));
        fields.put("executionTime", String.valueOf(executionTime));
        fields.put("result", String.valueOf(result));
        return fields;
    }
}
