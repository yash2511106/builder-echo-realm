import PlaceholderPage from "./PlaceholderPage";
import { PlayCircle } from "lucide-react";

export default function Demo() {
  return (
    <PlaceholderPage
      title="Try Demo"
      description="Experience our bias detection tool with sample job descriptions and see how it works before signing up."
      icon={<PlayCircle className="h-8 w-8 text-primary" />}
    />
  );
}
