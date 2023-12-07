import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CaseStudy from "../CaseStudy";
import routes from "./routes";
import Dashboard from "../DashBoard";
import CaseStudy2 from "../CaseStudy2";
import CaseStudy3 from "../CaseStudy3";
import CaseStudy4 from "../CaseStudy4";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
            <Route path={routes.ROOT} element={<Dashboard />}>
            </Route>
            <Route path={routes.Case_1} element={<CaseStudy />} />
            <Route path={routes.Case_2} element={<CaseStudy2 />} />
            <Route path={routes.Case_3} element={<CaseStudy3 />} />
            <Route path={routes.Case_4} element={<CaseStudy4 />} />
            </Routes>
        </Router>
        
    )
}