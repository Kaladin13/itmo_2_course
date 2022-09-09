package com.kaladin.weblab2.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HitStorage implements Serializable {
    private List<HitRow> hitList = Collections.synchronizedList(new LinkedList<>());

    public void add(HitRow hitRow) {
        hitList.add(hitRow);
    }

    public void clear() {
        hitList.clear();
    }
}
