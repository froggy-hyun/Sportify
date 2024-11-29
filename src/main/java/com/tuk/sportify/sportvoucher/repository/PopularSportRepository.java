package com.tuk.sportify.sportvoucher.repository;

import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PopularSportRepository extends JpaRepository<SportVoucher, Long> {
    @Query(value = """
            SELECT sv FROM SportVoucher sv
            WHERE function('ST_Distance_Sphere', sv.point, function('ST_GeomFromText', :location, 4326)) <= :radius
            AND sv.disabled = :disabled
            AND sv.course.endAt >= :currentDate
            ORDER BY sv.course.requestNumberOfPerson DESC
            """)
    List<SportVoucher> findPopularSports(
            @Param("location") String locationWKT,
            @Param("radius") int radius,
            @Param("currentDate") int currentDate,
            @Param("disabled") boolean disabled);
}
