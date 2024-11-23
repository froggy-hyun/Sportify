package com.tuk.sportify.global.config;

import com.tuk.sportify.global.response.SuccessResponse;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.media.Content;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

import lombok.SneakyThrows;

import org.springdoc.core.customizers.OperationCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Objects;

@Configuration
@OpenAPIDefinition(
        info =
                @Info(
                        title = "Sportify API Docs",
                        description = "국민체육진흥공단 공공데이터 활용 경진대회 Sportify API Docs",
                        version = "v1"))
public class SwaggerConfig {

    private static final String[] statusCode = {"200","201","204","301","302"};

    @Bean
    public OpenAPI openAPI() {
        SecurityScheme securityScheme = getSecurityScheme();
        SecurityRequirement securityRequirement = getSecurityRequireMent();

        return new OpenAPI()
                .components(new Components().addSecuritySchemes("bearerAuth", securityScheme))
                .security(List.of(securityRequirement));
    }

    private SecurityScheme getSecurityScheme() {
        return new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("JWT")
                .in(SecurityScheme.In.HEADER)
                .name("Authorization");
    }

    private SecurityRequirement getSecurityRequireMent() {
        return new SecurityRequirement().addList("bearerAuth");
    }

    @Bean
    public OperationCustomizer operationCustomizer() {
        return (operation, handlerMethod) -> {
            this.addResponseBodyWrapperSchemaExample(operation, SuccessResponse.class,"data");
            return operation;
        };
    }

    private void addResponseBodyWrapperSchemaExample(Operation operation,Class<?> type, String wrapFieldName) {
        for(String code : statusCode){
            ApiResponse apiResponse = operation.getResponses().get(code);
            if( Objects.nonNull(apiResponse)){
                Content content = apiResponse.getContent();
                wrap(content,type,wrapFieldName,code);
            }
        }
    }

    private void wrap(final Content content,Class<?> type, String wrapFieldName,String code){
        if (Objects.nonNull(content)) {
            content.forEach(
                (mediaTypeKey, mediaType) -> {
                    Schema<?> originalSchema = mediaType.getSchema();
                    Schema<?> wrappedSchema = wrapSchema(originalSchema,type,wrapFieldName,code);
                    mediaType.setSchema(wrappedSchema);
                });
        }
    }

    @SneakyThrows
    private <T> Schema<T> wrapSchema(Schema<?> originalSchema, Class<T> type,
        String wrapFieldName,String code) {
        final Schema<T> wrapperSchema = new Schema<>();
        final T instance = type.getDeclaredConstructor().newInstance();
        for (Field field : type.getDeclaredFields()) {
            field.setAccessible(true);
            if(field.getName().equals("httpStatusCode")){
                wrapperSchema.addProperty(field.getName(),
                    new Schema<>().type("integer").example(code));
            }
            if(field.getName().equals("httpStatusMessage")){
                String reasonPhrase = HttpStatus.resolve(Integer.parseInt(code)).getReasonPhrase();
                wrapperSchema.addProperty(field.getName(),
                    new Schema<>().type("string").example(reasonPhrase));
            }
            field.setAccessible(false);
        }
        wrapperSchema.addProperty(wrapFieldName, originalSchema);
        return wrapperSchema;
    }
}
