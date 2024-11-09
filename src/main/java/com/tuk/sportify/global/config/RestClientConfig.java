package com.tuk.sportify.global.config;

import com.tuk.sportify.address.dto.DefaultRequestParams;
import com.tuk.sportify.address.infrastructure.VworldRestClient;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class RestClientConfig {
    @Value("${api-key}")
    private String apiKey;

    @Bean
    public VworldRestClient vworldRestClient() {
        final RestClient restClient = RestClient.create();
        final RestClientAdapter restClientAdapter = RestClientAdapter.create(restClient);
        final HttpServiceProxyFactory factory =
                HttpServiceProxyFactory.builderFor(restClientAdapter).build();
        return factory.createClient(VworldRestClient.class);
    }

    @Bean
    public DefaultRequestParams defaultRequestParams() {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("service", "address");
        params.add("request", "getAddress");
        params.add("type", "both");
        params.add("key", apiKey);
        return new DefaultRequestParams(params);
    }
}
