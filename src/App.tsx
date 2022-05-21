import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import GlobalStyles from "./styles/global";

const App = () => (
  <>
    <Routes>
      <Route path="/">
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<div>Error 404</div>} />
      </Route>
    </Routes>
    <GlobalStyles />
  </>
);

export default App;
