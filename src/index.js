import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const theme = createTheme({
  palette: {
    primary: {
      light: '#fb3234',
      main: '#B80000',
      dark: '#c60000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f5f5f5',
      main: '#f0f0f0',
      dark: '#979797',
      contrastText: '#000',
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={theme}>
      <GoogleReCaptchaProvider reCaptchaKey='6LeprcEpAAAAANoHZ1siaxrLHHosBlhPvVtlKwXw'>
        <Provider store={store}> 
        <BrowserRouter>
          <App/>
        </BrowserRouter>
        </Provider>
      </GoogleReCaptchaProvider>
    </ThemeProvider>
);
