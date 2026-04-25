import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://redesigned-space-xylophone-pjxg4r47qrp6f6jpg-8000.app.github.dev/api/workouts/')
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching workouts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading workouts...</p>;

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((w, i) => (
          <li key={i} className="list-group-item">
            <strong>{w.name}</strong> — {w.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;