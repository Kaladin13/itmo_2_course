package com.kaladin.hitservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Hit implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private String author;
    private Long sessionId;

    @Override
    public String toString() {
        return "Hit{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", sessionId=" + sessionId +
                ", x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
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

    public Boolean getResult() {
        return result;
    }

    public void setResult(Boolean result) {
        this.result = result;
    }

    public Hit(String author, Long sessionId, Long x, Long y, Long r, Boolean result) {
        this.author = author;
        this.sessionId = sessionId;
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    public Hit() {
    }

    private Long x;
    private Long y;
    private Long r;
    private Boolean result;

}
