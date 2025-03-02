const API_URL = "https://www.omdbapi.com/?apikey=76f71331&s=";

export const fetchmovies = async (searchQuery) => {
  if (!searchQuery) return [];

  try {
    const response = await fetch(`${API_URL}${encodeURIComponent(searchQuery)}`);
    const data = await response.json();
    console.log(data)

    return data.Search ? data.Search : [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
