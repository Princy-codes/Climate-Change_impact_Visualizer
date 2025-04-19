// AirQualityChart.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import './AirQualityChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 10 major Indian cities
const cities = [
  { name: "Delhi", lat: 28.6139, lon: 77.2090 },
  { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
  { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
  { name: "Ahmedabad", lat: 23.0258, lon: 72.5873 },
  { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
  { name: "Lucknow", lat: 26.8467, lon: 80.9462 },
  { name: "Bhopal", lat: 23.2599, lon: 77.4126 }
];

const AirQualityChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        const responses = await Promise.all(
          cities.map(city =>
            axios.get("https://air-quality-api.open-meteo.com/v1/air-quality", {
              params: {
                latitude: city.lat,
                longitude: city.lon,
                hourly: "pm10,pm2_5,carbon_monoxide,methane,dust,carbon_dioxide",
                timezone: "auto",
                past_days: 1
              }
            })
          )
        );

        const labels = cities.map(city => city.name);

        const getAvg = (data) => (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2);

        const pm25 = responses.map(res => getAvg(res.data.hourly.pm2_5));
        const pm10 = responses.map(res => getAvg(res.data.hourly.pm10));
        const co = responses.map(res => getAvg(res.data.hourly.carbon_monoxide));
        const ch4 = responses.map(res => getAvg(res.data.hourly.methane));
        const dust = responses.map(res => getAvg(res.data.hourly.dust));
        const co2 = responses.map(res => getAvg(res.data.hourly.carbon_dioxide));

        setChartData({
          labels,
          datasets: [
            {
              label: "PM2.5 (µg/m³)",
              backgroundColor: "#ff4d4d",
              data: pm25
            },
            {
              label: "PM10 (µg/m³)",
              backgroundColor: "#ffa64d",
              data: pm10
            },
            {
              label: "CO (µg/m³)",
              backgroundColor: "#ffd11a",
              data: co
            },
            {
              label: "Methane (ppb)",
              backgroundColor:  "#ffdead",
              data: ch4
            },
            {
              label: "Dust (µg/m³)",
              backgroundColor: "#cc99ff",
              data: dust
            },
            {
              label: "CO₂ (ppm)",
              backgroundColor: "#80ffaa",
              data: co2
            }
          ]
        });
      } catch (err) {
        console.error("Error fetching air quality data:", err);
      }
    };

    fetchAirQuality();
  }, []);

  if (!chartData) return <p>Loading air quality degradation data...</p>;

  return (
    <div style={{ width: "95%", margin: "auto", paddingTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Air Quality Degradation Due to Pollution (Last 24 Hours)
      </h2>
      <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 20px", color: "#ffdead", fontSize: "18px" }}>
      This chart illustrates the rising levels of air pollutants such as PM2.5, PM10, Carbon Monoxide, Methane, Dust, and Carbon Dioxide across 10 major Indian cities. The data highlights how rapid urbanization, vehicle emissions, industrial activities, and construction dust are contributing significantly to the degradation of air quality. With millions of people commuting and industries operating daily, these pollutants accumulate and pose serious health risks, making air pollution a growing concern in India’s urban landscape.
    </p>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: {
              display: true,
              text: "Pollution Levels in 10 Indian Cities"
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Concentration"
              }
            }
          }
        }}
      />
    </div>
  );
};

export default AirQualityChart;
