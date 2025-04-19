import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import AirQualityChart from './AirQualityChart';
import './Chart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

// List of cities with their coordinates
const cities = [
  { name: 'Mumbai', lat: 19.076, lon: 72.8777 },
  { name: 'New York', lat: 40.7128, lon: -74.006 },
  { name: 'London', lat: 51.5072, lon: -0.1276 },
  { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
  { name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
  { name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
  { name: 'Beijing', lat: 39.9042, lon: 116.4074 },
  { name: 'Moscow', lat: 55.7558, lon: 37.6173 },
  { name: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729 },
  { name: 'Toronto', lat: 43.65107, lon: -79.347015 },
  { name: 'Bangkok', lat: 13.7563, lon: 100.5018 },
  { name: 'Cairo', lat: 30.0444, lon: 31.2357 },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'Dubai', lat: 25.276987, lon: 55.296249 },
  { name: 'Berlin', lat: 52.52, lon: 13.405 },
  { name: 'Seoul', lat: 37.5665, lon: 126.978 },
  { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
  { name: 'Buenos Aires', lat: -34.6037, lon: -58.3816 },
  { name: 'Rome', lat: 41.9028, lon: 12.4964 }
];

const ClimateChangeVisualizer = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]); // Default city
  const [climateData, setClimateData] = useState([]); // Year-wise climate data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchClimateData = async () => {
      setLoading(true);
      try {
        // Fetch daily max temperature data for selected city from 2017–2023
        const response = await axios.get('https://archive-api.open-meteo.com/v1/archive', {
          params: {
            latitude: selectedCity.lat,
            longitude: selectedCity.lon,
            start_date: '2003-01-01',
            end_date: '2023-12-31',
            daily: 'temperature_2m_max',
            timezone: 'auto'
          }
        });

        const rawData = response.data.daily;
        const yearlyTemps = {};

        // Group temperatures by year
        rawData.time.forEach((date, index) => {
          const year = new Date(date).getFullYear();
          if (!yearlyTemps[year]) {
            yearlyTemps[year] = [];
          }
          yearlyTemps[year].push(rawData.temperature_2m_max[index]);
        });

        // Calculate average temperature per year
        const averagedData = Object.keys(yearlyTemps).map(year => {
          const temps = yearlyTemps[year];
          const average = temps.reduce((sum, t) => sum + t, 0) / temps.length;
          return {
            year,
            avgTemp: parseFloat(average.toFixed(2)) // Round to 2 decimal places
          };
        });

        setClimateData(averagedData); // Update chart data
      } catch (error) {
        console.error('Failed to fetch climate data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClimateData();
  }, [selectedCity]); // Re-run when city is changed

  return (
    <><div className="p-6 max-w-4xl mx-auto rounded-2xl shadow-lg body">
      <Navbar />
      <h2 className="text-3xl font-bold mb-4 text-center text-green-800" style={{marginTop:"10px"}}>
        Temperature Level rise in the past 10 years 
      </h2>
      <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 20px", color: "#ffdead", fontSize: "18px"}}>This chart illustrates the gradual rise in average temperatures in Mumbai over the past 10+ years.
      It highlights the persistent warming trend due to urban heat islands, vehicular emissions, and reduced green cover.
      The overall curve shows that average temperatures have remained consistently high, with a noticeable upward shift post-2020.</p>

      {/* City selector dropdown */}
      <div className="mb-4">
        <label className="font-semibold mr-2" style={{marginLeft:'4px', color:'white'}}>Select a city:</label>
        <select
          value={selectedCity.name}
          onChange={(e) => {
            const city = cities.find(c => c.name === e.target.value);
            setSelectedCity(city);
          } }
          className="p-2 border rounded"
        >
          {cities.map((city) => (
            <option key={city.name} value={city.name}>{city.name}</option>
          ))}
        </select>
      </div>

      {/* Loading indicator or chart */}
      {loading ? (
        <p className="text-center text-gray-500">Loading climate data...</p>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={climateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis unit="°C" />
            <Tooltip />
            <Line type="monotone" dataKey="avgTemp" stroke="#ff5722" strokeWidth={2} />
          </LineChart>
          <AirQualityChart/>
        </ResponsiveContainer>
      )}
    </div></>
  );
};

export default ClimateChangeVisualizer;
