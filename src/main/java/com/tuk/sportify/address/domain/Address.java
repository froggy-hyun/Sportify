package com.tuk.sportify.address.domain;

import com.tuk.sportify.member.domain.Member;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    private double latitude;

    private double longitude;

    private String detailAddress;

    private String addressName;

    @Builder
    public Address(final Member member, final double latitude, final double longitude,
        final String detailAddress, final String addressName) {
        this.member = member;
        this.latitude = latitude;
        this.longitude = longitude;
        this.detailAddress = detailAddress;
        this.addressName = addressName;
    }
}
