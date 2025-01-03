package com.tuk.sportify.global.utils;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.PrecisionModel;
import org.springframework.stereotype.Component;

public class GeometryConverter {

    private static final int SRID_VALUE = 4326;

    public static Point coordinateToPoint(final double latitude,final double longitude){
        final GeometryFactory geometryFactory = new GeometryFactory();
        final Coordinate coordinate = new Coordinate(longitude,latitude);
        Point point = geometryFactory.createPoint(coordinate);
        point.setSRID(SRID_VALUE);
        return point;
    }
}
