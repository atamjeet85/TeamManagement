import { Card, CardContent, Typography, Grid } from "@mui/material";

const Dashboard = () => {
  // Example statistics; replace these with actual data fetched from the backend
  const stats = {
    totalTeams: 12,
    activeTeams: 7,
    inactiveTeams: 5,
    totalMembers: 42,
  };

  return (
    <div>
      <Typography variant="h4" className="mb-6">
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total Teams</Typography>
              <Typography variant="h6">{stats.totalTeams}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Active Teams</Typography>
              <Typography variant="h6">{stats.activeTeams}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Inactive Teams</Typography>
              <Typography variant="h6">{stats.inactiveTeams}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total Members</Typography>
              <Typography variant="h6">{stats.totalMembers}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
