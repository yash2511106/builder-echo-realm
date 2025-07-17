import { useState } from "react";
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
} from "lucide-react";

export default function Dashboard() {
  const [jobDescription, setJobDescription] = useState("");
  const [inclusiveMode, setInclusiveMode] = useState(false);
  const [diversityScore, setDiversityScore] = useState(78);

  // Mock bias detection results
  const biasedTerms = [
    { text: "young and energetic", type: "age", severity: "high" },
    { text: "guys", type: "gender", severity: "medium" },
    { text: "native English speaker", type: "racial", severity: "high" },
  ];

  const getBiasColor = (type: string) => {
    switch (type) {
      case "gender":
        return "bias-gender";
      case "age":
        return "bias-age";
      case "racial":
        return "bias-racial";
      default:
        return "primary";
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BiasDetector</h1>
          </div>

          <nav className="space-y-2">
            <Button
              variant="default"
              className="w-full justify-start"
              size="sm"
            >
              <Target className="h-4 w-4 mr-3" />
              Bias Analysis
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <History className="h-4 w-4 mr-3" />
              History
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <BarChart3 className="h-4 w-4 mr-3" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </Button>
          </nav>
        </div>

        {/* User Section */}
        <div className="absolute bottom-0 w-64 p-6 border-t border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 rounded-full bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">Recruiter</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <LogOut className="h-4 w-4 mr-3" />
            Sign Out
          </Button>
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
                  Bias Analysis
                </h2>
                <p className="text-muted-foreground">
                  Analyze and improve your job descriptions
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
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Job Description Input
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Textarea
                  placeholder="Paste your job description here or upload a file..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px] flex-1"
                />
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Bias Detection Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                  Detected Bias Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {biasedTerms.map((term, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/30"
                    >
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant="outline"
                          className={`bg-${getBiasColor(term.type)}/10 text-${getBiasColor(term.type)} border-${getBiasColor(term.type)}/20`}
                        >
                          {term.type}
                        </Badge>
                        <span className="font-medium">{term.text}</span>
                        <Badge
                          variant={
                            term.severity === "high" ? "destructive" : "outline"
                          }
                        >
                          {term.severity}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          Change
                        </Button>
                        <Button size="sm" variant="ghost">
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                  <div className="text-4xl font-bold text-primary mb-2">
                    {diversityScore}
                  </div>
                  <Progress value={diversityScore} className="w-full" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Overall Inclusion Score
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Gender Neutrality</span>
                    <Badge variant="outline">85%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Age Inclusivity</span>
                    <Badge variant="destructive">45%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cultural Sensitivity</span>
                    <Badge variant="outline">72%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accessibility</span>
                    <Badge variant="outline">90%</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium mb-2">Recommendations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Remove age-specific language</li>
                    <li>• Use gender-neutral pronouns</li>
                    <li>• Add inclusive benefits statement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Floating Panel */}
          {jobDescription.length > 0 && (
            <div className="fixed bottom-6 right-6 z-50">
              <Card className="w-80 border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Live Analysis</h4>
                    <Badge variant="outline">{biasedTerms.length} issues</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-primary">
                        {diversityScore}
                      </div>
                      <Progress value={diversityScore} className="mt-1" />
                    </div>
                    <Users className="h-8 w-8 text-muted-foreground" />
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
