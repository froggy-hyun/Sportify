package com.tuk.sportify.crew.controller;

import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.dto.CreateCrewResponse;
import com.tuk.sportify.crew.dto.CrewDetailResponse;
import com.tuk.sportify.crew.dto.ImageUploadResponse;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.crew.service.ImageService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.global.response.ApiErrorCodeExample;
import com.tuk.sportify.global.response.ApiErrorCodeExamples;
import com.tuk.sportify.global.status_code.ErrorCode;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;

import java.util.List;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/crews")
@Tag(name = "크루 [운동이웃 생성,운동이웃 참여 ,대표 이미지 업로드, 단건 상세 조회]")
public class CrewController {

    private final CrewService crewService;
    private final ImageService imageService;

    @Operation(summary = "크루 생성", description = "크루를 생성합니다.")
    @PostMapping("/sport-vouchers/{sportVoucherId}")
    @ApiErrorCodeExamples({ErrorCode.CREW_NOT_FOUND,ErrorCode.SPORT_VOUCHER_NOT_FOUND,ErrorCode.MEMBER_NOT_FOUND})
    @ResponseStatus(HttpStatus.CREATED)
    public CreateCrewResponse createCrew(
            @AuthenticationMember @Parameter(hidden = true) final Long memberId,
            @RequestBody @Valid final CreateCrewRequest createCrewRequest,
            @PathVariable @Parameter(description = "스포츠 이용권 ID") final Long sportVoucherId) {
        return crewService.createCrew(memberId, sportVoucherId, createCrewRequest);
    }

    @Operation(summary = "크루 대표 이미지 설정", description = "Google Cloud Storage에 이미지를 업로드합니다.")
    @PostMapping("/images")
    @ResponseStatus(HttpStatus.CREATED)
    public ImageUploadResponse saveThumbnail(@RequestParam @Parameter(description = "Image 파일") MultipartFile image) {
        return imageService.upload(image);
    }

    @Operation(summary = "크루 단건 상세 조회", description = "크루의 목표,규칙을 포함한 모든 상세 정보를 반환합니다.")
    @ApiErrorCodeExample(ErrorCode.CREW_NOT_FOUND)
    @GetMapping("/{crewId}")
    public CrewDetailResponse getCrewDetail(@PathVariable @Parameter(description = "크루 ID") final Long crewId) {
        return crewService.getCrewDetail(crewId);
    }

    @PostMapping("/{crewId}")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "크루 참여", description = "크루에 참여합니다.")
    public void participateCrew(@AuthenticationMember @Parameter(hidden = true) final Long memberId,
        @PathVariable @Parameter(description = "크루 ID") final Long crewId){
        crewService.participate(memberId,crewId);
    }
}
