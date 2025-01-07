import './App.css'
import '../src/styles/colors.ts';
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./components/pages/notFound/NotFound";
import FullCard from "./components/pages/fullCard/FullCard";
import MainPage from "./components/pages/mainPage/MainPage";
import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path=":id" element={<FullCard />} />
                  <Route path="/notfound" element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
