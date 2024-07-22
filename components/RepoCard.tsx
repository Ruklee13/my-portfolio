'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [hoveredRepo, setHoveredRepo] = useState<number | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Ruklee13/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          className="border p-4 rounded shadow-lg"
          onMouseEnter={() => setHoveredRepo(index)}
          onMouseLeave={() => setHoveredRepo(null)}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open(repo.html_url, '_blank')}
        >
          <h2 className="text-xl font-bold">{repo.name}</h2>
          <p>{repo.language}</p>
          {hoveredRepo === index && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="mt-2 text-gray-700">{repo.description}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubRepos;
