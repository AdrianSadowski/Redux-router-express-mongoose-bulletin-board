import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import {createTheme, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import {store} from './redux/store';

import {MainLayout} from './components/layout/MainLayout/MainLayout';
import {Homepage} from './components/views/Homepage/Homepage';
import {Post} from './components/views/Post/Post';
import {PostEdit} from './components/views/PostEdit/PostEdit';
import {PostAdd} from './components/views/PostAdd/PostAdd';
import {NotFound} from './components/views/NotFound/NotFound';

const theme = createTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    secondary: {main: '#81d4fa'},
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/post/add" element={<PostAdd />} />
              <Route exact path="/post/:id" element={<Post />} />
              <Route exact path="/post/:id/edit" element={<PostEdit />} />
              <Route path="*" element={< NotFound />} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export {App};
