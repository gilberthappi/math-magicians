import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=funny',
      {
        headers: { 'X-Api-Key': 'vkwnFBG8qqMMKrgc74EHuQ==5Fewj66r2fKW1KKj' },
      })
      .then((response) => response.json())
      .then((data) => {
        // Check if the response data is empty
        if (data.length === 0) {
          setQuote('No funny quote available');
        } else {
          // Extract the quote from the response data
          const randomQuote = data[0]?.quote || 'No funny quote available';
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
