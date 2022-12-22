
import ReactMarkdown from "react-markdown";

export default function Areas() {
  const markdown = `## nouhack`
  return (
    <div className="prose mt-32">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
