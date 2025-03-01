const API_URL = "https://www.omdbapi.com/?apikey=3d8e0b2c&s=";

export const fetchmovies = async (searchQuery) => {
  if (!searchQuery) return [];

  try {
    const response = await fetch(`${API_URL}${searchQuery}`);
    const data = await response.json();

    return data.Search ? data.Search : [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
