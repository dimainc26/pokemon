import "./App.css";
import { HomePage } from "./views/HomePage";
import { AllPage } from "./views/AllPage";
import { NotFoundPage } from "./views/404";
import { Card } from "./components/Card";

import axios from "axios";

function App() {
    return (
        <div  >
            <HomePage />
            {/* <AllPage /> */}
            {/* <Card /> */}
        </div>
    );
}

export default App;
