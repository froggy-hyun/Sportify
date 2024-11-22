package com.tuk.sportify.crew.controller;

import com.tuk.sportify.crew.domain.GenderRule;
import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.global.response.IdResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/crews")
public class CrewController {

    private final CrewService crewService;

    // 크루 생성
    @PostMapping("/sport-vouchers/{sportVoucherId}")
    @ResponseStatus(HttpStatus.CREATED)
    public IdResponse createCrew(
        @AuthenticationMember final Long memberId,
        @RequestBody final CreateCrewRequest createCrewRequest,
        @PathVariable final Long sportVoucherId){
        return crewService.createCrew(memberId,sportVoucherId,createCrewRequest);
    }

    // 크루 단건(크루 멤버 포함) 조회
    @GetMapping("/{crewId}")
    public void getCrewWithMember(@PathVariable final Long crewId){
        crewService.getCrewWithMembers(crewId);
    }
}
