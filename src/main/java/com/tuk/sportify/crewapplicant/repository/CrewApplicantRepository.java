package com.tuk.sportify.crewapplicant.repository;

import com.tuk.sportify.crewapplicant.domain.CrewApplicant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrewApplicantRepository extends JpaRepository<CrewApplicant,Long> {}
