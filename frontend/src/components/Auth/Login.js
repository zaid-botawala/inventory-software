import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
