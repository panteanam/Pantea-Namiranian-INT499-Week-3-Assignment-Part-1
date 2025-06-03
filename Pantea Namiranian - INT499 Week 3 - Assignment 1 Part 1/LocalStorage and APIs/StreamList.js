import React, { useState, useEffect } from 'react';

const StreamList = () => {
  const [inputValue, setInputValue] = useState('');
  const [streams, setStreams] = useState(() => {
    const savedStreams = localStorage.getItem('streams');
    return savedStreams ? JSON.parse(savedStreams) : [];
  });

  useEffect(() => {
    localStorage.setItem('streams', JSON.stringify(streams));
  }, [streams]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newStream = { id: Date.now(), title: inputValue, completed: false };
      setStreams([...streams, newStream]);
      setInputValue('');
    }
  };

  const handleDelete = (id) => {
    setStreams(streams.filter(stream => stream.id !== id));
  };

  const handleComplete = (id) => {
    setStreams(streams.map(stream => 
      stream.id === id ? { ...stream, completed: !stream.completed } : stream
    ));
  };

  return (
    <div>
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a movie or program"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {streams.map(stream => (
          <li key={stream.id} style={{ textDecoration: stream.completed ? 'line-through' : 'none' }}>
            {stream.title}
            <span onClick={() => handleComplete(stream.id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>✔️</span>
            <span onClick={() => handleDelete(stream.id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>🗑️</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
