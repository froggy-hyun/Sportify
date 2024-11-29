package com.tuk.sportify.member.domain;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.global.DefaultAddress;
import jakarta.persistence.*;
import java.util.Objects;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "member")
@Getter
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "member_id", nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email; // 이메일

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Address address;

    //장애인 비장애인 여부
    @Column(nullable = false)
    private boolean disabled;

    @CreationTimestamp
    private Timestamp createdDate;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    public void changeAddress(Address address){
        this.address = address;
    }

    public Address getAddress(){
        if(Objects.isNull(address)){
            return DefaultAddress.getInstance();
        }
        return address;
    }
}