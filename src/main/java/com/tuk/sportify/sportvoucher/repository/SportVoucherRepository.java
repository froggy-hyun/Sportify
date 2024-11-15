package com.tuk.sportify.sportvoucher.repository;

import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import java.util.List;
import org.springframework.data.domain.Limit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SportVoucherRepository extends JpaRepository<SportVoucher, Long> {

    @Query(
            "select sv from SportVoucher sv where sv.facility.city =:city and sv.facility.gu =:gu "
                    + " and sv.course.endAt > :currentDate order by sv.popularity")
    List<SportVoucher> findPopularVoucherByCityAndGu(
            String city, String gu, Integer currentDate, Limit limit);

    @Query(
            "select sv from SportVoucher sv where sv.facility.city =:city and sv.facility.gu =:gu "
                    + " and sv.course.endAt > :currentDate ")
    List<SportVoucher> findNewVoucherByCityAndGu(
            String city, String gu, Integer currentDate, Limit limit);


}
