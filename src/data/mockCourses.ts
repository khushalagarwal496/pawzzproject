import { CourseModuleItem, LearningOutcome, Testimonial } from '../types/course';

export const COURSE_MODULES: CourseModuleItem[] = [
  {
    week: 1,
    title: 'Foundations of Applied LLMs & Cognitive Architectures',
    subtitle: 'Moving beyond naive chat prompts to systematic prompt engineering and reasoning patterns',
    duration: '2 Weeks • 4 Live Sessions',
    topics: [
      'Tokenization, context window budget optimization, and KV-cache dynamics',
      'System prompts, instruction hierarchies, and few-shot calibration',
      'Structured outputs via JSON schema enforcement and function calling',
      'Chain-of-Thought (CoT), Tree of Thoughts, and Self-Consistency prompting'
    ],
    handsOnProject: 'Build a production-grade multi-step Veterinary Triage Classifier that returns validated JSON with urgency scoring and triage flags.',
    toolsUsed: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'LangSmith', 'TypeScript']
  },
  {
    week: 2,
    title: 'Autonomous Workflow Engineering with n8n, Make & Webhooks',
    subtitle: 'Connecting LLMs to real-world APIs, databases, Slack, and email pipelines without brittle glue code',
    duration: '1.5 Weeks • 3 Live Sessions',
    topics: [
      'Event-driven architectures, webhooks, and retry policies with dead-letter queues',
      'Self-hosted n8n vs Make.com: architectural trade-offs and latency profiling',
      'Branching decision trees, parallel fan-out/fan-in, and rate-limit backoffs',
      'State persistence across multi-day automated workflows'
    ],
    handsOnProject: 'Deploy an automated Lead Enrichment & Personalized Video Script Dispatcher triggered on Google Form submissions.',
    toolsUsed: ['n8n', 'Make.com', 'Airtable', 'Supabase', 'Postman']
  },
  {
    week: 3,
    title: 'Multimodal Generative Engines: Carousels, Vector Graphics & Video',
    subtitle: 'Automating visual asset production, layout generation, and dynamic social media publishing',
    duration: '1.5 Weeks • 3 Live Sessions',
    topics: [
      'Text-to-Design pipelines: SVG generation, HTML-to-Image (Satori/Puppeteer), Canva API',
      'Style transfer, seed consistency, and brand identity enforcement across generative graphics',
      'Dynamic typography layout engines and multi-slide narrative story arcs',
      'Automated batch generation for LinkedIn, Instagram, and Twitter'
    ],
    handsOnProject: 'Build the 8-stage "Idea-to-Carousel" autonomous pipeline with live visual inspection and one-click multi-format export.',
    toolsUsed: ['Satori', 'Puppeteer', 'Canva Connect API', 'Midjourney API', 'Recraft']
  },
  {
    week: 4,
    title: 'Production RAG: Embeddings, Vector Stores & Knowledge Retrieval',
    subtitle: 'Feeding private documentation, clinical databases, and internal wikis into LLMs with high factual precision',
    duration: '1.5 Weeks • 3 Live Sessions',
    topics: [
      'Chunking strategies: recursive character, semantic chunking, and parent-document retrieval',
      'Embedding models comparison, vector similarity metrics (Cosine, Dot, Euclidean)',
      'Hybrid search (Dense vector + Sparse BM25) and reranking models (Cohere Rerank)',
      'Hallucination prevention: Citation tracing and grounded verification chains'
    ],
    handsOnProject: 'Create a factual Pet Healthcare AI Assistant grounded on 500+ veterinary textbook pages with source attribution.',
    toolsUsed: ['Pinecone', 'ChromaDB', 'Cohere Rerank', 'LlamaIndex', 'FastAPI']
  },
  {
    week: 5,
    title: 'AI Product Management, Agent UX & Human-in-the-Loop',
    subtitle: 'Designing interfaces where humans and autonomous agents collaborate with transparency and confidence',
    duration: '1 Week • 2 Live Sessions',
    topics: [
      'Affordance design for non-deterministic AI outputs and progressive disclosure',
      'Approval gates: Designing high-velocity Human-in-the-Loop review queues',
      'Product metrics: Task completion rate, latency budget, hallucination rate, and cost-per-output',
      'Responsible AI, guardrails (NeMo, Llama Guard), and prompt injection defense'
    ],
    handsOnProject: 'Design and prototype a high-converting AI SaaS onboarding flow with interactive preview and human approval controls.',
    toolsUsed: ['Figma', 'React', 'Tailwind CSS', 'Vercel AI SDK']
  },
  {
    week: 6,
    title: 'Production Capstone: Shipping an Autonomous AI System',
    subtitle: 'From prototype to live deployment with monitoring, logging, and evaluation pipelines',
    duration: '1 Week • Capstone Defense',
    topics: [
      'CI/CD for AI applications and prompt regression testing',
      'Observability: OpenTelemetry, Langfuse, and automated eval benchmarks',
      'Cost optimization: Semantic caching and model cascading (routing simple tasks to flash models)',
      'Live capstone presentation to tech leads and hiring partners'
    ],
    handsOnProject: 'Ship an end-to-end full-stack autonomous application with production deployment, public URL, and complete documentation.',
    toolsUsed: ['Vercel', 'Docker', 'Langfuse', 'GitHub Actions']
  }
];

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  {
    id: 'out-1',
    iconName: 'Workflow',
    title: 'Autonomous System Architecture',
    description: 'Design multi-agent workflows that run independently, handle API errors, and self-correct without human babysitting.',
    metric: 'Ship 4 production systems'
  },
  {
    id: 'out-2',
    iconName: 'CodeXml',
    title: 'Production Function Calling & JSON Schema',
    description: 'Master strict schema guarantees, tool calling, and deterministic outputs suitable for enterprise software.',
    metric: '100% type-safe pipelines'
  },
  {
    id: 'out-3',
    iconName: 'Sparkles',
    title: 'Multimodal Creative Automation',
    description: 'Build automated graphic generation, slide design engines, and dynamic social publishing systems.',
    metric: '10x content throughput'
  },
  {
    id: 'out-4',
    iconName: 'Database',
    title: 'Grounded Enterprise RAG & Hybrid Search',
    description: 'Eliminate hallucinations by combining dense vector search, BM25 keyword matching, and neural rerankers.',
    metric: '<1% hallucination rate'
  },
  {
    id: 'out-5',
    iconName: 'Cpu',
    title: 'Modern AI Stack Fluency',
    description: 'Gain hands-on fluency across n8n, Claude 3.5, Langfuse, Pinecone, Satori, and modern React AI interfaces.',
    metric: '12+ industry tools mastered'
  },
  {
    id: 'out-6',
    iconName: 'Award',
    title: 'Verified Portfolio & Industry Capstone',
    description: 'Graduate with live URLs and GitHub repositories that stand out during product, design, and software interviews.',
    metric: 'Public verified portfolio'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya Deshmukh',
    role: 'Associate Product Manager',
    company: 'Fintech Series B',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Before this cohort, I was only copy-pasting prompts into ChatGPT. In Week 2, I built an n8n workflow that automated our competitive intelligence briefings. My team lead was stunned.',
    rating: 5,
    highlight: 'Automated 15 hours of weekly manual work'
  },
  {
    id: 't-2',
    name: 'Kabir Vohra',
    role: 'Final Year CS Student',
    company: 'Joined AI Healthcare Startup',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'The capstone project was the centerpiece of my portfolio. In my technical interviews, instead of answering leetcode questions, we spent 45 minutes walking through my RAG and agent architecture.',
    rating: 5,
    highlight: 'Landed 18 LPA AI Engineer role'
  },
  {
    id: 't-3',
    name: 'Tanmay Saxena',
    role: 'Growth Lead & Solo Founder',
    company: 'SaaS Creator Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'The visual automation module alone paid for the course 10x over. I now produce and schedule 14 high-quality carousels weekly across LinkedIn and Instagram using the exact pipeline taught.',
    rating: 5,
    highlight: 'Grew organic reach by 430%'
  }
];

export const COHORTS = [
  {
    id: 'cohort-apr',
    name: 'Spring Cohort 04 (Fast-Track Weekend)',
    startDate: 'April 12, 2026',
    schedule: 'Saturdays & Sundays • 10:00 AM - 1:00 PM IST',
    seatsLeft: 7,
    status: 'Filling Fast',
    tuition: '₹18,500'
  },
  {
    id: 'cohort-may',
    name: 'Summer Cohort 05 (Weekday Evening)',
    startDate: 'May 18, 2026',
    schedule: 'Tuesdays & Thursdays • 7:30 PM - 9:30 PM IST',
    seatsLeft: 18,
    status: 'Open for Applications',
    tuition: '₹18,500'
  }
];
