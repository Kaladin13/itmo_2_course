package com.kaladin.authservice.use_cases;

import java.io.Serializable;

public class AuthResponse implements Serializable {
    private Long sessionId;
    private String login;

    public AuthResponse() {
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public AuthResponse(Long sessionId, String login) {
        this.sessionId = sessionId;
        this.login = login;
    }
}
