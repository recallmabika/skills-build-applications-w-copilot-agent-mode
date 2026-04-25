import React, { useEffect, useState } from 'react';

function Teams() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const apiHost = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  const endpoint = `${apiHost}/api/teams/`;

  useEffect(() => {
    console.log('Teams endpoint:', endpoint);
    fetch(endpoint)
      .then((response) => {
        console.log('Teams response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('Teams fetched data:', data);
        if (Array.isArray(data)) {
          setItems(data);
          return;
        }
        const results = data?.results ?? data?.data;
        if (Array.isArray(results)) {
          setItems(results);
          return;
        }
        if (data) {
          setItems([data]);
          return;
        }
        setItems([]);
      })
      .catch((fetchError) => {
        console.error('Teams fetch error:', fetchError);
        setError('Unable to load teams.');
      });
  }, [endpoint]);

  const headers = items.length > 0 ? Object.keys(items[0]) : [];

  return (
    <div>
      <h2 className="mb-4">Teams</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {items.length === 0 && !error ? (
        <p className="text-muted">No teams found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                {headers.map((header) => (
                  <th key={header} scope="col">
                    {header.charAt(0).toUpperCase() + header.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id ?? index}>
                  {headers.map((header) => (
                    <td key={header}>
                      {typeof item[header] === 'object'
                        ? JSON.stringify(item[header])
                        : String(item[header])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Teams;
