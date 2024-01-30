import { getProject } from "@/sanity/sanity-utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: { project: string };
};

export default async function page({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="center-auto">
      <nav>
        <Link href="/" className="h-32 flex items-center">
          <ArrowLeft size={16} className="mr-2" /> back
        </Link>
      </nav>

      <header className="flex items-center ">
        <h3>{project.name}</h3>
        <Link href={project.url}>Go to project</Link>
      </header>
    </div>
  );
}
