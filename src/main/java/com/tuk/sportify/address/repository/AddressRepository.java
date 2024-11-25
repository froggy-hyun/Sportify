package com.tuk.sportify.address.repository;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.member.domain.Member;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address,Long> {

    List<Address> findByMember(Member member);
}
