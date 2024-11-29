package com.tuk.sportify.sportvoucher.controller;

import com.tuk.sportify.global.argumentresolver.AuthenticationMember;
import com.tuk.sportify.global.response.ApiErrorCodeExamples;
import com.tuk.sportify.global.status_code.ErrorCode;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.sportvoucher.dto.*;
import com.tuk.sportify.sportvoucher.service.PopularSportService;
import com.tuk.sportify.sportvoucher.service.SportVoucherService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sport-voucher")
@Tag(name = "스포츠 이용권")
public class SportVoucherController {

    private final SportVoucherService sportVoucherService;

    // 인기 이용권 조회
    @GetMapping("/popularity")
    @Operation(
            summary = "인기 이용권 조회",
            description = "설정된 주소를 기반으로 인기 이용권을 조회합니다. 인기 이용권의 기준은 신청 " + "인원수 이고 내림차순 정렬하여 반환합니다.")
    public PopularVoucherResponse findPopularVoucher(
            @AuthenticationMember @Parameter(hidden = true) Long memberId,
            @RequestParam @Parameter(description = "한 번에 가져올 크기") Integer fetchSize) {
        return sportVoucherService.findPopularVoucher(memberId, fetchSize);
    }

    // 이용권들 검색
    @GetMapping("/search")
    @Operation(
            summary = "중분류에 따른 이용권 검색",
            description =
                    "VoucherGroups 목록 -> 격투 및 무술: [태권도, 합기도, 복싱, 유도, 검도, 주짓수, 펜싱],"
                            + "피트니스 및 체조: [헬스, 필라테스, 요가, 에어로빅, 크로스핏],"
                            + "구기 및 라켓: [축구(풋살), 농구, 배구, 야구, 탁구, 테니스, 배드민턴, 스쿼시],"
                            + "레저 및 개인: [골프, 클라이밍(암벽등반), 롤러인라인, 줄넘기, 볼링, 당구, 승마,수영,빙상(스케이트)],"
                            + "예술 및 체육: [댄스(줌바 등), 무용(발레 등)],"
                            + "기타: [기타종목, 종합체육시설]"
                            + "아직 좌표에 따른 위치연산이 완료되지 않아서 서울시 강남구를 기준으로 반환합니다.")
    public VoucherSearchResponse searchVoucher(
            @RequestParam @Parameter(description = "대분류 ex:격투 및 무술, 피트니스 및 체조")
                    final int majorCategoryCode,
            @RequestParam @Parameter(description = "중분류 ex:태권도, 합기도")
                    final int middleCategoryCode,
            @AuthenticationMember @Parameter(hidden = true) final Long memberId) {
        return sportVoucherService.searchVoucherByCategoryAndAddress(majorCategoryCode,middleCategoryCode, memberId);
    }

    // 이용권 단건 상세 조회
    @GetMapping("/{sportVoucherId}")
    @Operation(
            summary = "스포츠 이용권 단건 상세 조회",
            description = "스포츠 이용권 단건 조회와 해당 이용권에 생성된 모든 크루들을 반환합니다.")
    @ApiErrorCodeExamples({ErrorCode.SPORT_VOUCHER_NOT_FOUND, ErrorCode.SPORT_VOUCHER_CLOSED})
    public VoucherDetailResponse getSportVoucher(@PathVariable final Long sportVoucherId) {
        return sportVoucherService.getSportVoucher(sportVoucherId);
    }


    private final PopularSportService popularSportService;

    // 내 근처 최근 3개월 인기 스포츠 종목 반환
    @PostMapping("/popular-sports")
    @Operation(
            summary = "내 근처 인기 스포츠 조회",
            description = "로그인한 사용자의 위치를 기준으로 인기 있는 스포츠를 조회합니다."
    )
    @ApiErrorCodeExamples({
            ErrorCode.MEMBER_NOT_FOUND, // 회원이 존재하지 않는 경우
            ErrorCode.ADDRESS_NOT_FOUND, // 주소가 설정되지 않은 경우
            ErrorCode.SPORT_VOUCHER_NOT_FOUND // 스포츠 이용권이 없는 경우
    })
    public List<PopularSportResponse> getPopularSports(
            @AuthenticationPrincipal Member member,
            @RequestBody PopularSportRequest request) {
        return popularSportService.findPopularSports(member.getId(), request);
    }
}
