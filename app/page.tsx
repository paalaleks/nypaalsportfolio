import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <header className="center-auto h-32 flex items-center">
        <h1>header</h1>
      </header>
      <section className="center-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <Image
              width={300}
              height={200}
              alt={project.name}
              src={project.image}
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 text-anti-flash_white-100">
              <time className="block text-xs "> 10th Oct 2022 </time>

              <h3 className="mt-0.5 text-lg ">
                How to position your furniture for positivity
              </h3>

              <div className="mt-2 line-clamp-3 text-sm/relaxed">
                <PortableText value={project.content} />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
