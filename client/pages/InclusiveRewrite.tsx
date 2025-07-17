import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  ArrowLeft,
  RotateCcw,
  Copy,
  Download,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Users,
  FileText,
  BarChart3,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function InclusiveRewrite() {
  const [originalText, setOriginalText] = useState(
    "We are looking for a young and energetic software engineer to join our team. He should be a native English speaker with strong programming skills. The ideal candidate is a rock star developer who can work in a fast-paced environment with guys from different backgrounds. We need someone who is tech-savvy and can handle the demands of this challenging role.",
  );

  const [rewrittenText, setRewrittenText] = useState("");
  const [isRewriting, setIsRewriting] = useState(false);
  const [originalScore, setOriginalScore] = useState(35);
  const [rewrittenScore, setRewrittenScore] = useState(92);

  const inclusiveVersion = `We are looking for a motivated and enthusiastic software engineer to join our team. They should be fluent in English with strong programming skills. The ideal candidate is a skilled developer who can work collaboratively with team members from diverse backgrounds. We seek someone with technical expertise who can contribute to our dynamic work environment.`;

  const improvements = [
    {
      original: "young and energetic",
      improved: "motivated and enthusiastic",
      reason: "Removes age bias while maintaining energy concept",
      category: "age",
    },
    {
      original: "He",
      improved: "They",
      reason: "Uses gender-neutral pronouns",
      category: "gender",
    },
    {
      original: "native English speaker",
      improved: "fluent in English",
      reason: "Focuses on skill rather than nativity",
      category: "racial",
    },
    {
      original: "rock star developer",
      improved: "skilled developer",
      reason: "Professional terminology over cultural references",
      category: "cultural",
    },
    {
      original: "guys",
      improved: "team members",
      reason: "Inclusive language for mixed groups",
      category: "gender",
    },
    {
      original: "fast-paced environment",
      improved: "dynamic work environment",
      reason: "Less pressure-oriented language",
      category: "cultural",
    },
  ];

  const handleRewrite = () => {
    setIsRewriting(true);
    setTimeout(() => {
      setRewrittenText(inclusiveVersion);
      setIsRewriting(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadText = (text: string, filename: string) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (rewrittenText) {
      // Simulate improved score calculation
      setRewrittenScore(92);
    }
  }, [rewrittenText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BiasDetector</h1>
            <Badge variant="secondary" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              Inclusive Rewrite
            </Badge>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/dashboard">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Inclusive Language Rewriter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your job descriptions with AI-powered inclusive language
            suggestions. See side-by-side comparison of original vs. improved
            text.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button
              onClick={handleRewrite}
              disabled={isRewriting || !originalText}
              size="lg"
            >
              {isRewriting ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4 mr-2" />
              )}
              {isRewriting ? "Rewriting..." : "Generate Inclusive Version"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setOriginalText("");
                setRewrittenText("");
                setOriginalScore(0);
                setRewrittenScore(0);
              }}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Original Text */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Original Job Description
                </div>
                <Badge variant="destructive">Score: {originalScore}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
                className="min-h-[300px] font-mono text-sm"
                placeholder="Paste your original job description here..."
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {originalText.length} characters
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(originalText)}
                    disabled={!originalText}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      downloadText(originalText, "original-job-description.txt")
                    }
                    disabled={!originalText}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              <Progress value={originalScore} className="h-2" />
              <div className="text-sm text-muted-foreground">
                Diversity Score: {originalScore}/100
              </div>
            </CardContent>
          </Card>

          {/* Rewritten Text */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-success" />
                  Inclusive Version
                </div>
                <Badge variant="default">Score: {rewrittenScore}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={rewrittenText}
                onChange={(e) => setRewrittenText(e.target.value)}
                className="min-h-[300px] font-mono text-sm"
                placeholder="Click 'Generate Inclusive Version' to see the improved text here..."
                readOnly={!rewrittenText}
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {rewrittenText.length} characters
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(rewrittenText)}
                    disabled={!rewrittenText}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      downloadText(
                        rewrittenText,
                        "inclusive-job-description.txt",
                      )
                    }
                    disabled={!rewrittenText}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              <Progress value={rewrittenScore} className="h-2" />
              <div className="text-sm text-muted-foreground">
                Diversity Score: {rewrittenScore}/100
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Improvement Breakdown */}
        {rewrittenText && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Changes Made */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Improvements Made
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {improvements.map((improvement, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between p-4 border border-border rounded-lg bg-muted/30"
                      >
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-3">
                            <Badge
                              variant="outline"
                              className={`${
                                improvement.category === "gender"
                                  ? "bg-bias-gender/20 text-bias-gender border-bias-gender/30"
                                  : improvement.category === "age"
                                    ? "bg-bias-age/20 text-bias-age border-bias-age/30"
                                    : improvement.category === "racial"
                                      ? "bg-bias-racial/20 text-bias-racial border-bias-racial/30"
                                      : "bg-bias-religious/20 text-bias-religious border-bias-religious/30"
                              }`}
                            >
                              {improvement.category}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-muted-foreground">
                                Original:
                              </span>
                              <div className="font-mono text-sm bg-destructive/10 px-2 py-1 rounded border border-destructive/20">
                                "{improvement.original}"
                              </div>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">
                                Improved:
                              </span>
                              <div className="font-mono text-sm bg-success/10 px-2 py-1 rounded border border-success/20">
                                "{improvement.improved}"
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {improvement.reason}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Score Comparison */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Score Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-success mb-2">
                      +{rewrittenScore - originalScore}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Points Improved
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Original Score</span>
                        <span className="font-medium">{originalScore}/100</span>
                      </div>
                      <Progress value={originalScore} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Improved Score</span>
                        <span className="font-medium">
                          {rewrittenScore}/100
                        </span>
                      </div>
                      <Progress value={rewrittenScore} className="h-2" />
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-3">Category Improvements</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Gender Neutrality</span>
                        <span className="text-success">+30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Age Inclusivity</span>
                        <span className="text-success">+35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cultural Sensitivity</span>
                        <span className="text-success">+20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accessibility</span>
                        <span className="text-muted-foreground">+5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Your job description is now more inclusive! Here's what you
                    can do next:
                  </p>
                  <div className="space-y-2">
                    <Link to="/dashboard">
                      <Button variant="outline" className="w-full" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Analyze Another JD
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="sm"
                      onClick={() =>
                        downloadText(
                          rewrittenText,
                          "final-inclusive-job-description.txt",
                        )
                      }
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Final Version
                    </Button>
                    <Link to="/history">
                      <Button variant="outline" className="w-full" size="sm">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View History
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
