'use client';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow-md">
            <div 
              className="cursor-pointer text-2xl font-semibold text-blue-500 hover:underline"
              onClick={() => togglePost(post.id)}
            >
              {post.title}
            </div>
            <div className="text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</div>
            {expandedPost === post.id && (
              <div className="mt-4 prose max-w-none">
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>
            )}
            <div className="mt-2">
              <Link href={`/posts/${post.id}`}>
                <div className="text-blue-500 hover:underline">Read more</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
