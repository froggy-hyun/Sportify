package com.tuk.sportify.popularsport.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.locationtech.jts.geom.Point;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "popular_sports")
public class PopularSport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String facilityAddress;

    @Column(nullable = false)
    private String facilityDetailAddress;

    @Column(nullable = false)
    private String itemName; // 종목명 (ITEM_NM)

    @Column(nullable = false)
    private int requestNumberOfPerson; // 신청 인원수 (COURSE_REQST_NMPR_CO)

    @Column(nullable = false)
    private boolean disabled; // 장애 여부

    @Column(nullable = false)
    private Point location; // 위치 정보 (위도/경도)

    @Column(nullable = false)
    private String courseBeginDate;

    @Column(nullable = false)
    private String courseEndDate;
}
