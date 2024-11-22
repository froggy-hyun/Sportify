package com.tuk.sportify.crew.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

import com.tuk.sportify.crew.dto.ImageUrlResponse;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Slf4j
@Component
public class ImageService {

    @Value("${spring.cloud.gcp.storage.credentials.location}")
    private String secretPath;

    @Value("${spring.cloud.gcp.storage.bucket}")
    private String bucketName;

    public ImageUrlResponse upload(final MultipartFile multipartFile) throws IOException {
        InputStream path = ResourceUtils.getURL(secretPath).openStream();

        final String uuid = UUID.randomUUID().toString();
        final String extention = multipartFile.getContentType();

        final Storage storage =
                StorageOptions.newBuilder()
                        .setCredentials(GoogleCredentials.fromStream(path))
                        .build()
                        .getService();

        String imgUrl = "https://storage.googleapis.com/" + bucketName + "/" + uuid;

        if (multipartFile.isEmpty()) {
            imgUrl = null;
        } else {
            BlobInfo blobInfo =
                    BlobInfo.newBuilder(bucketName, uuid).setContentType(extention).build();

            Blob blob = storage.create(blobInfo, multipartFile.getInputStream());
        }

        return new ImageUrlResponse(imgUrl);
    }
}
