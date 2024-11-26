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
            "select sv from SportVoucher sv where st_contains(st_buffer(:memberLocation, :radius)"
                + ", sv.point) order by sv.course.requestNumberOfPerson")
    List<SportVoucher> findPopularVoucherByMemberLocation(
            Point memberLocation, Integer radius,Integer currentDate, Limit limit);

    @Query(
            "select sv from SportVoucher sv join fetch sv.middleCategory where sv.facility.city =:city and sv.facility.gu =:gu "
                    + " and sv.middleCategory.id = :middleCategoryId and sv.course.endAt > :currentDate")
    List<SportVoucher> findByMiddleCategoryJoinFetch(
            String city, String gu, Long middleCategoryId, Integer currentDate);
}
