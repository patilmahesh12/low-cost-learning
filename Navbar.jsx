// ...existing code...
fetch('http://localhost:4000/api/v1/course/showAllCategories')
  .then((response) => response.json())
  .then((data) => {
    if (typeof data === 'object' && !Array.isArray(data)) {
      setCategories(data); // Assuming setCategories is used to store categories
    } else {
      console.error('Unexpected API response:', data);
    }
  })
  .catch((error) => {
    console.error('Could not fetch Categories.', error);
  });
// ...existing code...
