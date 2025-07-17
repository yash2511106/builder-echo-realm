import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Target,
  ChevronRight,
  Sparkles,
  BarChart3,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BiasDetector</h1>
            <Badge variant="secondary" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/demo">
              <Button>
                <PlayCircle className="h-4 w-4 mr-2" />
                Try Demo
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              <Target className="h-3 w-3 mr-1" />
              Recruiting Made Fair
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Eliminate Bias in Your
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {" "}
                Job Descriptions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered bias detection tool helps recruiters create
              inclusive job descriptions that attract diverse talent and build
              stronger teams. Get real-time feedback, diversity scoring, and
              inclusive rewriting suggestions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-6">
                <PlayCircle className="h-5 w-5 mr-2" />
                Try Free Demo
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Users className="h-5 w-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Feature Cards Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <div className="p-3 rounded-lg bg-bias-gender/10 border border-bias-gender/20 w-fit mb-4">
                <Target className="h-6 w-6 text-bias-gender" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Real-time Detection
              </h3>
              <p className="text-muted-foreground">
                Instantly identify biased language as you type with color-coded
                highlights and severity tags.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Diversity Scoring</h3>
              <p className="text-muted-foreground">
                Get comprehensive 0-100 diversity scores with detailed insights
                and improvement suggestions.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <div className="p-3 rounded-lg bg-success/10 border border-success/20 w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Inclusive Rewriting
              </h3>
              <p className="text-muted-foreground">
                One-click inclusive mode automatically rewrites job descriptions
                with fair, welcoming language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 mt-24">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="p-1 rounded bg-primary/10">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground">BiasDetector</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Building fair and inclusive workplaces, one job description at a
            time.
          </p>
        </div>
      </footer>
    </div>
  );
}
