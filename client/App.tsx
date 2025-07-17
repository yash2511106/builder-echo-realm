import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Demo from "./pages/Demo";
import PlaceholderPage from "./pages/PlaceholderPage";
import InclusiveRewrite from "./pages/InclusiveRewrite";
import History from "./pages/History";
import { Settings, FileText, HelpCircle } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="bias-detector-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/demo" element={<Demo />} />
            <Route
              path="/settings"
              element={
                <PlaceholderPage
                  title="Settings"
                  description="Manage your account preferences, notification settings, and integration options."
                  icon={<Settings className="h-8 w-8 text-primary" />}
                />
              }
            />
            <Route
              path="/history"
              element={
                <PlaceholderPage
                  title="Analysis History"
                  description="View your previous bias analyses, compare results, and download reports."
                  icon={<History className="h-8 w-8 text-primary" />}
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Our terms and conditions for using the BiasDetector platform."
                  icon={<FileText className="h-8 w-8 text-primary" />}
                />
              }
            />
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="How we collect, use, and protect your data on the BiasDetector platform."
                  icon={<FileText className="h-8 w-8 text-primary" />}
                />
              }
            />
            <Route
              path="/help"
              element={
                <PlaceholderPage
                  title="Help & Support"
                  description="Get help with using BiasDetector, troubleshooting, and best practices for inclusive recruitment."
                  icon={<HelpCircle className="h-8 w-8 text-primary" />}
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
