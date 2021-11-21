import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Game } from "./pages/Game";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }