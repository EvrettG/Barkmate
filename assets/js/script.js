// api details

const name = 'golden retriever';
const apiKey = 'HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM';

fetch(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });