import { Switch, Route, Redirect } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:rest*" component={() => <Redirect to="/" />} />
    </Switch>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Router />
      </TooltipProvider>
  );
}

export default App;