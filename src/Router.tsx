import { Route, Routes } from "react-router-dom";
import { Contato } from "./pages/contato";
import { Home } from "./pages/home";
import { Projetos } from "./pages/projetos";
import { Resumo } from "./pages/resumo";
import { Skills } from "./pages/skills";
import { Sobre } from "./pages/sobre";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/resumo" element={<Resumo />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    )
}