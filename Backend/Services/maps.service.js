import axios from "axios";

export async function getAddressCoordinate(address) {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const res = await axios.get(url);
    console.log("API Response:", res.data); 

    if (res.data.status === "OK") {
      const location = res.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error(`Geocoding API error: ${res.data.status}`);
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw new Error("Unable to fetch coordinates");
  }
}

