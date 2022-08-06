import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import TodoApp from './TodoApp';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App project={'applications'} />} />
        <Route path='/todo' element={<TodoApp project={'todo'} />} />
      </Routes>
    </BrowserRouter>
  );
}