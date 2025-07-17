import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowLeft, MessageCircle } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BiasDetector</h1>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-12">
              {icon && (
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto mb-6">
                  {icon}
                </div>
              )}
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  This page is coming soon! Continue the conversation to build
                  out this feature.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                  <Button
                    onClick={() =>
                      window.alert(
                        "Continue the conversation to build this feature!",
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Request This Feature
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
