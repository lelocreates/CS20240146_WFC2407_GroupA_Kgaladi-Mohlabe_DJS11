// Importing React for component creation and SWR for data fetching
import React from 'react';
import useSWR from 'swr';

// Fetcher function used by SWR to handle data fetching logic
// The function takes a URL, makes a fetch request, and parses the response as JSON
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  // Using the SWR hook to fetch data from an API endpoint
  /* Data` holds the fetched data, `error` holds error 
  information (if any), and `isLoading` indicates a loading state*/
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  // Handle error and loading states
  //error message if data fetching fails
  if (error) return <div>Error loading data: {error.message}</div>;
  //loading message while the data is being fetched
  if (isLoading) return <div>Loading...</div>;

  //Display posts once the data is successfully fetched
  return (
    <div>
      <h1>Posts</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p> 
          </div>
        ))}
    </div>
  );
};

export default App;