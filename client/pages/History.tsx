import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Shield,
  History as HistoryIcon,
  ArrowLeft,
  Calendar,
  BarChart3,
  Download,
  Eye,
  MoreVertical,
  Search,
  Filter,
  TrendingUp,
  FileText,
  Clock,
  Users,
  Target,
  Trash2,
  Copy,
  Edit,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function History() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  // Mock history data
  const historyItems = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      dateAnalyzed: "2024-01-15",
      originalScore: 45,
      improvedScore: 92,
      biasCount: 8,
      status: "improved",
      category: "Engineering",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Digital Agency",
      dateAnalyzed: "2024-01-14",
      originalScore: 78,
      improvedScore: 95,
      biasCount: 3,
      status: "excellent",
      category: "Marketing",
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Design Studio",
      dateAnalyzed: "2024-01-12",
      originalScore: 32,
      improvedScore: 88,
      biasCount: 12,
      status: "needs-work",
      category: "Design",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Co.",
      dateAnalyzed: "2024-01-10",
      originalScore: 65,
      improvedScore: 89,
      biasCount: 5,
      status: "improved",
      category: "Data Science",
    },
    {
      id: 5,
      title: "HR Business Partner",
      company: "HR Solutions",
      dateAnalyzed: "2024-01-08",
      originalScore: 85,
      improvedScore: 98,
      biasCount: 2,
      status: "excellent",
      category: "Human Resources",
    },
    {
      id: 6,
      title: "Sales Representative",
      company: "Sales Force Inc.",
      dateAnalyzed: "2024-01-05",
      originalScore: 28,
      improvedScore: 82,
      biasCount: 15,
      status: "needs-work",
      category: "Sales",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-success/10 text-success border-success/20";
      case "improved":
        return "bg-primary/10 text-primary border-primary/20";
      case "needs-work":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "excellent":
        return "Excellent";
      case "improved":
        return "Improved";
      case "needs-work":
        return "Needs Work";
      default:
        return "Unknown";
    }
  };

  const filteredItems = historyItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterBy === "all" ||
      (filterBy === "excellent" && item.status === "excellent") ||
      (filterBy === "improved" && item.status === "improved") ||
      (filterBy === "needs-work" && item.status === "needs-work");

    return matchesSearch && matchesFilter;
  });

  const averageImprovement =
    historyItems.reduce(
      (acc, item) => acc + (item.improvedScore - item.originalScore),
      0,
    ) / historyItems.length;

  const totalAnalyses = historyItems.length;
  const totalBiasesFixed = historyItems.reduce(
    (acc, item) => acc + item.biasCount,
    0,
  );

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center">
            <HistoryIcon className="h-8 w-8 mr-3" />
            Analysis History
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your progress and view previous bias analyses
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Analyses
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {totalAnalyses}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Avg. Improvement
                  </p>
                  <p className="text-3xl font-bold text-success">
                    +{averageImprovement.toFixed(0)}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Biases Fixed</p>
                  <p className="text-3xl font-bold text-warning">
                    {totalBiasesFixed}
                  </p>
                </div>
                <Target className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Excellent Scores
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {
                      historyItems.filter((item) => item.status === "excellent")
                        .length
                    }
                  </p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by job title, company, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter: {filterBy === "all" ? "All" : filterBy}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterBy("all")}>
                All Analyses
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterBy("excellent")}>
                Excellent
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterBy("improved")}>
                Improved
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterBy("needs-work")}>
                Needs Work
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* History Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="hover:border-primary/20 transition-all"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.company} • {item.category}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={getStatusColor(item.status)}
                      >
                        {getStatusText(item.status)}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Original Score
                        </p>
                        <p className="text-lg font-semibold">
                          {item.originalScore}
                        </p>
                        <Progress
                          value={item.originalScore}
                          className="h-1 mt-1"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Improved Score
                        </p>
                        <p className="text-lg font-semibold text-success">
                          {item.improvedScore}
                        </p>
                        <Progress
                          value={item.improvedScore}
                          className="h-1 mt-1"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Biases Found
                        </p>
                        <p className="text-lg font-semibold text-warning">
                          {item.biasCount}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Date Analyzed
                        </p>
                        <p className="text-sm font-medium flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(item.dateAnalyzed).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="h-3 w-3 mr-2" />
                          Compare
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-2" />
                          Download
                        </Button>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Re-analyze
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <HistoryIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {searchQuery || filterBy !== "all"
                  ? "No matching analyses found"
                  : "No analyses yet"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || filterBy !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Start analyzing job descriptions to see your history here"}
              </p>
              <Link to="/dashboard">
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Analyze Job Description
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Progress Chart Placeholder */}
        {filteredItems.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Progress Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Progress chart would appear here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Showing improvement trends over time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
