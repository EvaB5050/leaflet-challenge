// Store our API endpoint as queryURL.
let queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

let map = L.map('map').setView([0, -40], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Perform a GET request to the query URL
d3.json(queryURL).then(function(data) {

// Console log the data retrieved 
console.log(data)

  // Function to determine marker radius by earthquake magnitude 
  // and colour by earthquake depth
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // Function to determine the colour of the marker based on earthquake depth
  function getColor(depth) {
    switch (true) {
      case depth > 90:
      return "#1f005c";
      case depth > 70:
      return "#5b1060";
      case depth > 50:
      return "#ac255e";
      case depth > 30:
      return "#ca485c";
      case depth > 10:
      return "#e16b5c";
      default:
      return "#ffb56b";
    }
  }

  // Function to determine the radius of the marker based on earthquake magnitude
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // Function to convert timestamp to a normal time format
  function formatTimestamp(timestamp) {
    let date = new Date(timestamp);
    let dateString = date.toLocaleString();
    return dateString;
  }

  // Once we get a response, change each feature into a circleMarker on the map
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    // Function to set the style for each circleMarker
    style: styleInfo,
    // Create a popup for each marker to display the 
    // earthquake magnitude, depth, location and time
    onEachFeature: function (feature, layer) {
      let timestamp = feature.properties.time;
      let formattedTime = formatTimestamp(timestamp);
      
      layer.bindPopup(
        "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
        + feature.properties.place
        + "<br>Time: "
        + formattedTime
      );
    }
  }).addTo(map);

  // Create the legend control object and add the details
  let legend = L.control({position: "bottomright"});
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    let intervals = [-10, 10, 30, 50, 70, 90];
    let colors = [
      "#ffb56b",
      "#e16b5c",
      "#ca485c",
      "#ac255e",
      "#5b1060",
      "#1f005c"
    ];

    // Loop through the intervals to generate the legend
    for (let i=0; i < intervals.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i>"
       + intervals[i] + (intervals[i + 1] ? "&ndash;" + intervals[i + 1]+ "<br>": "+");
    }
    return div;
  };

  // Add legend to the map
  legend.addTo(map);

});


