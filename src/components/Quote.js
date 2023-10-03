import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL with the "funny" category
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=funny';

    // Fetch the quote from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Check if the response data is empty
        if (data.length === 0) {
          setQuote('No funny quote available');
        } else {
          // Extract the quote from the response data
          const randomQuote = data[0]?.quote || 'I think there is something in the fact that it is hard to be good looking and funny. You have to have an oddball quality people have to sympathise with you to find you funny.';
          setQuote(randomQuote);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
