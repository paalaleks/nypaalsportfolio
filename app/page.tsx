import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

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

            <div className="bg-white p-4 sm:p-6">
              <time className="block text-xs text-gray-500">
                {" "}
                10th Oct 2022{" "}
              </time>

              <h3 className="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

// <Link href={`/projects/${project.slug}`} key={project._id}>
// {project.image && (
//   <Image
//     src={project.image}
//     alt={project.name}
//     width={300}
//     height={200}
//     className="w-full h-48 object-cover"
//   />
// )}
// <h4 className="leading-6">{project.name}</h4>
// </Link>
