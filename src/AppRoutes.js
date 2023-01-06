import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import IndividualPokemon from "./pages/IndividualPokemon";
import { AppContextProvider } from "./contexts/AppcontextProvider";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/details/:id" element={<IndividualPokemon />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}
