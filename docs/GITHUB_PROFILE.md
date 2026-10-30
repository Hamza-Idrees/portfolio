# Hamza Idrees

**Backend Engineer · Node.js, NestJS, Python & AWS**

I build backend systems for multi-tenant SaaS, real-time applications, and AI automation. My work covers API design, data modeling, background processing, and cloud deployment—with a focus on clear business rules, reliable workflows, and tested interfaces.

[Portfolio](https://hamza-idrees.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/hamzaidrees2002) · [Email](mailto:hamzaidrees083@gmail.com)

## Experience

**Backend Engineer — Global Software Consulting**  
December 2024 – Present · Lahore, Pakistan

- Develop multi-tenant REST APIs using PostgreSQL, MongoDB, and Redis, with caching for frequently accessed data.
- Build asynchronous workflows with BullMQ and real-time interfaces with Socket.IO and Firebase Cloud Messaging.
- Containerize and deploy backends on AWS with automated delivery pipelines and database migrations.
- Integrate AI into search, content generation, appointment management, and booking operations.
- Implement authentication, role-based access, validation, rate limiting, and webhook verification.

## Selected engineering results

| Area | Result |
| --- | --- |
| Review ingestion | Processed **40,000+ reviews** within a single AWS Lambda execution’s 15-minute limit using batching and pagination. |
| AI content generation | Reduced generation time by **90%+**, processing **100+ posts in under 30 seconds** with batched OpenAI and Claude requests. |
| Clinical retrieval | Achieved **sub-100ms vector search** and **under-2-second first-token responses** in Lumen. |
| Search relevance | Reduced irrelevant retrievals by **60%+** using a query parser with more than 20 metadata filters. |
| Testing | Maintained **90%+ automated test coverage** with Jest, Mocha, and Supertest. |

## Selected professional projects

These projects describe my engineering contributions at Global Software Consulting. Product links provide context; the implementations are not presented as public repositories.

### [Obenan](https://www.obenan.ai/) — Multi-tenant SaaS

A platform for business-location management and online reputation. During my work, it supported 400+ businesses across 1,000+ locations in 35+ countries.

I developed APIs and workflows for review ingestion, reporting, location synchronization, and AI-assisted content. The architecture combines PostgreSQL and MongoDB, 100+ Sequelize models, Redis caching, and more than 10 BullMQ queues.

**Stack:** Node.js, Express, PostgreSQL, Sequelize, MongoDB, Redis, BullMQ, AWS.

### [Reddr](https://www.reddr.app/) — Personal safety

A personal-safety application centered on SOS alerts and location information for trusted contacts and groups.

I built authenticated REST and WebSocket interfaces, location-aware backend workflows, and push-notification processing. I also containerized and deployed the NestJS backend on AWS with RDS, ECR, CodePipeline, CodeBuild, SSM, and Prisma migrations. These contributions describe the backend work; public feature availability is documented on the product website.

**Stack:** NestJS, Prisma, PostgreSQL/PostGIS, Redis, BullMQ, Socket.IO, Firebase FCM, Docker, AWS.

### The Nanny Line — Booking automation

An AI-powered workflow that coordinates nanny requests across WhatsApp and email, from request capture to confirmed scheduling.

I implemented conversation-level booking state, deduplication, deterministic pricing, location and language matching, availability broadcasts, selection, 24-hour reconfirmation, and Google Calendar scheduling.

**Stack:** n8n, JavaScript, OpenAI, Anthropic Claude, WhatsApp Cloud API, Chatwoot, Google Sheets and Calendar APIs.

### Rosa — AI receptionist for Solar Chiropractic

A practice-automation system connected to PracticeHub, WhatsApp, and email for appointment booking, rescheduling, cancellation, and operational follow-ups.

I implemented deterministic booking rules, a Pinecone retrieval layer, contact-level privacy controls, confirmations, reminders, recalls, retry handling, and escalation to staff.

**Stack:** n8n, JavaScript, PracticeHub API, Pinecone, OpenAI, Anthropic Claude, WhatsApp Cloud API, Chatwoot.

### Lumen — Clinical search assistant

A natural-language search and question-answering system that grounds responses in retrieved patient records.

I built the pipeline from intent extraction and embeddings to filtered Qdrant retrieval and SSE streaming. It includes similarity thresholds, low-confidence fallbacks, and bulk ingestion of 5,000 records in under 60 seconds.

**Stack:** Python, FastAPI, Qdrant, OpenAI, SSE, Next.js.

## Technical toolkit

| Focus | Technologies |
| --- | --- |
| Languages | JavaScript, TypeScript, Python |
| Backend | Node.js, Express, NestJS, FastAPI, REST APIs, WebSockets, BullMQ |
| Data | PostgreSQL, Prisma, Sequelize, PostGIS, MongoDB, Mongoose, Redis |
| AI & automation | OpenAI, Anthropic Claude, Qdrant, Pinecone, n8n, RAG, SSE |
| Cloud & delivery | AWS EC2, RDS, ECR, S3, Lambda, SQS, CloudWatch, Docker, CodePipeline, CodeBuild, Git, Linux |
| Security & testing | JWT, OAuth 2.0, RBAC, rate limiting, webhook verification, Jest, Mocha, Supertest |
| Integrations | Firebase FCM, WhatsApp Cloud API, Chatwoot, Google APIs, SendGrid, DeepL, Datashake |

## Education

**BS Software Engineering — FAST-NUCES**  
National University of Computer and Emerging Sciences

## Contact

For backend engineering opportunities, contact me at **[hamzaidrees083@gmail.com](mailto:hamzaidrees083@gmail.com)** or connect on **[LinkedIn](https://www.linkedin.com/in/hamzaidrees2002)**.
