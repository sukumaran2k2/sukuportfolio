import { Button } from "@/components/ui/button"; // If you're using shadcn/ui

export default function Resume() {
  return (
    <div className="flex justify-center mt-6">
      <a href="/Resume.pdf" download>
        <Button className="rounded-2xl shadow-lg px-6 py-3">
          Download Resume
        </Button>
      </a>
    </div>
  );
}
