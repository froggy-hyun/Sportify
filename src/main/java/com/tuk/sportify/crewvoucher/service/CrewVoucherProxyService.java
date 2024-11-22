package com.tuk.sportify.crewvoucher.service;

import com.tuk.sportify.crew.domain.Crew;
import com.tuk.sportify.crew.repository.CrewRepository;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import com.tuk.sportify.sportvoucher.exception.SportVoucherNotFoundException;
import com.tuk.sportify.sportvoucher.repository.SportVoucherRepository;
import com.tuk.sportify.sportvoucher.service.SportVoucherService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CrewVoucherProxyService {

    private final SportVoucherRepository sportVoucherRepository;
    private final CrewRepository crewRepository;

    public SportVoucher getSportVoucherById(final Long sportVoucherId){
        return sportVoucherRepository
            .findById(sportVoucherId)
            .orElseThrow(() -> new SportVoucherNotFoundException(ErrorCode.SPORT_VOUCHER_NOT_FOUND));
    }

    public List<Crew> findCrews(final SportVoucher sportVoucher){
        return crewRepository.findBySportVoucher(sportVoucher);
    }
}
