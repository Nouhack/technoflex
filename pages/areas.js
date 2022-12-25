import ReactMarkdown from "react-markdown";
import { attributes, react as HomeContent } from "../content/areas.md";

export default function Areas() {
  return (
    <div className="bg-red-500 prose mt-32">
      <div className="bg-yellow-500 w-screen">
        <HomeContent />
      </div>
    </div>
  );
}
