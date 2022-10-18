//package com.kaladin.apigateway;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.gateway.filter.factory.TokenRelayGatewayFilterFactory;
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class ProxyConfig {
//
//    @Autowired
//    private TokenRelayGatewayFilterFactory filterFactory;
//
//    @Bean
//    RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
//        return builder.routes()
//                .route("test_service",
//                        route -> route.path("/test-service/**")
//                                .filters(path -> path.stripPrefix(1))
//                                .uri("lb://test-service"))
//                .route("auth_service",
//                        route -> route.path("/auth-service/**")
//                                .filters(path -> path.stripPrefix(1))
//                                .uri("lb://auth-service"))
//                .build();
//    }
//}
