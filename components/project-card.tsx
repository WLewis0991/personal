import Image from "next/image";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  const { name, description, tech, href, image } = project;

  return (
    <article className="project-card reveal">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 920px) 100vw, 50vw"
          loading="lazy"
        />
      ) : (
        <div
          className="ph-img wide"
          role="img"
          aria-label={`${name} screenshot placeholder`}
        >
          [ {name} · screenshot ]
        </div>
      )}
      <div className="card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <span className="meta">{tech}</span>
          <a href={href} target="_blank" rel="noopener noreferrer">
            View repo →
          </a>
        </div>
      </div>
    </article>
  );
}
