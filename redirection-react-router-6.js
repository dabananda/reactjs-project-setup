import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/lab" element={<Lab />} />
    <Route
        path="*"
        element={<Navigate to="/" replace />} //this is a way to redirect
    />
  </Routes>
</BrowserRouter>