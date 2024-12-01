// The fetchShows function is an async function that fetches podcast data from an API.
export const fetchShows = async () => {
  try {
      // Perform the fetch request to the API endpoint.
      const response = await fetch('https://podcast-api.netlify.app');
      
      // Check if the response is not OK (status code is not 2xx), and throw an error if true.
      if (!response.ok) throw new Error('Failed to fetch data');
      
      // Parse the response JSON and return the result.
      return await response.json();
  } catch (error) {
      // If any error occurs during the fetch operation, log the error to the console.
      console.error('Error fetching shows:', error);
      
      // Return an empty array in case of an error, ensuring the app continues to function without crashing.
      return [];
  }
};
