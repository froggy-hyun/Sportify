package com.tuk.sportify.popularsport.controller;

import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.popularsport.dto.PopularSportRequest;
import com.tuk.sportify.popularsport.dto.PopularSportResponse;
import com.tuk.sportify.popularsport.service.PopularSportService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/popular-sports")
@RequiredArgsConstructor
public class PopularSportController {

    private final PopularSportService popularSportService;

    @PostMapping
    public List<PopularSportResponse> getPopularSports(
            @AuthenticationPrincipal Member member,
            @RequestBody PopularSportRequest request
            ) {
        return popularSportService.findPopularSports(member, request);
    }
}
