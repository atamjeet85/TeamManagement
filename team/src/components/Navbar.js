import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6">Team Management App</Typography>
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
