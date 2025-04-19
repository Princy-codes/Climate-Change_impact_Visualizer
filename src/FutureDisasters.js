import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./FutureDisasters.css";

// ✅ Custom category icons
const categoryIcons = {
  Earthquake: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2930/2930137.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  }),
  Flood: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2930/2930149.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  }),
  Default: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2930/2930185.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  }),
};

const FutureDisasters = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Fetch disaster data from ReliefWeb API
  useEffect(() => {
    fetch(
      "https://api.reliefweb.int/v1/disasters?appname=climate-dashboard&profile=full&sort[]=date:desc&limit=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setDisasters(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch disaster data", err);
        setLoading(false);
      });
  }, []);

  //  Choose icon based on disaster type
  const getIcon = (type) => {
    if (type.includes("Earthquake")) return categoryIcons.Earthquake;
    if (type.includes("Flood")) return categoryIcons.Flood;
    return categoryIcons.Default;
  };

  //  Filter by selected category
  const filteredDisasters =
    selectedCategory === "All"
      ? disasters
      : disasters.filter((d) =>
          d.fields.type?.some((cat) =>
            cat.name.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        );

  return (
    <div className="future-disasters-container">
      <h2 className="disaster-heading">Disaster Map (Live from ReliefWeb)</h2>

      {/* Category Filter Dropdown */}
      <div className="filter-bar">
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Flood">Flood</option>
          <option value="Earthquake">Earthquake</option>
          <option value="Storm">Storm</option>
          <option value="Fire">Fire</option>
        </select>
      </div>

      {/* Map Container */}
      {!loading ? (
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "80vh", width: "100%", marginTop: "20px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* ✅ Marker Cluster Group */}
          <MarkerClusterGroup>
            {filteredDisasters.map((event, index) => {
              const coords = event.fields?.primary_country?.location;
              const title = event.fields?.name;
              const url = event.fields?.url;
              const types = event.fields?.type?.map((t) => t.name) || ["Unknown"];
              const typeStr = types.join(", ");
              const date = event.fields?.date?.created;

              if (!coords) return null;

              return (
                <Marker
                  key={index}
                  position={[coords.lat, coords.lon]}
                  icon={getIcon(typeStr)}
                >
                  <Popup>
                    <strong>{title}</strong>
                    <br />
                    <strong>Type:</strong> {typeStr}
                    <br />
                    <strong>Date:</strong>{" "}
                    {date ? new Date(date).toLocaleDateString() : "N/A"}
                    <br />
                    <a href={url} target="_blank" rel="noreferrer">
                      View Source
                    </a>
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      ) : (
        <p className="loading-text">Loading map data...</p>
      )}
    </div>
  );
};

export default FutureDisasters;
