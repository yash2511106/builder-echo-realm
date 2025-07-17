import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Users,
  Target,
  ChevronRight,
  Sparkles,
  BarChart3,
  CheckCircle,
  PlayCircle,
  Zap,
  Clock,
  FileText,
  Download,
  Eye,
  TrendingUp,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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
            <Link
              to="/demo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </Link>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="mb-8">
            <Badge variant="outline" className="mb-6">
              <Target className="h-3 w-3 mr-1" />
              Promoting Inclusive Hiring
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Detect Bias in Job Descriptions
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block">
                Instantly
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI-powered tool to promote inclusive hiring and build diverse
              teams through bias-free job descriptions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/demo">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Try Demo
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Login
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">
                Job Descriptions Analyzed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">
                Companies Trust Us
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3s</div>
              <div className="text-sm text-muted-foreground">
                Average Analysis Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Powerful Features for Inclusive Hiring
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to eliminate bias and create welcoming job
              descriptions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Detection */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="p-3 rounded-lg bg-bias-gender/10 border border-bias-gender/20 w-fit mb-4">
                  <Zap className="h-6 w-6 text-bias-gender" />
                </div>
                <CardTitle>Real-time Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instantly identify biased language as you type with
                  color-coded highlights and severity indicators
                </p>
              </CardContent>
            </Card>

            {/* Diversity Scoring */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Diversity Score (0-100)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get comprehensive diversity scores with detailed insights and
                  actionable improvement suggestions
                </p>
              </CardContent>
            </Card>

            {/* Inclusive Rewriting */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="p-3 rounded-lg bg-success/10 border border-success/20 w-fit mb-4">
                  <FileText className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Inclusive Rewriting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically rewrite job descriptions with inclusive language
                  using our AI-powered suggestions
                </p>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="p-3 rounded-lg bg-info/10 border border-info/20 w-fit mb-4">
                  <Download className="h-6 w-6 text-info" />
                </div>
                <CardTitle>Multiple File Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload PDF, DOCX, or TXT files, or paste text directly for
                  instant bias analysis
                </p>
              </CardContent>
            </Card>

            {/* History & Analytics */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 w-fit mb-4">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>History & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track your progress over time and compare different versions
                  of job descriptions
                </p>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="p-3 rounded-lg bg-bias-age/10 border border-bias-age/20 w-fit mb-4">
                  <Eye className="h-6 w-6 text-bias-age" />
                </div>
                <CardTitle>Export & Share</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Export improved job descriptions and share analysis reports
                  with your team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple 3-step process to create inclusive job descriptions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Upload or Paste</h3>
              <p className="text-muted-foreground">
                Upload your job description file or paste the text directly into
                our analyzer
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                2. Analyze & Review
              </h3>
              <p className="text-muted-foreground">
                Our AI identifies biased terms and provides suggestions with
                Accept, Change, or Ignore options
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Export & Share</h3>
              <p className="text-muted-foreground">
                Download your bias-free job description and track your diversity
                improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works best for your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-4xl font-bold">$0</div>
                <p className="text-muted-foreground">
                  Perfect for trying out the tool
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>5 analyses per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Basic bias detection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Diversity scoring</span>
                  </li>
                </ul>
                <Link to="/register">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary/40 bg-card/50 backdrop-blur-sm ring-2 ring-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Pro</CardTitle>
                    <div className="text-4xl font-bold">$29</div>
                    <p className="text-muted-foreground">Per user/month</p>
                  </div>
                  <Badge>Most Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Unlimited analyses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Advanced bias detection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Inclusive rewriting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>History & analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Export to multiple formats</span>
                  </li>
                </ul>
                <Link to="/register">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold">Custom</div>
                <p className="text-muted-foreground">For large organizations</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span>Training & onboarding</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Build More Inclusive Teams?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of companies using BiasDetector to create fair and
            welcoming job descriptions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-6">
                <PlayCircle className="h-5 w-5 mr-2" />
                Try Demo
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Users className="h-5 w-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-1 rounded bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground">
                  BiasDetector
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Building fair and inclusive workplaces, one job description at a
                time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/demo"
                    className="hover:text-foreground transition-colors"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/login"
                    className="hover:text-foreground transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-foreground transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 BiasDetector. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
