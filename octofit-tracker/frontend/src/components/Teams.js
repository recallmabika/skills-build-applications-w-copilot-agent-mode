import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://redesigned-space-xylophone-pjxg4r47qrp6f6jpg-8000.app.github.dev/api/teams/')
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching teams:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading teams...</p>;

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team, i) => (
          <li key={i} className="list-group-item">
            {team.name} — {team.members?.length || 0} members
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;