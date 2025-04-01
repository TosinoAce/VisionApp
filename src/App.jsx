import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayouts from "./layouts/MainLayouts";
import PricePage from "./PricePage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<PricePage/>}/>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
