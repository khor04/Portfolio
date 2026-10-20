import type { Project } from "@/lib/data";
import FeatureCards from "./FeatureCards";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project">
      <div className="project-head">
        <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{project.title}</h3>
          <p className="project-kind">{project.kind}</p>
        </div>
        <span className="project-date">{project.date}</span>
      </div>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-points">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <ul className="chips" aria-label="Tech stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <FeatureCards features={project.features} />
      {project.note && (
        <p className="project-note">
          <strong>Access:</strong> {project.note}
        </p>
      )}
      <div className="project-links">
        {project.live && (
          <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
            {project.liveLabel ?? "Live demo ↗"}
          </a>
        )}
        {project.repo && (
          <a className="btn btn-ghost" href={project.repo} target="_blank" rel="noopener noreferrer">
            Source code ↗
          </a>
        )}
      </div>
    </article>
  );
}
