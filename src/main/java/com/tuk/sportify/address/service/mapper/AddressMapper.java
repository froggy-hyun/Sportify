package com.tuk.sportify.address.service.mapper;

import com.tuk.sportify.address.domain.Address;
import com.tuk.sportify.address.dto.AddressListResponse;
import com.tuk.sportify.address.dto.AddressRegisterRequest;
import com.tuk.sportify.address.dto.AddressResponse;
import com.tuk.sportify.member.domain.Member;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class AddressMapper {

    public Address toAddress(final AddressRegisterRequest request, final Member member) {
        return Address.builder()
                .member(member)
                .latitude(request.latitude())
                .longitude(request.longitude())
                .addressName(request.addressName())
                .detailAddress(request.address())
                .build();
    }

    public AddressListResponse toAddressListResponse(final List<Address> addresses) {
        List<AddressResponse> addressResponses =
                addresses.stream().map(this::toAddressResponse).toList();
        return new AddressListResponse(addressResponses);
    }

    public AddressResponse toAddressResponse(final Address address) {
        return AddressResponse.builder()
                .addressId(address.getId())
                .addressName(address.getAddressName())
                .address(address.getDetailAddress())
                .build();
    }
}
