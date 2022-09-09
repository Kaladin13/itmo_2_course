package com.kaladin.weblab2.utils;

import com.kaladin.weblab2.dto.HitRow;
import com.kaladin.weblab2.dto.HitStorage;
import org.kopitubruk.util.json.JSONUtil;

import java.util.HashSet;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;

public class HitListFormatter {

    public static String getRows(HitStorage hitStorage) {
        List<HitRow> hitList = hitStorage.getHitList();
        ListIterator<HitRow> hitListIterator = hitList.listIterator(hitList.size());
        StringBuilder rows = new StringBuilder();
        while (hitListIterator.hasPrevious()) {
            HitRow hitRow = hitListIterator.previous();
            rows.append("<tr>")
                    .append("<th>").append(String.format("%.3f", hitRow.getX())).append("</th>")
                    .append("<th>").append(String.format("%.3f", hitRow.getY())).append("</th>")
                    .append("<th>").append(String.format("%.3f", hitRow.getR())).append("</th>")
                    .append("<th>").append(hitRow.getCurrentTime()).append("</th>")
                    .append("<th>").append(hitRow.getExecutionTime()).append("</th>")
                    .append("<th>")
                    .append(((hitRow.isResult()) ? "<span style='color: green'>TRUE" : "<span style='color: red'>FALSE"))
                    .append("</span>").append("</th>")
                    .append("</tr>");
        }
        return rows.toString();
    }

    public static String getJson(HitStorage hitStorage) {
        Set<String> jsonHitList = new HashSet<>();
        hitStorage.getHitList().forEach(hit -> {
            String jsonHit = hit.jsonHit();
            jsonHitList.add(jsonHit);
        });
        return JSONUtil.toJSON(jsonHitList);
    }
}