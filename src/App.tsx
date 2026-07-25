import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './pages';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

