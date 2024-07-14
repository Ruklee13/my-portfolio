'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Post() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      console.log('Maybeeeeeeeee');
      const response = await fetch(`/api/blog/${id}`);
      console.log('we pass here');
      const data = await response.json();
      setPost(data);
    }

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</div>
      <div className="prose max-w-none">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </div>
  );
}
