import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <header className="max-w-3xl mx-auto text-center py-12">
        <Avatar className="mx-auto w-32 h-32">
          <AvatarImage src="profile.jpg" />
          <AvatarFallback>CY</AvatarFallback>
        </Avatar>

        <h1 className="text-4xl font-bold mt-4">Christian Yancha</h1>
        <p className="text-lg text-muted-foreground">Software Developer</p>
      </header>

      <section id="about" className="max-w-3xl mx-auto py-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <Separator className="my-4" />
        <p className="text-muted-foreground">I build small web apps and enjoy learning new tools.</p>
      </section>

      <section id="skills" className="max-w-3xl mx-auto py-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <Separator className="my-4" />
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>Node.js</Badge>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Personal Website"
            description="A simple portfolio built with React, TypeScript and Tailwind CSS."
            technologies={["React", "TypeScript", "Tailwind"]}
          />
        </div>
      </section>
    </main>
  );
}