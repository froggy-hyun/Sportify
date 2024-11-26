package com.tuk.sportify.geometry;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.springframework.stereotype.Component;

@Component
public class GeometryConverter {

    public Point coordinateToPoint(final double latitude,final double longitude){
        final GeometryFactory geometryFactory = new GeometryFactory();
        final Coordinate coordinate = new Coordinate(latitude,longitude);
        return geometryFactory.createPoint(coordinate);
    }
}
