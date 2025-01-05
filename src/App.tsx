import './App.css'
import '../src/styles/colors.ts';
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./components/pages/mainPage/MainPage.tsx";
import NotFound from "./components/pages/notFound/NotFound.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
