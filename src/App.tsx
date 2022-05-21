import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";

const App = () => (
  <>
    <Routes>
      <Route path="/">
        <Route path="/" element={<div>123</div>} />
        <Route path="*" element={<div>Error 404</div>} />
      </Route>
    </Routes>
    <GlobalStyles />
  </>
);

export default App;
