import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary"
    style={{
        display:'flex',
        justifyContent:'center',
        fontSize:'15px',
        margin:'5px',
        marginTop:'15px'
    }}>
      {'Copyright © '}
      <Link color="inherit" to={'https://mui.com/'}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm" >
            <Link to={'/'}>
                <Stack  direction="row" spacing={1} style={{
                                display:'flex',
                                margin: 'auto',
                                width: '6em',
                            }}>
                    <IconButton  aria-label="delete">
                        <HomeIcon sx={{ color: red[800], fontSize: 50 }} />
                    </IconButton>
                </Stack>
            </Link>
            
            <hr />
            <Container style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
            <Stack  direction="row" spacing={1} >
                <IconButton  aria-label="delete">
                    <FacebookOutlinedIcon sx={{color: grey[800],fontSize: 40}} />
                </IconButton>
            </Stack>
            <Stack  direction="row" spacing={1} >
                <IconButton  aria-label="delete">
                    <TwitterIcon  sx={{color: grey[800],fontSize: 40}}/>
                </IconButton>
            </Stack>
            <Stack  direction="row" spacing={1} >
                <IconButton  aria-label="delete">
                    <InstagramIcon sx={{color: grey[800],fontSize: 40}}/>
                </IconButton>
            </Stack>
            <Stack  direction="row" spacing={1} >
                <IconButton  aria-label="delete">
                    <LinkedInIcon sx={{color: grey[800],fontSize: 40}}/>
                </IconButton>
            </Stack>
           </Container>
            
          </Container>
          <Copyright />
        </Box>
    </ThemeProvider>
  );
}

