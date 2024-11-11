package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.sportvoucher.repository.SportVoucherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SportVoucherService {

    private final SportVoucherRepository sportVoucherRepository;

    public void getSportVouchers(final Integer popularVoucherSize, final Integer newVoucherSize){
        
    }
}
