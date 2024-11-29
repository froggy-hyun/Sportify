package com.tuk.sportify.crew.service;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.tuk.sportify.crew.domain.CrewImage;
import com.tuk.sportify.crew.exception.ImageNotFoundException;
import com.tuk.sportify.crew.dto.ImageUploadResponse;
import com.tuk.sportify.crew.exception.ImageUploadException;
import com.tuk.sportify.crew.repository.CrewImageRepository;
import com.tuk.sportify.global.status_code.ErrorCode;

import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class ImageService {
    @Value("${spring.cloud.gcp.storage.bucket}")
    private String bucketName;

    private final Storage storage;
    private static final String IMAGE_URI = "https://storage.googleapis.com/%s/%s";
    private final CrewImageRepository crewImageRepository;

    public ImageUploadResponse upload(final MultipartFile image){
        final String uuid = UUID.randomUUID().toString();
        final String extension = image.getContentType();
        BlobInfo blobInfo = getBlobInfo(uuid, extension);
        try{
            storage.create(blobInfo, image.getBytes());
        }catch (IOException e){
            throw new ImageUploadException(ErrorCode.CANNOT_UPLOAD_IMAGE);
        }
        String imgUrl = IMAGE_URI.formatted(bucketName, uuid);
        final CrewImage crewImage = new CrewImage(uuid, imgUrl);
        crewImageRepository.save(crewImage);
        return new ImageUploadResponse(crewImage.getId(), imgUrl, uuid);
    }

    private BlobInfo getBlobInfo(final String uuid, final String extension) {
        BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, uuid)
            .setContentType(extension)
            .build();
        log.info("blobInfo: {}", blobInfo);
        return blobInfo;
    }

    public CrewImage findImage(final Long crewImageId){
        if(Objects.isNull(crewImageId)){
            return null;
        }
        return crewImageRepository.findById(crewImageId)
            .orElseThrow(()-> new ImageNotFoundException(ErrorCode.CREW_IMAGE_NOT_FOUND));
    }

    public void saveImages(List<MultipartFile> files){
        files.forEach(this::upload);
    }
}
