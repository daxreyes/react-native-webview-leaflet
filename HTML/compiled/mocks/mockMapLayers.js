"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var secrets_1 = require("../secrets");
var models_1 = require("../models");
var mapLayers = [
    {
        name: 'OpenStreetMap',
        isChecked: true,
        type: models_1.MapLayerTypes.TILE_LAYER,
        isBaseLayer: true,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
    },
    {
        name: 'streets',
        type: models_1.MapLayerTypes.TILE_LAYER,
        isBaseLayer: true,
        //url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        url: "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=" + secrets_1.mapboxToken,
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
    },
    {
        name: 'light',
        type: models_1.MapLayerTypes.TILE_LAYER,
        isBaseLayer: true,
        //url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        url: "https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=" + secrets_1.mapboxToken,
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
    },
    {
        name: 'dark',
        type: models_1.MapLayerTypes.TILE_LAYER,
        isBaseLayer: true,
        url: "https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=" + secrets_1.mapboxToken,
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
    },
    /* {
       name: 'image',
       type: 'ImageOverlay',
       isBaseLayer: true,
       url: 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
       bounds: [[40.712216, -74.22655], [40.773941, -74.12544]]
     }, */
    {
        name: 'WMS Tile Layer',
        type: models_1.MapLayerTypes.TILE_LAYER,
        url: 'https://demo.boundlessgeo.com/geoserver/ows',
        layers: 'nasa:bluemarble'
    }
    /* {
      type: 'VideoOverlay',
      name: 'video',
      isBaseLayer: true,
      url: 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
      bounds: [[32, -130], [13, -100]]
    } */
];
exports.default = mapLayers;
//# sourceMappingURL=mockMapLayers.js.map