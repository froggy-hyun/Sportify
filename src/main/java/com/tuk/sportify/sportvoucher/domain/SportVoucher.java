package com.tuk.sportify.sportvoucher.domain;

import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.sportvoucher.exception.SportVoucherClosedException;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(
        name = "sport_voucher",
        indexes = @Index(name = "idx_city_gu",
            columnList = "city_name, gu_name, course_begin_at"))
public class SportVoucher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "bussine_number")
    private String businessNumber;

    @Embedded private Facility facility;
    @Embedded private Course course;
    @Embedded private Item item;
    private Long popularity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private MiddleCategory middleCategory;

    public void validateOpening(final Integer currentDate){
        Integer endAt = course.getEndAt();
        if(currentDate > endAt){
            throw new SportVoucherClosedException(ErrorCode.SPORT_VOUCHER_CLOSED);
        }
    }
    public String getSubCategory(){
        return item.getSubCategory();
    }
}
