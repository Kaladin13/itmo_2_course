package com.kaladin.weblab2.filters;

import com.kaladin.weblab2.dto.Coordinates;
import com.kaladin.weblab2.dto.HttpError;
import com.kaladin.weblab2.utils.CoordinatesValidation;
import com.kaladin.weblab2.utils.OutOfBoundCoordinates;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "ValidationFilter", urlPatterns = "*")
public class ValidationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        request.setAttribute("startTime", System.nanoTime());
        HttpServletRequest httpRequest = (HttpServletRequest) request;

        if (httpRequest.getMethod().equals("POST")) {
            request.setAttribute("startTime", System.nanoTime());
            try {
                double x = Double.parseDouble(request.getParameter("x"));
                double y = Double.parseDouble(request.getParameter("y"));
                double r = Double.parseDouble(request.getParameter("r"));

                Coordinates coordinates = new Coordinates(x, y, r);
                CoordinatesValidation.validate(coordinates);
                request.setAttribute("coordinates", coordinates);
            } catch (NullPointerException | NumberFormatException | OutOfBoundCoordinates e) {
                request.setAttribute("error", new HttpError(400, e.getMessage()));
            }
        }

        chain.doFilter(request, response);
    }
}
