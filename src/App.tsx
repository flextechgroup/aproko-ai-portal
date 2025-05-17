
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import Nutrition from "./pages/Nutrition";
import MentalHealth from "./pages/MentalHealth";
import Fitness from "./pages/Fitness";
import Consultations from "./pages/Consultations";
import Subscriptions from "./pages/Subscriptions";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/community" element={<Community />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
