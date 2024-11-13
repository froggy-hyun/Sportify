package com.tuk.sportify.sportvoucher.repository;

import com.tuk.sportify.sportvoucher.domain.SportVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportVoucherRepository extends JpaRepository<SportVoucher,Long> {}
