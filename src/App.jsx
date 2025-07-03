import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ApiData from './components/ApiData';

// Placeholder Home component
const Home = () => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-4">Welcome to PLP Task Manager</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300">Manage your tasks efficiently and explore API data!</p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api" element={<ApiData />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 