import React, { useState, useEffect } from 'react';

export default function Hemant() {
  const [ideas, setIdeas] = useState(null);

  useEffect(() => {
    fetch('/api/ideas')
      .then(res => res.json())
      .then(data => setIdeas(data));
  }, []);

  return (
    <div>
      {ideas ? (
        Object.values(ideas).map(idea => (
          <div key={idea.id}>
            <h3>{idea.idea_name}</h3>
            <p>Author: {idea.author_name}</p>
            <p>{idea.idea_description}</p>
          </div>
        ))
      ) : (
        <p>Loading ideas...</p>
      )}
    </div>
  );
}
