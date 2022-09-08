package com.kaladin.weblab2.servlets;

import com.kaladin.weblab2.dto.Coordinates;
import com.kaladin.weblab2.dto.HitRow;
import com.kaladin.weblab2.dto.HitStorage;
import com.kaladin.weblab2.dto.HttpError;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@WebServlet(name = "AreaCheckServlet", value = "/check-hit")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("error", new HttpError(404, "<h1>Page was not found:(</h1>"));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Coordinates coordinates = (Coordinates) request.getAttribute("coordinates");

        boolean hitResult = isHit(coordinates);

        HitRow hitRow = new HitRow();

        hitRow.setY(coordinates.getY());
        hitRow.setX(coordinates.getX());
        hitRow.setR(coordinates.getR());
        hitRow.setCurrentTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        hitRow.setExecutionTime((double) (System.nanoTime() - (Long) request.getAttribute("startTime")) / 1000000);
        hitRow.setResult(hitResult);

        ((HitStorage) request.getSession().getAttribute("hitStorage")).add(hitRow);

        response.setHeader("Cache-Control", "no-cache");
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().println(hitRow.jsonHit());
    }

    private boolean isHit(Coordinates coordinates) {
        return true;
    }
}
