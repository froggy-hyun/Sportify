package com.tuk.sportify.address.dto;

public record VworldAddressResponse(Response response) {
    public record Response(Result[] result) {}

    public record Result(Structure structure) {}

    public record Structure(String level1, String level2) {}
}
