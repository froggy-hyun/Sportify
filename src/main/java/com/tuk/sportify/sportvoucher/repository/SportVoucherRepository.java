package com.tuk.sportify.sportvoucher.repository;

import com.tuk.sportify.sportvoucher.domain.SportVoucher;

import org.locationtech.jts.geom.Point;
import org.springframework.data.domain.Limit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportVoucherRepository extends JpaRepository<SportVoucher, Long> {

    @Query(
            "select sv from SportVoucher sv join fetch sv.majorCategory join fetch sv.middleCategory where st_contains(st_buffer(:address, :radius)"
                    + ", sv.point) and sv.course.endAt > :currentDate and sv.disabled = :disabled "
                + "order by sv.course.requestNumberOfPerson desc")
    List<SportVoucher> findPopularVoucherByAddress(
            Point address, Integer radius, Integer currentDate,boolean disabled, Limit limit);

    @Query(
            "select sv from SportVoucher sv join fetch sv.majorCategory mjc join fetch sv"
                    + ".middleCategory mic where st_contains(st_buffer(:address, :radius) , sv.point) "
                    + " and mjc.code = :majorCategoryCode and mic.code =:middleCategoryCode and sv"
                    + ".course.endAt > :currentDate and sv.disabled = :disabled")
    List<SportVoucher> findByCategoryAndAddressJoinFetch(
            Point address,
            Integer radius,
            int majorCategoryCode,
            int middleCategoryCode,
            boolean disabled,
            Integer currentDate);
}
