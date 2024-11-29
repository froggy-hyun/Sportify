package com.tuk.sportify.popularsport.service;

import com.tuk.sportify.global.utils.GeometryConverter;
import com.tuk.sportify.member.domain.Member;
import com.tuk.sportify.popularsport.domain.PopularSport;
import com.tuk.sportify.popularsport.dto.PopularSportRequest;
import com.tuk.sportify.popularsport.dto.PopularSportResponse;
import com.tuk.sportify.popularsport.repository.PopularSportRepository;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.Point;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PopularSportService {

    private final PopularSportRepository popularSportRepository;

    public List<PopularSportResponse> findPopularSports(Member member, PopularSportRequest request) {
        Point location = GeometryConverter.coordinateToPoint(request.getLatitude(), request.getLongitude());
        String currentDate = LocalDate.now().toString().replace("-", ""); // YYYYMMDD

        boolean isDisabled = member.isDisabled(); // 로그인한 사용자의 장애 여부
        List<PopularSport> popularSports = popularSportRepository.findPopularSports(location, request.getRadius(), currentDate, isDisabled);

        return popularSports.stream()
                .map(ps -> new PopularSportResponse(
                        ps.getItemName(),
                        ps.getRequestNumberOfPerson(),
                        ps.getLocation().getY(), // 위도
                        ps.getLocation().getX(), // 경도
                        ps.isDisabled()
                ))
                .collect(Collectors.toList());
    }
}
