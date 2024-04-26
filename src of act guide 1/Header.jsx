import React, { useState } from 'react';

const GameReviewsApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([])
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newBody, setNewBody] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setReviews([]);
    setNewTitle('');
    setNewDate('');
    setNewBody('');
  };

  const handleAddReview = () => {
    const newReview = {
      title: newTitle,
      date: newDate,
      body: newBody,
    };
    setReviews([...reviews, newReview]);
    setNewTitle('');
    setNewDate('');
    setNewBody('');
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div>
      <h1>Welcome to Game Reviews!</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}! You are logged in.</p>
          <button class='btn' onClick={handleLogout}>Logout</button>
          <h2>Add a New Review</h2>
          <h3>Game Title</h3>
          <input class='user'
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <h3>Review Date</h3>
          <input class='user'
            type="date"
            placeholder="Date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <br />
          <h3>Rating</h3>
          <textarea class='user'
            placeholder="Body"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          ></textarea>
          <br />
          <button class='btn' onClick={handleAddReview}>Add Review</button>
          <h2>Reviews</h2>
          <ol>
            {reviews.map((review, index) => (
              <li key={index}>
                <h3>{review.title}</h3>
                <p>{review.date}</p>
                <p>{review.body}</p>
                <button onClick={() => handleDeleteReview(index)}>Delete</button>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div>
          <p>{error}</p>
          <input class='user'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input class='user'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button class='btn' onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default GameReviewsApp;