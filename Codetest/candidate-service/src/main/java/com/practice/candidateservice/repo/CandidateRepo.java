package com.practice.candidateservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practice.candidateservice.model.Candidate;

public interface CandidateRepo extends JpaRepository<Candidate, Integer>{

}
