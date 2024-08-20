import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/404/ErrorPage";
import Main from "../components/Layout/Main";
import AddRecipe from "../components/Pages/AddRecipe/AddRecipe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="addRecipe" element={<AddRecipe />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

export default router;
