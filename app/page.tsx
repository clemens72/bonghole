import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to <span className="text-primary">Next.js</span>
      </h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
        A beautiful starter template with shadcn/ui components and a modern navigation menu.
      </p>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">
          <GithubIcon className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
}