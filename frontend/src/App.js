import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from './reducers/index';
import Home from './components/Home';
import Signup from './components/signup';
import { createTheme,ThemeProvider, } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import TrailerModal from './components/TrailerModal'

const cstore = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));


const App = () => {
  const styl = {
    html:{
      height:'100%'
    },
    body:{
      minHeight:'100vh'
    }
  
}

  const theme = createTheme({
    components:{
      MuiButton:{
        defaultProps:{
          style:{
            textTransform:'none'
          }
        }
      },
      MuiContainer:{
        defaultProps:{
          style:{
          padding:'0px'
        }
      }},
      MuiIcon:{
        defaultProps:{
        
          style:{
              fontWeight:'1',
              fontSize: '500px',
            }
        }
      }
    }
  })


  return (
    <Provider store={cstore}>
      <GlobalStyles styles={styl} />
      <ThemeProvider theme={theme} >
      <Router>
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/p' element={<TrailerModal /> } />
        </Routes>
      </Router>
      </ThemeProvider>
    </Provider>  
  );
}

export default App;
