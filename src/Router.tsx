import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Projetos } from "./pages/projetos";
import { Skills } from "./pages/skills";
import { Sobre } from "./pages/sobre";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    )
}