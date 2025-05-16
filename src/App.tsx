import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/ThemeContext";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ADWorkPage from "./pages/work/ad";
import ShotOnCamPage from "./pages/work/cam";
import ProductionWorkPage from "./pages/work/production";
import PhotosPage from "./pages/work/photos";
import EditWorkPage from "./pages/work/edit";
import ShotOnIphonePage from "./pages/work/iphone";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/work/ad" element={<ADWorkPage />} />
            <Route path="/work/cam" element={<ShotOnCamPage />} />
            <Route path="/work/production" element={<ProductionWorkPage />} />
            <Route path="/work/photos" element={<PhotosPage />} />
            <Route path="/work/edit" element={<EditWorkPage />} />
            <Route path="/work/iphone" element={<ShotOnIphonePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
