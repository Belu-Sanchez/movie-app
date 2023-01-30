import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Forgot, LastReleases, Login, PopularMovies, SignIn } from './pages';
import { Search } from 'react-bootstrap-icons';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="singin" element={<SignIn />} />
      <Route path="lastreleases" element={<LastReleases />} />
      <Route path="popularmovies" element={<PopularMovies />} />
      <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

