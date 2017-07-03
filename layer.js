require([
  "esri/Map",
  "esri/views/MapView",
  //*** ADD ***//
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, MapView, FeatureLayer) {

  var map = new Map({
    basemap: "topo-vector"
  });

  //*** ADD ***//
  var featureLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer"
  });

  map.add(featureLayer);

  var view = new MapView({
    container: "viewDiv",
    map: map
  });
});