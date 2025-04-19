// FutureDisastersMap.js
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import "./FutureDisastersMap.css";
const FutureDisastersMap = ({ disasters }) => {
    useEffect(() => {
      // Initialize the map
      const map = L.map("disaster-map").setView([20, 0], 2); // World view
  
      // Add a tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
  
      // Create a marker cluster group
      const markerCluster = L.markerClusterGroup();
  
      // Loop through disasters and add markers
      disasters.forEach((event) => {
        const geometry = event.geometry[0];
        if (geometry && geometry.coordinates) {
          const [lon, lat] = geometry.coordinates;
  
          const marker = L.marker([lat, lon])
            .bindPopup(`
              <strong>${event.title}</strong><br/>
              Category: ${event.categories.map((c) => c.title).join(", ")}<br/>
              Date: ${new Date(geometry.date).toLocaleDateString()}
            `);
  
          markerCluster.addLayer(marker);
        }
      });
  
      // Add cluster group to the map
      map.addLayer(markerCluster);
  
      // Clean up on unmount
      return () => {
        map.remove();
      };
    }, [disasters]);
  
    return <div id="disaster-map" style={{ height: "600px", width: "100%" }} />;
  };
  
  export default FutureDisastersMap;
  