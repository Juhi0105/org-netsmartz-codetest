package com.practice.candidateservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
//@EnableWebMvc
public class CandidateServiceApplication  {
//	   @Override
//	    public void addCorsMappings(CorsRegistry registry) {
//	        registry.addMapping("/**")
//	                .allowedOrigins("http://localhost:3000")
//	                .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH")
//	                .allowedHeaders("*")
//	                .allowCredentials(true);
//	    }
//	
//	

	public static void main(String[] args) {
		SpringApplication.run(CandidateServiceApplication.class, args);
	}


}
