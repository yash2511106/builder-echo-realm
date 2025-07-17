import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Shield,
  PlayCircle,
  Target,
  BarChart3,
  CheckCircle,
  X,
  Eye,
  RefreshCw,
  ArrowLeft,
  AlertTriangle,
  Users,
  Clock,
  FileText,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Demo() {
  const [demoText, setDemoText] = useState(
    "We are looking for a young and energetic software engineer to join our team. He should be a native English speaker with strong programming skills. The ideal candidate is a rock star developer who can work in a fast-paced environment with guys from different backgrounds.",
  );
  const [inclusiveMode, setInclusiveMode] = useState(false);
  const [diversityScore, setDiversityScore] = useState(45);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Demo bias terms
  const biasTerms = [
    {
      id: 1,
      text: "young and energetic",
      type: "age",
      severity: "high",
      suggestion: "motivated and enthusiastic",
      reason: "Age-related terms can discourage older candidates",
    },
    {
      id: 2,
      text: "He",
      type: "gender",
      severity: "medium",
      suggestion: "They",
      reason: "Use gender-neutral pronouns",
    },
    {
      id: 3,
      text: "native English speaker",
      type: "racial",
      severity: "high",
      suggestion: "fluent in English",
      reason: "May exclude non-native speakers unfairly",
    },
    {
      id: 4,
      text: "rock star developer",
      type: "cultural",
      severity: "medium",
      suggestion: "skilled developer",
      reason: "Cultural references may not resonate with all candidates",
    },
    {
      id: 5,
      text: "guys",
      type: "gender",
      severity: "medium",
      suggestion: "team members",
      reason: "Use inclusive language for mixed groups",
    },
  ];

  const inclusiveVersion = `We are looking for a motivated and enthusiastic software engineer to join our team. They should be fluent in English with strong programming skills. The ideal candidate is a skilled developer who can work in a collaborative environment with team members from different backgrounds.`;

  const getBiasColor = (type: string) => {
    switch (type) {
      case "gender":
        return "bg-bias-gender/20 text-bias-gender border-bias-gender/30";
      case "age":
        return "bg-bias-age/20 text-bias-age border-bias-age/30";
      case "racial":
        return "bg-bias-racial/20 text-bias-racial border-bias-racial/30";
      case "cultural":
        return "bg-bias-religious/20 text-bias-religious border-bias-religious/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  const highlightText = (text: string) => {
    let highlightedText = text;
    biasTerms.forEach((term) => {
      if (text.includes(term.text)) {
        const className = getBiasColor(term.type);
        highlightedText = highlightedText.replace(
          new RegExp(term.text, "g"),
          `<mark class="px-1 py-0.5 rounded text-xs ${className}">${term.text}</mark>`,
        );
      }
    });
    return highlightedText;
  };

  const acceptSuggestion = (termId: number) => {
    const term = biasTerms.find((t) => t.id === termId);
    if (term) {
      const newText = demoText.replace(term.text, term.suggestion);
      setDemoText(newText);
    }
  };

  const runDemoAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 1500);
  };

  // Calculate diversity score based on remaining bias terms
  useEffect(() => {
    const remainingBias = biasTerms.filter((term) =>
      demoText.includes(term.text),
    ).length;
    const baseScore = 100 - remainingBias * 12;
    setDiversityScore(Math.max(20, Math.min(100, baseScore)));
  }, [demoText]);

  useEffect(() => {
    if (inclusiveMode) {
      setDemoText(inclusiveVersion);
      setDiversityScore(92);
    }
  }, [inclusiveMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BiasDetector</h1>
            <Badge variant="secondary" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              Demo
            </Badge>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Demo Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Interactive Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our bias detection tool with a sample job description. See how
            it identifies biased language and suggests improvements in
            real-time.
          </p>
        </div>

        {/* Demo Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Switch
              id="demo-inclusive-mode"
              checked={inclusiveMode}
              onCheckedChange={setInclusiveMode}
            />
            <Label htmlFor="demo-inclusive-mode" className="text-sm">
              Inclusive Mode
            </Label>
          </div>
          <Button onClick={runDemoAnalysis} disabled={isAnalyzing}>
            {isAnalyzing ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <PlayCircle className="h-4 w-4 mr-2" />
            )}
            {isAnalyzing ? "Analyzing..." : "Run Analysis"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Text Input Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Input Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Sample Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={demoText}
                  onChange={(e) => setDemoText(e.target.value)}
                  className="min-h-[200px] font-mono text-sm"
                  placeholder="Edit the job description to see bias detection in action..."
                />
                <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                  <span>{demoText.length} characters</span>
                  <span>Try editing the text to see live detection</span>
                </div>
              </CardContent>
            </Card>

            {/* Highlighted Text Display */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Bias Detection Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="p-4 border border-border rounded-lg bg-muted/30 min-h-[200px] font-mono text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(demoText),
                  }}
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  Highlighted terms show potential bias. Click suggestions below
                  to improve.
                </div>
              </CardContent>
            </Card>

            {/* Bias Terms & Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                  Detected Issues & Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {biasTerms
                    .filter((term) => demoText.includes(term.text))
                    .map((term) => (
                      <div
                        key={term.id}
                        className="flex items-start justify-between p-4 border border-border rounded-lg bg-muted/30"
                      >
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-3">
                            <Badge
                              variant="outline"
                              className={getBiasColor(term.type)}
                            >
                              {term.type}
                            </Badge>
                            <span className="font-medium">"{term.text}"</span>
                            <Badge
                              variant={
                                term.severity === "high"
                                  ? "destructive"
                                  : "outline"
                              }
                              className="text-xs"
                            >
                              {term.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {term.reason}
                          </p>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-muted-foreground">
                              Suggestion:
                            </span>
                            <span className="font-medium text-success">
                              "{term.suggestion}"
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => acceptSuggestion(term.id)}
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Accept
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm" variant="ghost">
                            <X className="h-3 w-3" />
                            Ignore
                          </Button>
                        </div>
                      </div>
                    ))}

                  {biasTerms.filter((term) => demoText.includes(term.text))
                    .length === 0 && (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">
                        Great job! No bias detected.
                      </h3>
                      <p className="text-muted-foreground">
                        This job description appears to be inclusive and
                        bias-free.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Diversity Score & Stats */}
          <div className="space-y-6">
            {/* Diversity Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Diversity Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(diversityScore / 100) * 251.33} 251.33`}
                        className="text-primary"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {diversityScore}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Progress value={diversityScore} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Overall Inclusion Score
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Gender Neutrality</span>
                    <Badge
                      variant={diversityScore > 80 ? "default" : "destructive"}
                    >
                      {diversityScore > 80 ? "95%" : "60%"}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Age Inclusivity</span>
                    <Badge
                      variant={diversityScore > 80 ? "default" : "destructive"}
                    >
                      {diversityScore > 80 ? "88%" : "40%"}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cultural Sensitivity</span>
                    <Badge variant="outline">
                      {diversityScore > 80 ? "92%" : "55%"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Analysis Panel */}
            <Card className="border-primary/20 bg-card/95">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Live Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Issues Found</span>
                    <Badge variant="outline">
                      {
                        biasTerms.filter((term) => demoText.includes(term.text))
                          .length
                      }
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">High Severity</span>
                    <Badge variant="destructive">
                      {
                        biasTerms.filter(
                          (term) =>
                            demoText.includes(term.text) &&
                            term.severity === "high",
                        ).length
                      }
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Word Count</span>
                    <Badge variant="outline">
                      {demoText.split(" ").length}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Ready to Get Started?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Sign up to access unlimited analyses, advanced features, and
                  team collaboration tools.
                </p>
                <div className="space-y-2">
                  <Link to="/register">
                    <Button className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      Login to Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
