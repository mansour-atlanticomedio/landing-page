import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Programa from "./pages/Programa";
import Inscripcion from "./pages/Inscripcion";
import Documentacion from "./pages/Documentacion";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/jornadas" >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/programa" element={<Programa />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
