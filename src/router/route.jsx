import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portal" element={<App />} errorElement={<App />}></Route>

        <Route path="*" element={<Navigate to={'/portal'} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
