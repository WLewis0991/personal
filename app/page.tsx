import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects, site, techStack } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <section className="section hero">
          <div className="container hero-split">
            <div className="reveal">
              <p className="eyebrow">Full-stack engineer · Los Angeles</p>
              <h1>Ex-chef turned engineer. Same standards, different craft.</h1>
              <p className="lead">
                I build full-stack apps with TypeScript, React, and Node. Open to
                frontend and full-stack roles.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#work">
                  See my work
                </a>
                <a
                  className="btn btn-secondary"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub profile
                </a>
              </div>
            </div>
            <div className="reveal hero-avatar">
              <Image
                className="avatar"
                src={site.avatar.src}
                alt={site.avatar.alt}
                width={site.avatar.width}
                height={site.avatar.height}
                sizes="(max-width: 333px) 260px, (max-width: 448px) 78vw, 350px"
                preload
              />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="grid-2-1 reveal">
              <div>
                <p className="eyebrow">About</p>
                <h2>I care more about clarity than cleverness.</h2>
                <p className="lead about-lead">
                  Before I wrote code, I cooked in Michelin-star kitchens. That
                  experience shaped how I build software: clean execution,
                  repeatable systems, and zero tolerance for sloppy details.
                </p>
                <p className="lead about-lead">
                  I&apos;m focused on full-stack JavaScript and TypeScript, with
                  React and Next.js on the frontend and Node on the backend. I&apos;m
                  also deepening my Python skills to round out the stack.
                </p>
              </div>
              <div className="stack">
                <p className="eyebrow">Tech stack</p>
                <div className="stack-row">
                  {techStack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="meta">
                  {site.location} · Open to roles
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="reveal section-head">
              <p className="eyebrow">Selected work</p>
              <h2>Projects I&apos;ve built or contributed to.</h2>
            </div>
            <div className="grid-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container reveal contact">
            <p className="eyebrow">Get in touch</p>
            <h2>Let&apos;s build something.</h2>
            <p className="lead contact-lead">
              I&apos;m open to full-stack and frontend engineering roles. If
              you&apos;re looking for someone who shows up prepared and ships
              clean code, reach out.
            </p>
            <div className="contact-grid">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Email me directly
              </a>
              <a
                className="btn btn-secondary"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
