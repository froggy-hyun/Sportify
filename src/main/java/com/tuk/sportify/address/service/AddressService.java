package com.tuk.sportify.address.service;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.address.dto.AddressListResponse;
import com.tuk.sportify.address.dto.AddressRegisterRequest;
import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.address.dto.ChangedAddressResponse;
import com.tuk.sportify.address.exception.AddressNotFoundException;
import com.tuk.sportify.address.repository.AddressRepository;
import com.tuk.sportify.address.service.mapper.AddressMapper;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.member.service.MemberService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AddressService {

    private final AddressRepository addressRepository;
    private final MemberService memberService;
    private final AddressMapper addressMapper;

    @Transactional
    public AddressResponse register(final AddressRegisterRequest request,final Long memberId){
        final Member member = memberService.getMemberById(memberId);
        final Address address = addressMapper.toAddress(request, member);
        member.changeAddress(address);
        addressRepository.save(address);
        return new AddressResponse(
                address.getId(), address.getDetailAddress(), address.getAddressName());
    }

    public AddressListResponse findAddresses(final Long memberId){
        final Member member = memberService.getMemberById(memberId);
        List<Address> addresses = addressRepository.findByMember(member);
        return addressMapper.toAddressListResponse(addresses);
    }

    @Transactional
    public ChangedAddressResponse changeMemberAddress(final Long memberId,final Long addressId){
        Member member = memberService.getMemberById(memberId);
        Address address = addressRepository.findById(addressId)
            .orElseThrow(() -> new AddressNotFoundException(
                ErrorCode.ADDRESS_NOT_FOUND));
        member.changeAddress(address);
        return new ChangedAddressResponse(address.getId(),address.getDetailAddress());
    }
}
