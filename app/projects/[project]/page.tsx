import { getProject } from "@/sanity/sanity-utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

export const revalidate = 10;

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

      <header className="">
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={300}
        />
        <div className="flex items-center justify-between mt-4">
          <h3>{project.name}</h3>
          <Link href={project.url} className="flex items-center">
            Go to
            <ArrowRight size={18} className="mx-2" /> {project.url}
          </Link>
        </div>
      </header>
      <div className={richTextStyles}>
        <PortableText value={project.content} />
      </div>
    </div>
  );
}

const richTextStyles = `
mt-2 line-clamp-3 text-sm/relaxed
`;
