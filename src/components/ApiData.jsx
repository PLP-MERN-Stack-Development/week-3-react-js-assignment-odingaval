import React, { useEffect, useState } from 'react';
import Card from './Card';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter posts by search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">API Data (Posts)</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Error: {error}</p>
      )}
      {!loading && !error && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No posts found.</p>
          ) : (
            filteredPosts.map((post) => (
              <Card key={post.id}>
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ApiData; 