import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Import Service Pages
import IndividualTherapy from "./pages/services/IndividualTherapy";
import NeuropsychologicalEvaluation from "./pages/services/NeuropsychologicalEvaluation";
import PsychologicalEvaluation from "./pages/services/PsychologicalEvaluation";
import SurgeryAcolhimento from "./pages/services/SurgeryAcolhimento";
import Orientation from "./pages/services/Orientation";
import InternationalTherapyPage from "./pages/services/InternationalTherapyPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      
      {/* Service Routes */}
      <Route path={"/servicos/psicoterapia-individual"} component={IndividualTherapy} />
      <Route path={"/servicos/avaliacao-neuropsicologica"} component={NeuropsychologicalEvaluation} />
      <Route path={"/servicos/avaliacao-psicologica"} component={PsychologicalEvaluation} />
      <Route path={"/servicos/acolhimento-cirurgias"} component={SurgeryAcolhimento} />
      <Route path={"/servicos/orientacao-acompanhamento"} component={Orientation} />
      <Route path={"/servicos/brasileiros-no-exterior"} component={InternationalTherapyPage} />
      
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
