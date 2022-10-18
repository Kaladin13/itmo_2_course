package com.kaladin.hitservice.entity;

import java.io.Serializable;

public class HitRequest implements Serializable {
    private Long sessionId;
    private String login;
    private Long x;
    private Long y;
    private Long r;


    public HitRequest() {
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

    public Long getX() {
        return x;
    }

    public void setX(Long x) {
        this.x = x;
    }

    public Long getY() {
        return y;
    }

    public void setY(Long y) {
        this.y = y;
    }

    public Long getR() {
        return r;
    }

    public void setR(Long r) {
        this.r = r;
    }

    public HitRequest(Long sessionId, String login, Long x, Long y, Long r) {
        this.sessionId = sessionId;
        this.login = login;
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
