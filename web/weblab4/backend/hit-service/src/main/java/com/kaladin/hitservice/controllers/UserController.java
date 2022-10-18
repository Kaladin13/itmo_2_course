package com.kaladin.hitservice.controllers;

import com.kaladin.hitservice.beans.HitProcessor;
import com.kaladin.hitservice.entity.Hit;
import com.kaladin.hitservice.entity.HitRequest;
import com.kaladin.hitservice.repo.HitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
public class UserController {

    private final HitProcessor hitProcessor;
    private final HitsRepository hitsRepository;


    @Autowired
    public UserController(HitProcessor hitProcessor, HitsRepository hitsRepository) {
        this.hitProcessor = hitProcessor;
        this.hitsRepository = hitsRepository;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/hit", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public Hit addHit( HitRequest hitRequest) {
        boolean result = this.hitProcessor.isHit(hitRequest.getX(), hitRequest.getY(), hitRequest.getR());
        Hit hit = new Hit(hitRequest.getLogin(), hitRequest.getSessionId(), hitRequest.getX(), hitRequest.getY(), hitRequest.getR(), result);
        this.hitsRepository.save(hit);
        return hit;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/hits")
    public Collection<Hit> getHits(@RequestParam("login") String login) {
        return this.hitsRepository.findAllByAuthor(login);
    }
}
