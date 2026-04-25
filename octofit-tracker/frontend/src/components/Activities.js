import React, { useState, useEffect } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://redesigned-space-xylophone-pjxg4r47qrp6f6jpg-8000.app.github.dev/api/activities/')
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching activities:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading activities...</p>;

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Activity Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, i) => (
            <tr key={i}>
              <td>{a.user}</td>
              <td>{a.activity_type}</td>
              <td>{a.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;