import {
    Home,
    Movie,
    SEARCHMOVIE,
} from "../Pages"

const routesData = [
    {
      path: "/",
      Component: Home,
      publicRoute: true,
      exact: true,
    },
    {
      path: "/search/:query",
      Component: SEARCHMOVIE,
      publicRoute: true,
      exact: true,
    },
    {
      path: "/movie/:id",
      Component: Movie,
      publicRoute: true,
      exact: true,
    },
  
]

export default routesData;