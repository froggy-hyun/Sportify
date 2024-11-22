package com.tuk.sportify.crew.controller;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

import com.tuk.sportify.crew.dto.CreateCrewRequest;
import com.tuk.sportify.crew.dto.CrewDetailResponse;
import com.tuk.sportify.crew.dto.ImageUrlResponse;
import com.tuk.sportify.crew.service.CrewService;
import com.tuk.sportify.crew.service.ImageService;
import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.global.response.IdResponse;

import jakarta.validation.Valid;
import java.awt.Image;
import java.io.IOException;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/crews")
public class CrewController {

    private final CrewService crewService;
    private final ImageService imageService;

    // 크루 생성
    @PostMapping("/sport-vouchers/{sportVoucherId}")
    @ResponseStatus(HttpStatus.CREATED)
    public IdResponse createCrew(
            @AuthenticationMember final Long memberId,
            @RequestBody @Valid final CreateCrewRequest createCrewRequest,
            @PathVariable final Long sportVoucherId) {
        return crewService.createCrew(memberId, sportVoucherId, createCrewRequest);
    }

    @PostMapping( "/images")
    public ImageUrlResponse saveThumbnail(@RequestParam MultipartFile image) throws IOException {
        return imageService.upload(image);
    }

    @GetMapping("/{crewId}")
    public CrewDetailResponse getCrewDetail(@PathVariable final Long crewId){
        return crewService.getCrewDetail(crewId);
    }
}
