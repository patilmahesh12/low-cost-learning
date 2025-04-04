// ...existing code...
fetch('http://localhost:4000/api/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(loginData), // Assuming loginData contains the login credentials
})
  .then((response) => response.json())
  .then((data) => {
    if (typeof data === 'object' && !Array.isArray(data)) {
      // Handle successful login response
    } else {
      console.error('Unexpected API response:', data);
    }
  })
  .catch((error) => {
    console.error('LOGIN API ERROR............', error);
  });
// ...existing code...
