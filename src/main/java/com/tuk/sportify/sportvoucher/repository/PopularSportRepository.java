package com.tuk.sportify.sportvoucher.repository;

import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import org.locationtech.jts.geom.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PopularSportRepository extends JpaRepository<SportVoucher, Long> {
    @Query(value = """
            SELECT sv
            FROM SportVoucher sv
            WHERE ST_Contains(
                ST_Buffer(
                    :locationPoint,
                    :radius
                ),
                sv.point
            )
            AND sv.disabled = :disabled
            AND (
                sv.course.beginAt BETWEEN :threeMonthsAgo AND :currentDate
                OR sv.course.endAt BETWEEN :threeMonthsAgo AND :currentDate
            )
            ORDER BY sv.course.requestNumberOfPerson DESC
            """)
    List<SportVoucher> findPopularSports(
            @Param("locationPoint") Point locationPoint,
            @Param("radius") int radius,
            @Param("threeMonthsAgo") int threeMonthsAgo,
            @Param("currentDate") int currentDate,
            @Param("disabled") boolean disabled);
}
