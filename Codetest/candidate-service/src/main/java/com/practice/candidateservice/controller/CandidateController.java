package com.practice.candidateservice.controller;

import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.practice.candidateservice.model.Candidate;
import com.practice.candidateservice.repo.CandidateRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping("/home")
public class CandidateController {
	
	
	
	@Autowired
	CandidateRepo repo;
	
	@RequestMapping(value="/candidate",method=RequestMethod.POST)
	public ResponseEntity<String> addCandidate(@RequestBody Candidate candidate) {
		
		repo.save(candidate);
//		HttpHeaders headers = new HttpHeaders();
//        headers.add("Access-Control-Allow-Origin", "*");
		
		return new ResponseEntity<String>(candidate.getName() + " added successfully",HttpStatus.CREATED);
		
	}
	
	
	@RequestMapping(value="/candidate/test",method = RequestMethod.GET )
	public String test() {
		return "test";
	}

}
