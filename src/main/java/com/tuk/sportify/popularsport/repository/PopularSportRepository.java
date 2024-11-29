package com.tuk.sportify.popularsport.repository;

import org.locationtech.jts.geom.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.tuk.sportify.popularsport.domain.PopularSport;

import java.util.List;

@Repository
public interface PopularSportRepository extends JpaRepository<PopularSport, Long> {

    @Query(
            "select ps from PopularSport ps where st_contains(st_buffer(:location, :radius), ps.location) "
                    + "and ps.disabled = :disabled and ps.courseEndDate > :currentDate "
                    + "order by ps.requestNumberOfPerson desc"
    )
    List<PopularSport> findPopularSports(Point location, double radius, String currentDate, boolean disabled);
}