package com.kaladin.weblab2.servlets;

import com.kaladin.weblab2.dto.HttpError;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ErrorHandleServlet", value = "/error")
public class ErrorHandleServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpError httpError = (HttpError) request.getAttribute("error");
        response.setStatus(httpError.getStatusCode());
        response.getWriter().println(httpError.getErrorMessage());
    }
}
