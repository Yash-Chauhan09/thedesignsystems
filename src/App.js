import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/section-components/Header";
import './styles/index.css';
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <div className="center__view App">
      {/* header component */}
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;