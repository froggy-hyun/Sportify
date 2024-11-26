package com.tuk.sportify.facade.service;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.address.repository.AddressRepository;
import com.tuk.sportify.global.utils.GeometryConverter;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.dto.CreateMemberRequest;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberAddressFacadeService {

    private final AddressRepository addressRepository;

    @Transactional
    public Address createAddress(final Member member, final CreateMemberRequest request) {
        Address address =
                Address.builder()
                        .member(member)
                        .addressName(request.addressName())
                        .detailAddress(request.address())
                        .point(
                                GeometryConverter.coordinateToPoint(
                                        request.latitude(), request.longitude()))
                        .build();
        return addressRepository.save(address);
    }
}
