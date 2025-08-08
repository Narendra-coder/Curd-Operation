import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import HomeNav from './Components/HomeNav';
import HomePage from './Components/HomePage';
import CreatePage from './Components/CreatePage';
import UpdatePage from './Components/UpdatePage';
import DeletePage from './Components/DeletePage';
import ReadPage from './Components/ReadPage';

function App(props) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeNav />}>
          <Route index element={<HomePage />} />
          <Route path='/create-page' element={<CreatePage />} />
          <Route path='/update-page/:id' element={<UpdatePage />} />
          <Route path='/delete-page/:id' element={<DeletePage />} />
          <Route path='/read-page/:id' element={<ReadPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;