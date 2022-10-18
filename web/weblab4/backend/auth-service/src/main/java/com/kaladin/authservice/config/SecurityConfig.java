package com.kaladin.authservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .antMatcher("/**").authorizeRequests()
                .antMatchers("/user").permitAll()
                .anyRequest().authenticated()
                .and()
                .oauth2Login().defaultSuccessUrl("http://localhost:3000?g=true");

        return http.build();
    }
}
