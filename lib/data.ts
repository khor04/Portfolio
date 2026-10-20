export const profile = {
  name: "Khor Cheng Hooi",
  role: "Software Engineer (Internship)",
  tagline:
    "Final-year Computer Science (Information Systems) student at Universiti Malaya. I build full-stack web apps with React, FastAPI, and PostgreSQL, including AI features such as RAG and LLM-based classification.\nLooking for a software engineering internship from 25 Jan to 9 July 2027 (24 weeks).",
  location: "Petaling Jaya, Selangor",
  email: "kchooi0425@gmail.com",
  github: "https://github.com/khor04",
  linkedin: "https://www.linkedin.com/in/khor-cheng-hooi-855650368",
  resume: "/Khor-Cheng-Hooi-Resume-Backend.pdf",
  referral: "/Referral_Letter (KHOR CHENG HOOI).pdf",
};

export type Feature = {
  title: string;
  summary: string;
  detail: string;
  image?: string;
  role?: string;
};

export type Project = {
  title: string;
  kind: string;
  date: string;
  summary: string;
  highlights: string[];
  stack: string[];
  features: Feature[];
  live?: string;
  liveLabel?: string;
  note?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "QSolva",
    kind: "AI-Assisted IT Service Desk",
    date: "Aug – Sept 2026",
    summary:
      "A full-stack service desk that replaces fragmented IT support with ticketing, escalation, business-hours-aware SLA tracking, and AI that suggests fixes from past resolutions.",
    highlights: [
      "RAG pipeline on Gemini embeddings and pgvector cosine search that finds similar resolved tickets and writes step-by-step troubleshooting, using ticket text and attached screenshots.",
      "AI priority triage against a severity rubric, returning a confidence score and reason. Admins can override it and retry failed AI stages.",
      "SLA engine where urgent tickets run on a 24/7 clock and lower-priority ones pause outside business hours.",
      "Knowledge loop that groups similar tickets into recurring issues and drafts Help Center articles from staff-confirmed resolutions, published only after admin review.",
    ],
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Supabase (Auth, Storage)", "pgvector", "Gemini", "Docker"],
    features: [
      {
        title: "Service desk overview",
        summary: "See ticket volume, priority mix, recurring issues and AI performance at a glance.",
        detail: "The admin dashboard brings together ticket status totals, recent volume, priority distribution, emerging issues and AI suggestion metrics.",
        image: "/screens/qsolva/dashboard(admin).png",
        role: "Admin",
      },
      {
        title: "Ticket queue and team workload",
        summary: "Filter active tickets, monitor SLAs and see what is awaiting confirmation.",
        detail: "The admin queue combines workload by assignee with search and priority filters, active ticket status, overdue SLA deadlines and tickets waiting for the reporter to confirm a fix.",
        image: "/screens/qsolva/ticket-queue(admin).png",
        role: "Admin",
      },
      {
        title: "Resolved ticket history",
        summary: "Review closed tickets with priority, assignee and update details.",
        detail: "The history view keeps resolved work searchable in a paginated list, with each ticket's priority, status, assigned staff member and latest update.",
        image: "/screens/qsolva/ticket-queue2(admin).png",
        role: "Admin",
      },
      {
        title: "Ticket detail, SLA and AI assistance",
        summary: "Track a case from submission through resolution, with triage and suggested fixes alongside.",
        detail: "The ticket view shows its status timeline and response/resolution deadlines alongside the conversation, AI-assigned priority, suggested troubleshooting steps and supporting evidence.",
        image: "/screens/qsolva/ticket.(admin)png",
        role: "Admin",
      },
      {
        title: "Declare a known incident",
        summary: "Record an outage before matching tickets arrive and notify affected staff.",
        detail: "Admins can describe a known problem, choose its category, enter the message shown to staff and notify everyone, including people who have not filed a ticket.",
        image: "/screens/qsolva/active-incident-declaration(admin).png",
        role: "Admin",
      },
      {
        title: "Recurring issues and review status",
        summary: "See similar tickets grouped into issues, from draft to published guidance.",
        detail: "The admin list surfaces recurring ticket clusters and shows whether each issue is being watched, has an active incident, or has a draft or published Help Center article.",
        image: "/screens/qsolva/recurring-issues(admin).png",
        role: "Admin",
      },
      {
        title: "Admin notifications",
        summary: "Keep overdue responses, escalations.",
        detail: "The notification panel collects time-sensitive ticket events, including missed first-response deadlines, escalations that need another admin and tickets an AI step could not analyze.",
        image: "/screens/qsolva/notification(admin).png",
        role: "Admin",
      },
      {
        title: "Submit a support ticket",
        summary: "Describe the issue, choose a category and attach evidence in one form.",
        detail: "Staff can check the Help Center first, then submit a title and description, select a category, and paste or upload screenshots with the ticket.",
        image: "/screens/qsolva/newTicket(Staff).png",
        role: "Staff",
      },
      {
        title: "My tickets and history",
        summary: "Follow active requests and revisit previously resolved tickets.",
        detail: "The staff view separates current requests from ticket history and shows each ticket's priority, status and most recent update.",
        image: "/screens/qsolva/myticket(staff).png",
        role: "Staff",
      },
      {
        title: "Help Center solutions",
        summary: "Check a confirmed fix before opening a new support request.",
        detail: "The article presents a common question and its numbered resolution steps, including how often the guidance has resolved similar cases.",
        image: "/screens/qsolva/help-center(staff).png",
        role: "Staff",
      },
    ],
    live: "https://qsolva-five.vercel.app/",
    repo: "https://github.com/khor04/QSolva",
  },
  {
    title: "VeriGate",
    kind: "AI Governance & Shadow AI Prevention (Hack-Attack 3.0 Hackathon)",
    date: "Jul 2026",
    summary:
      "A governance platform with a Chrome extension that blocks unapproved AI tools and routes approved usage through a policy-enforcement gateway.",
    highlights: [
      "Real-time sensitive-data detection for PII, financial and credential data, combining rule-based patterns with Gemini intent classification to sanitize, hold for approval, or block.",
      "End-to-end workflows: audit logging, risk alerts, employee appeals and automated trust scoring.",
      "Gemini-powered Governance Copilot for natural-language compliance queries.",
    ],
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL (Supabase)", "Chrome Extension", "Gemini"],
    features: [
      {
        title: "Governance control plane",
        summary: "Monitor AI activity, compliance, risk alerts and trust scores across the organization.",
        detail: "The admin overview combines prompt volume, response time, compliance rate and policy enforcement with department-level usage, real-time risk alerts and AI trust scores.",
        image: "/screens/verigate/contro_plane_overview(admin).png",
        role: "Admin",
      },
      {
        title: "Manage AI tools and trust evaluations",
        summary: "Register tools, review approval status and inspect trust scores by risk category.",
        detail: "Admins can search the organization’s registered AI tools, review pending or approved status, and inspect security, privacy, compliance and availability scores with the full evaluation report.",
        image: "/screens/verigate/ai_tool_managment(admin) & ai trust score evaluation.png",
        role: "Admin",
      },
      {
        title: "Searchable audit logs",
        summary: "Review policy decisions, employee activity and governance events in one place.",
        detail: "Filter the audit trail by employee, department, AI model or event type, then inspect outcomes such as blocked prompts, forwarded prompts and risk alerts.",
        image: "/screens/verigate/audit_log(Admin).png",
        role: "Admin",
      },
      {
        title: "Review employee appeals",
        summary: "Investigate disputed blocks and decide whether to uphold or overturn them.",
        detail: "The appeal queue shows the triggering policy, risk level, employee justification and attached evidence so an admin can record resolution notes and make a decision.",
        image: "/screens/verigate/manage_appeal_queue(admin).png",
        role: "Admin",
      },
      {
        title: "Governance Copilot",
        summary: "Ask questions about policy, compliance and organization-wide AI usage.",
        detail: "The Copilot answers natural-language questions using governance data and explains existing policies, while leaving approval and policy changes to human administrators.",
        image: "/screens/verigate/governance_copilot.png",
        role: "Admin",
      },
      {
        title: "Request an AI tool",
        summary: "Submit a business case and data-handling details for an unapproved tool.",
        detail: "Employees can describe the tool’s intended use, select the types of data it would access and track requests alongside their approval status and reviewer feedback.",
        image: "/screens/verigate/ai_tool_request(employee).png",
        role: "Employee",
      },
      {
        title: "Use approved AI with prompt protection",
        summary: "Submit prompts through the organization’s governed AI workspace.",
        detail: "The workspace displays detected sensitive information, shows the original and sanitized prompt, and lets the employee confirm the protected version, edit it or reject it before sending.",
        image: "/screens/verigate/ai_workspace(employee).png",
        role: "Employee",
      },
      {
        title: "Appeal a governance decision",
        summary: "Explain why a blocked prompt or rejected tool request should be reconsidered.",
        detail: "Employees can review the original decision and its detected policy rule, provide a justification and submit it for administrative review.",
        image: "/screens/verigate/appeal_result & submit appeal(employee).png",
        role: "Employee",
      },
      {
        title: "Personal compliance overview",
        summary: "Track your policy flags, appeals and current standing.",
        detail: "The overview summarizes an employee’s own blocked prompts, rejected tool requests and risk alerts, with filters to review individual incidents and their appeal status.",
        image: "/screens/verigate/my_compliance_overview(employee).png",
        role: "Employee",
      },
      {
        title: "Review your policies and data rules",
        summary: "Understand which governance policies apply and what happens when data is detected.",
        detail: "Employees can read organization and department policies alongside sensitive-data rules, including the configured action for each type of detected information.",
        image: "/screens/verigate/my_policies(employee).png",
        role: "Employee",
      },
    ],
    live: "https://verigate-liard.vercel.app/",
    repo: "https://github.com/khor04/verigate",
  },
  {
    title: "EduPath",
    kind: "Transcript Parsing & Predictive Analytics (Final Year Project)",
    date: "In progress",
    summary:
      "An academic analytics platform that automates transcript processing, academic planning and career guidance, with a separate anonymised dashboard for university staff.",
    highlights: [
      "PyMuPDF pipeline extracting semester, course, grade, credit-hour and CGPA data, with human-in-the-loop verification.",
      "Predictive planning: required GPA, target CGPA projections, what-if simulation and a Grade Tracker, consistent across dashboard, planner and reports.",
      "AI career matching: Gemini course-to-skill classification and cosine similarity against O*NET occupation profiles, plus a transcript-grounded chatbot.",
      "Privacy-preserving benchmarking and expiring report-sharing links.",
    ],
    stack: ["Python", "Flask", "PostgreSQL (Supabase)", "PyMuPDF", "Gemini", "O*NET"],
    features: [
      {
        title: "Student academic dashboard",
        summary: "Track CGPA, completed credits, targets and semester-by-semester progress.",
        detail: "The dashboard brings together current academic totals and a GPA progression chart, with a direct link to download or share a report.",
        image: "/screens/edupath/student_dashboard.webp",
        role: "Student",
      },
      {
        title: "Upload a transcript",
        summary: "Start transcript processing by uploading a PDF from the student portal.",
        detail: "Students can upload a complete transcript or individual semester records. EduPath extracts the academic data and organizes it for review before saving.",
        image: "/screens/edupath/student_transcript-upload1.png",
        role: "Student",
      },
      {
        title: "Verify extracted transcript data",
        summary: "Review and correct course, credit and grade details before submission.",
        detail: "The verification table groups extracted results by semester and lets the student check or edit the records before finalizing the transcript.",
        image: "/screens/edupath/student_transcript-upload2.png",
        role: "Student",
      },
      {
        title: "Target CGPA simulator",
        summary: "Calculate the average GPA needed across your remaining credits.",
        detail: "Set a target CGPA and remaining credits to see the required average, whether the goal is achievable, and best, realistic and worst-case projections.",
        image: "/screens/edupath/student_analysis.webp",
        role: "Student",
      },
      {
        title: "AI semester GPA planner",
        summary: "Turn a CGPA target into semester-level GPA goals and tailored advice.",
        detail: "The planner splits the required performance across upcoming semesters and pairs the target table with an explanation based on the student's academic trend and workload.",
        image: "/screens/edupath/student_aiplanner.webp",
        role: "Student",
      },
      {
        title: "Per-course what-if simulator",
        summary: "Test hypothetical grades and see how they would change your CGPA.",
        detail: "Add or retake a course, enter its credits and try a grade to see the projected CGPA change, then save scenarios to compare options.",
        image: "/screens/edupath/student_whatif.webp",
        role: "Student",
      },
      {
        title: "Course grade tracker",
        summary: "See current course standing and the score needed on remaining assessments.",
        detail: "The tracker compares current and projected grades, breaks down assessment results and calculates the mark needed on the final exam for a selected target grade.",
        image: "/screens/edupath/student_tracker.webp",
        role: "Student",
      },
      {
        title: "Personal course statistics",
        summary: "Compare your course standing with class grade and retake patterns.",
        detail: "The course table shows enrollment, average grades, fail and retake rates, and whether the student has taken each course.",
        image: "/screens/edupath/student_coursestats.webp",
        role: "Student",
      },
      {
        title: "AI career matches",
        summary: "Explore occupations ranked by how closely they match your mapped skills.",
        detail: "EduPath compares a student's course-derived skill profile with O*NET occupation profiles and explains the strengths behind each recommended career match.",
        image: "/screens/edupath/student_career.webp",
        role: "Student",
      },
      {
        title: "Anonymous peer comparison",
        summary: "Compare a semester GPA with the cohort distribution and department average.",
        detail: "The chart places the student's result in a semester GPA distribution, while the department average and written insight provide context for the comparison.",
        image: "/screens/edupath/student_benchmark.webp",
        role: "Student",
      },
      {
        title: "Ask EduPath AI",
        summary: "Get started with suggested questions about study progress and career options.",
        detail: "The assistant offers example prompts about CGPA, semester changes, study strategies and career recommendations to help students explore their data.",
        image: "/screens/edupath/student_chatbot_welcome.webp",
        role: "Student",
      },
      {
        title: "University activity overview",
        summary: "Monitor enrollment, transcript processing and planning activity across the university.",
        detail: "The staff dashboard summarizes account verification, transcript uploads, career guidance and CGPA plans, with breakdowns by faculty, programme and benchmarking participation.",
        image: "/screens/edupath/admin_stats.webp",
        role: "University staff",
      },
      {
        title: "Course outcomes and retake rates",
        summary: "Identify courses where cohort performance may need attention.",
        detail: "Staff can compare enrollment, average grades, fail rates, retake rates and grade distributions across courses without relying on an individual student's view.",
        image: "/screens/edupath/admin_courses.webp",
        role: "University staff",
      },
      {
        title: "Cohort GPA trends",
        summary: "Review anonymized academic trends while protecting small groups.",
        detail: "The trends dashboard summarizes student progress and trend categories. Small counts are suppressed or withheld so hidden cohort values cannot be inferred from totals.",
        image: "/screens/edupath/admin_trends.webp",
        role: "University staff",
      },
    ],
    live: "https://edupath-w0nu.onrender.com",
    liveLabel: "View landing page ↗",
    note: "Registration is restricted to University of Malaya students (@siswa.um.edu.my), so the live link opens the public landing page, which walks through the features.",
    repo: "https://github.com/khor04/EduPath",
  },
  {
    title: "ChillPick",
    kind: "Movie & Book Recommendation System",
    date: "Mar – June 2025",
    summary:
      "A recommendation platform that personalizes movie and book suggestions from search history, interactions, ratings and reviews.",
    highlights: [
      "Solved the cold-start problem with an onboarding taste quiz and genre-based fallback recommendations.",
      "Integrated TMDB and Google Books APIs with server-side caching, watchlist, viewing history and review notifications.",
      "Session security: email verification, single active session per account, inactivity timeout and rate limiting.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "EJS", "TMDB API", "Google Books API"],
    features: [
      {
        title: "Choose your favourite genres",
        summary: "Set the movie and book genres that shape your recommendations.",
        detail: "The genre preference screen lets users update selected genres, with changes applied to future recommendations as soon as they save.",
        image: "/screens/chillpick/taste-quiz.png",
      },
      {
        title: "Personalized picks and recent activity",
        summary: "Browse movie and book recommendations alongside new releases and community activity.",
        detail: "The dashboard separates recommended movies and books, highlights recently added titles, and surfaces recent reviews and ratings from the community.",
        image: "/screens/chillpick/behaviour-based-picks.png",
      },
      {
        title: "Live search across movies and books",
        summary: "Find matching titles from a single search field.",
        detail: "Search results include matching movies and books with their cover, release year or author, so users can identify the right title before opening it.",
        image: "/screens/chillpick/discover-and-live-search.png",
      },
      {
        title: "Manage your watchlist",
        summary: "Sort saved movies and books and mark finished titles complete.",
        detail: "The watchlist separates all items, movies and books, and provides actions to open details, remove a title or mark it as completed.",
        image: "/screens/chillpick/watchlist-and-history.png",
      },
      {
        title: "Keep a viewing history",
        summary: "Revisit completed titles and see when each one was finished.",
        detail: "The history view keeps completed movies and books together, with title details and completion dates available at a glance.",
        image: "/screens/chillpick/watchlist-and-history2.png",
      },
      {
        title: "Activity notifications",
        summary: "See when someone likes or replies to one of your reviews.",
        detail: "The notification menu collects review likes and replies and lets users mark notifications as read.",
        image: "/screens/chillpick/reviews-and-notifications.png",
      },
      {
        title: "Automatic session timeout",
        summary: "Warn users before an inactive session is logged out.",
        detail: "After inactivity, ChillPick displays a countdown and lets the user stay signed in or log out immediately, helping protect an unattended account.",
        image: "/screens/chillpick/secure-sessions.png",
      },
    ],
    live: "https://chillpick.onrender.com/",
    repo: "https://github.com/khor04/ChillPick",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { group: "Frontend", items: ["React.js", "HTML", "CSS"] },
  { group: "Backend & Database", items: ["FastAPI", "Flask", "Node.js", "REST API", "PostgreSQL", "Supabase (Auth, Storage)", "MongoDB"] },
  { group: "AI/LLM", items: ["Gemini API", "RAG", "Embeddings", "pgvector"] },
  { group: "Tools", items: ["Git", "GitHub",  "Docker", "Postman", "Figma", "Render", "Vercel"] },
];

export const education = [
  {
    school: "University of Malaya",
    detail: "Bachelor of Computer Science (Information System)",
    period: "Oct 2023 – Present",
    grade: "CGPA 3.87 / 4.00",
  },
  {
    school: "Kolej Matrikulasi Perak",
    detail: "Pure Science",
    period: "Jul 2022 – Jun 2023",
    grade: "CGPA 4.00 / 4.00",
  },
  {
    school: "SMJK Krian",
    detail: "SPM",
    period: "Jan 2017 – Dec 2021",
    grade: "8A (6A+, 2A)",
  },
];

export const activities = [
  {
    title: "Exchange Student",
    org: "Chonnam National University, Gwangju, South Korea",
    period: "Sept – Dec 2025",
    points: [
      "Took part in international student activities and cross-cultural programs.",
      "Completed robotics coursework and built an autonomous self-driving car prototype.",
    ],
  },
  {
    title: "Program & Protocol Member",
    org: "UM Tech Night 2025",
    period: "Apr – Jun 2025",
    points: [
      "Prepared the programme flow and coordinated event logistics.",
      "Coordinated emcee cues and managed guest seating.",
    ],
  },
  {
    title: "Publicity Team Member",
    org: "Programming League National 2025, Universiti Malaya",
    period: "Mar – May 2025",
    points: [
      "Drafted and sent targeted emails to student groups, sponsors and tech communities.",
      "Planned social media campaigns: countdowns, prize sneak peeks and participant spotlights.",
    ],
  },
];

export const languages = [
  "Mandarin (Native)",
  "English (Conversational, MUET Band 4)",
  "Malay (Conversational)",
];
