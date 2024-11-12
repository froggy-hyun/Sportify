package com.tuk.sportify.sportvoucher.service;

import com.tuk.sportify.sportvoucher.repository.SportVoucherRepository;
import java.time.LocalDateTime;
import java.time.Month;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SportVoucherService {

    private final SportVoucherRepository sportVoucherRepository;
}
