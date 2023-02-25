package com.ogtc.ogtcbackend.confi;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
public class AppConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        config.setExposedHeaders(Arrays.asList("Authorization"));
        config.setAllowCredentials(true);
        source.registerCorsConfiguration("/**", config);
        // exclude specific URL from being filtered
        /*String excludedUrl = "/api/lkp/symbols";
        CorsConfiguration excludedConfig = new CorsConfiguration();
        excludedConfig.setAllowedOrigins(Arrays.asList("*"));
        excludedConfig.setAllowedMethods(Arrays.asList("GET"));
        excludedConfig.setAllowCredentials(true);
        source.registerCorsConfiguration(excludedUrl, excludedConfig);*/

        return new CorsFilter(source);
    }

}
