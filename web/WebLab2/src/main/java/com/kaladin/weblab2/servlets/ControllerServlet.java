package com.kaladin.weblab2.servlets;

import com.kaladin.weblab2.dto.HitStorage;
import com.kaladin.weblab2.dto.HttpError;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("error", new HttpError(404, "<h1>Page was not found:(</h1>"));
        getServletContext().getRequestDispatcher("/error").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpError errorMessage = (HttpError) request.getAttribute("error");
        String sessionClear = request.getParameter("session");

        if (sessionClear != null && sessionClear.equals("clear")) {
//            clear session here
            ((HitStorage) request.getSession().getAttribute("hitStorage")).clear();
        }

        if (errorMessage != null) {
            getServletContext().getRequestDispatcher("/error").forward(request, response);
        }

        getServletContext().getRequestDispatcher("/check-hit").forward(request, response);

    }
}
