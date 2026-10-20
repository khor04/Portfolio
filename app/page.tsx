import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import {
  activities,
  education,
  languages,
  profile,
  projects,
  skills,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1>
              Hi, I&apos;m <span>{profile.name}</span>.
            </h1>
            <p className="lead">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href={profile.resume} download>
                Download resume
              </a>
              <a className="btn btn-ghost" href={profile.referral} download>
                Download Referral Letter
              </a>
            </div>
          </div>
          <aside className="glance" aria-label="At a glance">
            <div>
              <strong>3.87</strong>
              <span>CGPA at University of Malaya</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Full-stack projects built</span>
            </div>
          </aside>
        </section>

        <section id="projects" className="section container">
          <h2>My Projects</h2>
          <p className="section-sub">
            I build full-stack, AI-assisted products, from transcript parsing to RAG-powered service desks. Four full-stack builds, most of them with an AI layer. Free-tier hosts such as Render
            may take a few minutes to wake up on the first visit.
          </p>
          <div className="project-list">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>

        <section id="skills" className="section band">
          <div className="container">
            <h2>Technical skills</h2>
            <div className="skill-grid">
              {skills.map((g) => (
                <div key={g.group} className="skill-card">
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="background" className="section container">
          <h2>Background</h2>
          <div className="two-col">
            <div>
              <h3 className="col-title">Education</h3>
              <ul className="timeline">
                {education.map((e) => (
                  <li key={e.school}>
                    <div className="tl-top">
                      <strong>{e.school}</strong>
                      <span>{e.period}</span>
                    </div>
                    <p>{e.detail}</p>
                    <p className="muted">{e.grade}</p>
                  </li>
                ))}
              </ul>
              <h3 className="col-title">Languages</h3>
              <ul className="plain">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="col-title">Activities</h3>
              <ul className="timeline">
                {activities.map((a) => (
                  <li key={a.title}>
                    <div className="tl-top">
                      <strong>{a.title}</strong>
                      <span>{a.period}</span>
                    </div>
                    <p className="muted">{a.org}</p>
                    <ul className="plain bullets">
                      {a.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact">
          <h2>Let&apos;s Connect</h2>
          <p className="section-sub">
            I&apos;m open to internships software engineer roles. Feel free to reach out via email or LinkedIn.
          </p>
          <div className="hero-actions">
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </div>
      </footer>
    </>
  );
}
