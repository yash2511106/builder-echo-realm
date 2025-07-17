import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Shield,
  Upload,
  BarChart3,
  History,
  Settings,
  User,
  LogOut,
  FileText,
  Target,
  Users,
  AlertTriangle,
  CheckCircle,
  X,
  RefreshCw,
  Home,
  ChevronDown,
  Download,
  Eye,
  RotateCcw,
  Clock,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [jobDescription, setJobDescription] = useState(
    "We are looking for a young and energetic software engineer to join our team. He should be a native English speaker with strong programming skills. The ideal candidate is a rock star developer who can work in a fast-paced environment.",
  );
  const [inclusiveMode, setInclusiveMode] = useState(false);
  const [diversityScore, setDiversityScore] = useState(65);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  // Mock bias detection results
  const biasedTerms = [
    {
      id: 1,
      text: "young and energetic",
      type: "age",
      severity: "high",
      position: [18, 36],
      suggestion: "motivated and enthusiastic",
      reason: "Age-related terms can discourage older candidates",
    },
    {
      id: 2,
      text: "He",
      type: "gender",
      severity: "medium",
      position: [89, 91],
      suggestion: "They",
      reason: "Use gender-neutral pronouns",
    },
    {
      id: 3,
      text: "native English speaker",
      type: "racial",
      severity: "high",
      position: [104, 126],
      suggestion: "fluent in English",
      reason: "May exclude non-native speakers unfairly",
    },
    {
      id: 4,
      text: "rock star developer",
      type: "cultural",
      severity: "medium",
      position: [195, 213],
      suggestion: "skilled developer",
      reason: "Cultural references may not resonate with all candidates",
    },
  ];

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

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file reading
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setJobDescription(content);
      };
      reader.readAsText(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const acceptSuggestion = (termId: number) => {
    const term = biasedTerms.find((t) => t.id === termId);
    if (term) {
      const newText = jobDescription.replace(term.text, term.suggestion);
      setJobDescription(newText);
      // Recalculate diversity score
      setDiversityScore((prev) => Math.min(100, prev + 10));
    }
  };

  const handleExport = () => {
    const blob = new Blob([jobDescription], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "improved-job-description.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Real-time analysis simulation
  useEffect(() => {
    const biasCount = biasedTerms.filter((term) =>
      jobDescription.includes(term.text),
    ).length;
    const baseScore = 100 - biasCount * 15;
    setDiversityScore(Math.max(20, Math.min(100, baseScore)));
  }, [jobDescription]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm flex flex-col">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BiasDetector</h1>
          </Link>

          <nav className="space-y-2">
            <Button
              variant="default"
              className="w-full justify-start"
              size="sm"
            >
              <Target className="h-4 w-4 mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Upload className="h-4 w-4 mr-3" />
              Upload JD
            </Button>
            <Link to="/history">
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
              >
                <History className="h-4 w-4 mr-3" />
                History
              </Button>
            </Link>
            <Link to="/settings">
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
              >
                <Settings className="h-4 w-4 mr-3" />
                Settings
              </Button>
            </Link>
          </nav>
        </div>

        {/* User Section */}
        <div className="mt-auto p-6 border-t border-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start p-2 h-auto"
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-foreground">
                      John Doe
                    </p>
                    <p className="text-xs text-muted-foreground">HR Manager</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/")}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Bias Analysis Dashboard
                </h2>
                <p className="text-muted-foreground">
                  Analyze and improve your job descriptions for inclusive hiring
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="inclusive-mode"
                    checked={inclusiveMode}
                    onCheckedChange={setInclusiveMode}
                  />
                  <Label htmlFor="inclusive-mode" className="text-sm">
                    Inclusive Mode
                  </Label>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Job Description Input
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleFileUpload}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.pdf,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button variant="outline" size="sm" onClick={handleAnalyze}>
                    {isAnalyzing ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Target className="h-4 w-4 mr-2" />
                    )}
                    {isAnalyzing ? "Analyzing..." : "Analyze"}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste your job description here or upload a file..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
              />
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <span>{jobDescription.length} characters</span>
                <span>Supported formats: PDF, DOCX, TXT (Max 10MB)</span>
              </div>
            </CardContent>
          </Card>

          {showResults && (
            <>
              {/* Analysis Results */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Diversity Score */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Diversity Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <svg className="w-32 h-32 transform -rotate-90">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-muted"
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${(diversityScore / 100) * 351.86} 351.86`}
                            className="text-primary"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">
                              {diversityScore}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Score
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Overall Inclusion Score
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Gender Neutrality</span>
                        <Badge
                          variant={
                            diversityScore > 80 ? "default" : "destructive"
                          }
                        >
                          {diversityScore > 80 ? "85%" : "45%"}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Age Inclusivity</span>
                        <Badge
                          variant={
                            diversityScore > 70 ? "default" : "destructive"
                          }
                        >
                          {diversityScore > 70 ? "78%" : "30%"}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cultural Sensitivity</span>
                        <Badge variant="outline">72%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Accessibility</span>
                        <Badge variant="default">90%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Analysis Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-destructive/10 rounded-lg">
                        <div className="text-2xl font-bold text-destructive">
                          {biasedTerms.length}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Issues Found
                        </div>
                      </div>
                      <div className="text-center p-3 bg-warning/10 rounded-lg">
                        <div className="text-2xl font-bold text-warning">
                          {
                            biasedTerms.filter((t) => t.severity === "high")
                              .length
                          }
                        </div>
                        <div className="text-sm text-muted-foreground">
                          High Severity
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Bias Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          Gender (
                          {
                            biasedTerms.filter((t) => t.type === "gender")
                              .length
                          }
                          )
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Age (
                          {biasedTerms.filter((t) => t.type === "age").length})
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Racial (
                          {
                            biasedTerms.filter((t) => t.type === "racial")
                              .length
                          }
                          )
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Cultural (
                          {
                            biasedTerms.filter((t) => t.type === "cultural")
                              .length
                          }
                          )
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      onClick={() =>
                        biasedTerms.forEach((term) => acceptSuggestion(term.id))
                      }
                      className="w-full"
                      size="sm"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Accept All Suggestions
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleExport}
                      className="w-full"
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Improved JD
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setJobDescription("")}
                      className="w-full"
                      size="sm"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Start Over
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Bias Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                    Detected Bias Terms & Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {biasedTerms.map((term) => (
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
                              Change
                            </Button>
                            <Button size="sm" variant="ghost">
                              <X className="h-3 w-3" />
                              Ignore
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </>
          )}

          {/* Real-time Floating Panel */}
          {jobDescription.length > 0 && (
            <div className="fixed bottom-6 right-6 z-50">
              <Card className="w-80 border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Live Analysis
                    </h4>
                    <Badge variant="outline">
                      {
                        biasedTerms.filter((term) =>
                          jobDescription.includes(term.text),
                        ).length
                      }{" "}
                      issues
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-primary">
                        {diversityScore}
                      </div>
                      <Progress value={diversityScore} className="mt-1 h-2" />
                    </div>
                    <div className="text-right">
                      <Users className="h-6 w-6 text-muted-foreground mx-auto" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Diversity
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
