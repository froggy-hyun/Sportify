package com.tuk.sportify.crew.controller;

import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.dto.CreateCrewResponse;
import com.tuk.sportify.crew.dto.CrewDetailResponse;
import com.tuk.sportify.crew.dto.ImageUrlResponse;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.crew.service.ImageService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;

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
@RequestMapping("/crews")
// @Tag(name = "Crew", description = "Crew 관련 요청")
public class CrewController {

    private final CrewService crewService;
    private final ImageService imageService;

    // 크루 생성
        @Operation(summary = "크루 생성", description = "크루를 생성합니다.")
        @ApiResponse(
                responseCode = "201",
                description = "CREATED",
                useReturnTypeSchema = true,
                content = @Content(schema = @Schema(implementation = CreateCrewResponse.class)))
    @PostMapping("/sport-vouchers/{sportVoucherId}")
    @ResponseStatus(HttpStatus.CREATED)
    public CreateCrewResponse createCrew(
            @AuthenticationMember final Long memberId,
            @RequestBody @Valid final CreateCrewRequest createCrewRequest,
            @PathVariable final Long sportVoucherId) {
        return crewService.createCrew(memberId, sportVoucherId, createCrewRequest);
    }

    // 이미지 등록
    @PostMapping("/images")
    public ImageUrlResponse saveThumbnail(@RequestParam MultipartFile image) throws IOException {
        return imageService.upload(image);
    }

    // 크루 상세 조회
    @GetMapping("/{crewId}")
    public CrewDetailResponse getCrewDetail(@PathVariable final Long crewId) {
        return crewService.getCrewDetail(crewId);
    }
}
