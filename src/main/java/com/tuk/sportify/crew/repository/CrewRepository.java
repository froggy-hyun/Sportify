package com.tuk.sportify.crew.repository;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CrewRepository extends JpaRepository<Crew, Long> {

    @Query("select c from Crew c join fetch c.crewGoals where c.id = "
        + ":crewId")
    Optional<Crew> findByIdJoinFetch(Long crewId);

    List<Crew> findBySportVoucher(SportVoucher sportVoucher);

}
