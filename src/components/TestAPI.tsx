import { useEffect } from 'react';

const TestAPI = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: 'christian_prueba@gmail.com',
            password: '123456'
          })
        });
        
        const result = await response.json();
        console.log('Test API Response:', result);
        console.log('Response status:', response.status);
      } catch (error) {
        console.error('Test API Error:', error);
      }
    };
    
    testConnection();
  }, []);

  return <div>Testing API connection...</div>;
};

export default TestAPI;
