import {
    Home,
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
      exact: false,
    }
]

export default routesData;