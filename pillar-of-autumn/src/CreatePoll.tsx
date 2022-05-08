import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '.';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Pillar of Autumn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function CreatePoll() {
    // const [data, setData] = useState({
        // title: "",
        // aswers: [],
        // receivers: [],
    // })
    // const updateData = () => {
        // setData(previous => {
            // return { ...previous}
        // });
    // }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          question: data.get('question'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AssignmentIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Poll Creation
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="question"
                    label="Poll Question"
                    name="question"
                    autoComplete="question"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="answer1"
                    label="Answer 1"
                    name="answer1"
                    autoComplete="answer1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="answer2"
                    label="Answer 2"
                    name="answer2"
                    autoComplete="answer2"
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    fullWidth
                    id="answer2"
                    label="Answer 3"
                    name="answer2"
                    autoComplete="answer2"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <IconButton color="primary" aria-label="removeReceiver">
                    <RemoveIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    fullWidth
                    disabled
                    id="answer4"
                    label="Answer 4"
                    name="answer4"
                    autoComplete="answer4"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <IconButton color="secondary" aria-label="addReceiver">
                    <AddIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    fullWidth
                    id="receiver1"
                    label="Receiver 1"
                    name="receiver1"
                    autoComplete="receiver1"
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    fullWidth
                    id="receiver2"
                    label="Receiver 2"
                    name="receiver2"
                    autoComplete="receiver2"
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    fullWidth
                    id="receiver3"
                    label="Receiver 3"
                    name="receiver3"
                    autoComplete="receiver3"
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    fullWidth
                    id="receiver4"
                    label="Receiver 4"
                    name="receiver4"
                    autoComplete="receiver4"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <IconButton color="primary" aria-label="addReceiver">
                    <PersonRemoveIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    fullWidth
                    disabled
                    id="answer4"
                    label="Receiver 5"
                    name="answer4"
                    autoComplete="answer4"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <IconButton color="secondary" aria-label="addReceiver">
                    <PersonAddIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        </ThemeProvider>
    );
}