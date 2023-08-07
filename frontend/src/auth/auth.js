// auth.js
import jwtDecode from 'jwt-decode';

// Function to perform login
export const login = async (username, password) => {
  try {
    // Call your authentication API or perform authentication logic here
    // ...

    // Assuming authentication is successful, return the user object or token
    const user = { username, email: 'user@example.com' };
    return user;
  } catch (error) {
    // Handle authentication error
    throw new Error('Authentication failed');
  }
};

// Function to perform logout
export const logout = async () => {
  try {
    localStorage.removeItem('token');
    return { success: true };
  } catch (error) {
    // Handle logout error
    throw new Error('Logout failed');
  }
};

// Function to check if the user is logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    try {
      const decodedToken = jwtDecode(token);

      // Check if the token is expired
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }

  return false;
};


