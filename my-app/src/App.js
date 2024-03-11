import MoviesContainer from './Components/MoviesContainer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TvShowsContainer from './Components/TvShowsContainer';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MoviesContainer/>
  },
  {
    path:"/TvShows",
    element: <TvShowsContainer/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
