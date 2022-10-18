package com.kaladin.authservice.controllers;

import com.kaladin.authservice.use_cases.AuthResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/auth")
    @CrossOrigin(origins = "http://localhost:3000")
    public AuthResponse auth(Authentication authentication) {
        DefaultOidcUser us = (DefaultOidcUser) authentication.getPrincipal();
        return new AuthResponse((long) us.getIdToken().toString().hashCode(), us.getFullName());
    }

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    public AuthResponse index(Authentication authentication) {
        DefaultOidcUser us = (DefaultOidcUser) authentication.getPrincipal();
        return new AuthResponse((long) us.getIdToken().toString().hashCode(), us.getFullName());
    }

}
