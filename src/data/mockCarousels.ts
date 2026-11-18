import { CarouselDeck, RecommendedToolItem, WorkflowStage } from '../types/contentStudio';

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 'raw_idea',
    order: 1,
    label: '1. Raw Idea Ingestion',
    shortDesc: 'Founder inputs unstructured thought, bullet points, voice note transcript, or product thesis.',
    detailedProcess: 'The founder drops a messy concept into the input interface. The ingestion parser cleans special characters, detects tone preferences, and identifies the core argument.',
    recommendedTool: 'Whisper API / Claude 3.5 Sonnet',
    toolRole: 'Voice transcription and initial semantic normalization',
    sampleInput: '"A lot of first time pet parents don\'t realize early signs of bloat or parvo and wait too long. We need an actionable carousel for Instagram on preventive red flags before it is an emergency."',
    sampleOutput: 'Normalized Thesis: Preventive Pet Healthcare & Early Emergency Detection for First-Time Dog Parents.',
    status: 'completed'
  },
  {
    id: 'research_structuring',
    order: 2,
    label: '2. AI Research & Fact Verification',
    shortDesc: 'Querying authoritative veterinary databases and synthesizing real statistics.',
    detailedProcess: 'Autonomous search tool executes targeted queries against clinical veterinary publications (AVMA, WSAVA) to retrieve factual incidence rates, common symptoms, and preventive windows.',
    recommendedTool: 'Perplexity API / Exa.ai',
    toolRole: 'Factual verification, citation discovery, and statistical grounding',
    sampleInput: 'Query: "Gastric Dilatation-Volvulus GDV canine early mortality statistics time window treatment"',
    sampleOutput: 'Retrieved Data: GDV mortality jumps from 10% to over 33% if surgical intervention is delayed beyond 6 hours. Early warning: non-productive retching, abdominal distension, pacing.',
    status: 'completed'
  },
  {
    id: 'headline_generation',
    order: 3,
    label: '3. High-Hook Headline Generation',
    shortDesc: 'Generating 10 psychological hook formulas optimized for retention and swipe rate.',
    detailedProcess: 'Applies proven social copywriting frameworks (Curiosity Gap, Contrarian Statement, Fear-of-Missing-Out, Framework Promise) to produce tested hook variations.',
    recommendedTool: 'Claude 3.5 Sonnet / GPT-4o',
    toolRole: 'Hook formulation, swipe-rate optimization, and title rating',
    sampleInput: 'Input: Thesis + Verified Vet Data. Format: 7 Hook variations under 10 words.',
    sampleOutput: 'Selected Winning Hook: "5 Silent Pet Symptoms Most Owners Ignore (Until It\'s a 2 AM Emergency)"',
    status: 'completed'
  },
  {
    id: 'slide_copy',
    order: 4,
    label: '4. Slide-by-Slide Copywriting',
    shortDesc: 'Structured story arc: Hook → Hidden Danger → Agitation → Actionable Rule → Checklist → CTA.',
    detailedProcess: 'Generates tight, punchy copy for each slide (under 45 words per slide to maximize readability on mobile screens). Strict JSON schema guarantees consistent field delivery.',
    recommendedTool: 'Anthropic Claude 3.5 Sonnet',
    toolRole: 'Long-form to micro-copy compression and narrative pacing',
    sampleInput: 'Prompt: Structure 7-slide narrative arc for Instagram 4:5 with 1 key takeaway per slide.',
    sampleOutput: 'JSON Array containing 7 slides with headline, body copy, and bullet points.',
    status: 'completed'
  },
  {
    id: 'visual_direction',
    order: 5,
    label: '5. Visual Direction & Art Cues',
    shortDesc: 'Specifying layout grids, focal elements, iconography, and color contrast ratios.',
    detailedProcess: 'Translates textual copy into aesthetic layout instructions: defines split stats, checklist hierarchies, warning badges, and accent color tokens for visual designers or automated renderers.',
    recommendedTool: 'Design System Engine / Recraft AI',
    toolRole: 'Visual hierarchy mapping, iconography tags, and layout token assignment',
    sampleInput: 'Slide 2: Statistical warning regarding 6-hour surgical window.',
    sampleOutput: 'Visual Cue: Split stat layout (78% in 48pt Bold Coral), warning badge top right, dark slate background.',
    status: 'completed'
  },
  {
    id: 'carousel_design',
    order: 6,
    label: '6. Programmatic Canvas Rendering',
    shortDesc: 'Compositing fonts, illustrations, badges, and layout into high-resolution cards.',
    detailedProcess: 'Transforms the structured JSON and visual tokens into pixel-perfect DOM cards using HTML/CSS canvas rendering or direct vector SVG generation.',
    recommendedTool: 'Satori (HTML to SVG) / Puppeteer / Canva API',
    toolRole: 'Headless programmatic rendering of multi-slide carousels',
    sampleInput: 'Slide JSON + Theme tokens (Emerald / Slate / Coral)',
    sampleOutput: 'Seven 1080x1350px (4:5) ready-to-publish image cards.',
    status: 'completed'
  },
  {
    id: 'founder_review',
    order: 7,
    label: '7. Founder Review & Human-in-the-Loop',
    shortDesc: 'Interactive preview modal allowing instant text editing, tone tweaks, and slide reordering.',
    detailedProcess: 'Founder reviews the generated deck in an interactive preview pane. Live inline edits update the render in real-time before export.',
    recommendedTool: 'Pawzz Studio Interactive Editor (React UI)',
    toolRole: 'Quality gate, brand tone alignment, and final approval',
    sampleInput: 'Interactive UI with live text inputs, theme switchers, and aspect ratio toggles.',
    sampleOutput: 'Founder approved deck state with timestamped approval signature.',
    status: 'completed'
  },
  {
    id: 'editable_export',
    order: 8,
    label: '8. Multi-Channel Export & Publishing',
    shortDesc: 'Download PNG deck, copy LinkedIn caption + hashtags, or trigger automated n8n webhook.',
    detailedProcess: 'Bundles the approved deck into multiple deliverables: ZIP of high-res images, JSON schema for API ingestion, formatted caption with markdown hashtags, and optional social scheduler push.',
    recommendedTool: 'n8n Webhook / Buffer API / Make.com',
    toolRole: 'Multi-platform dispatch, automated scheduling, and asset archiving',
    sampleInput: 'Trigger Export: Format = PNG ZIP + LinkedIn Caption + Airtable Archive.',
    sampleOutput: 'Delivered assets to creator dashboard + webhook dispatch confirmation.',
    status: 'completed'
  }
];

export const SAMPLE_CAROUSEL_DECK: CarouselDeck = {
  id: 'deck-pet-care-01',
  title: 'Preventive Pet Healthcare for First-Time Parents',
  targetPlatform: 'Both',
  targetAudience: 'First-time pet owners, animal rescue adopters, and veterinary care advocates',
  estimatedReadTime: '90 Seconds • 7 Slides',
  aspectRatio: '4:5',
  theme: 'emerald',
  caption: `🚨 80% of emergency veterinary visits could have been resolved earlier if these 5 subtle warning signs were caught within the first 12 hours.

As first-time pet parents, our dogs and cats can't verbally tell us when an ache becomes acute. That's why preventive awareness is the greatest gift of care you can give your companion.

👉 Swipe through this guide to learn:
1. The difference between harmless coughing vs respiratory distress
2. The 6-hour gastric emergency window
3. How to check gum capillary refill at home
4. What your 24/7 emergency pet kit must contain

Save this post so you have it ready when you need it most. 🐾

#PetCare #VeterinaryMedicine #DogHealth #CatCare #PawzzCare #PetParents #PetWellness #AnimalHealth`,
  hashtags: ['#PetCare', '#VeterinaryMedicine', '#DogHealth', '#CatCare', '#PawzzCare', '#PetParents'],
  slides: [
    {
      slideNumber: 1,
      type: 'hook',
      badge: 'Veterinary Emergency Guide',
      headline: '5 Silent Pet Symptoms Most Owners Ignore',
      body: '(Until it turns into a traumatic 2:00 AM hospital visit. Save this post before you need it.)',
      visualDirection: {
        layout: 'centered',
        focalElement: 'High-contrast bold headline with glowing emergency badge',
        suggestedGraphic: 'Minimalist veterinary stethoscope & paw silhouette in neon emerald',
        accentColor: '#10b981'
      },
      keyTakeaway: 'Immediate attention hook highlighting urgency and prevention.'
    },
    {
      slideNumber: 2,
      type: 'problem',
      badge: 'The Hidden Reality',
      headline: 'Animals Naturally Mask Pain to Survive',
      body: 'In nature, showing vulnerability makes an animal a target. By the time your dog or cat audibly whimpers, the clinical condition is frequently already in an advanced or critical stage.',
      bulletPoints: [
        '64% of emergency cases exhibit subtle behavioral shifts 24h prior',
        'Cats hide in dark corners when facing renal or urinary blockage',
        'Dogs pace restlessly and pant without physical exertion'
      ],
      visualDirection: {
        layout: 'split_stat',
        focalElement: '64% High-Impact Statistic Callout in coral highlight',
        suggestedGraphic: 'Split infographic showing normal vs masked pain postures',
        accentColor: '#f43f5e'
      },
      keyTakeaway: 'Never wait for whining or crying; monitor quiet behavioral shifts.'
    },
    {
      slideNumber: 3,
      type: 'agitation',
      badge: 'Red Flag #1 & #2',
      headline: 'The 2 Urgent Gastrointestinal Alarms',
      body: 'Not all stomach upsets are simple diet indiscretions. Watch out for these two critical distinctions:',
      bulletPoints: [
        '⚠️ Non-Productive Retching: Trying to vomit repeatedly with nothing coming up. This is the hallmark of GDV / Bloat—a life-threatening surgical emergency with a 6-hour window.',
        '⚠️ Sudden White or Pale Gums: Indicates internal hemorrhage, shock, or severe anemia. Normal gums must be healthy salmon pink.'
      ],
      visualDirection: {
        layout: 'checklist',
        focalElement: 'Two high-contrast warning cards with amber alert borders',
        suggestedGraphic: 'Gum capillary color comparison chart (Pink vs White vs Purple)',
        accentColor: '#f59e0b'
      },
      keyTakeaway: 'Retching without vomit + pale gums = immediate emergency hospital departure.'
    },
    {
      slideNumber: 4,
      type: 'framework',
      badge: 'The At-Home Triage Framework',
      headline: 'The 30-Second "P.A.W.S" Quick Check',
      body: 'Run this 4-point diagnostic scan whenever your pet seems lethargic or "off":',
      bulletPoints: [
        'P – Pulse & Breathing: Is chest breathing rapid, shallow, or labored?',
        'A – Abdominal Tightness: Is the tummy hard, drum-like, or sensitive to gentle touch?',
        'W – Water & Hydration: Gently pinch the neck scruff—does it snap back instantly?',
        'S – Sensorium & Eyes: Are pupils responsive? Is your pet disoriented or bumping walls?'
      ],
      visualDirection: {
        layout: 'framework_grid',
        focalElement: '4-quadrant interactive card grid with P-A-W-S acronym badges',
        suggestedGraphic: 'Clean geometric matrix with color-coded step badges',
        accentColor: '#0d9488'
      },
      keyTakeaway: 'Memorize P.A.W.S to give accurate vital signs to the emergency vet triage desk.'
    },
    {
      slideNumber: 5,
      type: 'deep_dive',
      badge: 'Preventive Protocol',
      headline: 'The 3 Golden Rules That Prevent 80% of Crises',
      body: 'Small daily habits create an impenetrable safety barrier for your companion:',
      bulletPoints: [
        '1. The 60-Minute Exercise Rule: Never let large-breed dogs run or jump 1 hour before or after meals to prevent gastric torsion.',
        '2. Strictly Zero Xylitol / Grapes: Artificial sweeteners found in peanut butter and protein bars cause instant canine liver failure.',
        '3. Digital Vaccine & Deworming Cadence: Set calendar reminders for annual DHPPi, Anti-Rabies, and quarterly broad-spectrum dewormers.'
      ],
      visualDirection: {
        layout: 'checklist',
        focalElement: 'Three numbered cards with emerald check icons',
        suggestedGraphic: 'Shield icon with medicine, nutrition, and timing pillars',
        accentColor: '#10b981'
      },
      keyTakeaway: 'Consistent preventive rules eliminate the majority of preventable emergency surgeries.'
    },
    {
      slideNumber: 6,
      type: 'case_study',
      badge: 'Real-Life Case Study',
      headline: 'How Bruno\'s Parents Beat the 6-Hour Window',
      body: '"Bruno (a 3-year-old German Shepherd) began pacing at 11:30 PM after dinner. His mom remembered the P.A.W.S check, noticed an unusually taut abdomen, and didn\'t wait until morning."',
      bulletPoints: [
        '11:45 PM: Checked Pawzz directory for 24/7 trauma hospitals near Indiranagar',
        '12:05 AM: Admitted to Cessna Lifeline with early-stage gastric torsion',
        '1:30 AM: Successful laparoscopic decompression before stomach tissue necrosis',
        'Result: Fully recovered within 48 hours without irreversible organ damage'
      ],
      visualDirection: {
        layout: 'quote_focus',
        focalElement: 'Timeline progression with success metrics in emerald badge',
        suggestedGraphic: 'Chronological timeline curve with time-stamped milestones',
        accentColor: '#6366f1'
      },
      keyTakeaway: 'Decisive action within the first 60 minutes turned a fatal crisis into a routine recovery.'
    },
    {
      slideNumber: 7,
      type: 'cta',
      badge: 'Take Action Now',
      headline: 'Be Prepared Before the Crisis Arrives',
      body: 'Save this post, and store your city\'s 24/7 verified pet emergency number in your speed dial right now.',
      bulletPoints: [
        '📌 Save this post to your Pet Care collection',
        '📤 Share with a fellow dog or cat parent who needs this',
        '🏥 Find vetted 24/7 veterinary hospitals & ambulances at Pawzz.care'
      ],
      visualDirection: {
        layout: 'high_impact_cta',
        focalElement: 'Save & Share action buttons with Pawzz brand mark',
        suggestedGraphic: 'Illustrated emergency contact card ready to screenshot',
        accentColor: '#10b981'
      },
      keyTakeaway: 'Follow Pawzz for evidence-backed animal healthcare and discovery.'
    }
  ]
};

export const ALTERNATIVE_PRESETS: { id: string; title: string; category: string; description: string; defaultDeck: CarouselDeck }[] = [
  {
    id: 'preset-1',
    title: 'Preventive Pet Healthcare for First-Time Parents',
    category: 'Animal Healthcare',
    description: 'A 7-slide educational carousel highlighting silent symptoms, the P.A.W.S framework, and emergency preparedness.',
    defaultDeck: SAMPLE_CAROUSEL_DECK
  },
  {
    id: 'preset-2',
    title: 'How Autonomous AI Triage is Solving Shelter Burnout',
    category: 'AI & Social Impact',
    description: 'Explores how animal shelters use autonomous AI routing to triage 500+ daily emergency rescue requests.',
    defaultDeck: {
      ...SAMPLE_CAROUSEL_DECK,
      id: 'deck-shelter-ai-02',
      title: 'How Autonomous AI Triage is Solving Shelter Burnout',
      theme: 'indigo',
      caption: 'Over 78% of animal rescue staff report severe compassion fatigue. Here is how autonomous AI workflows are filtering stray emergency reports in seconds.',
      slides: [
        {
          slideNumber: 1,
          type: 'hook',
          badge: 'AI & Animal Welfare',
          headline: 'Shelters Are Drowning in 500+ Daily SOS Calls',
          body: 'How autonomous AI triage is saving critical stray animals while preventing human volunteer burnout.',
          visualDirection: {
            layout: 'centered',
            focalElement: 'AI + Animal Rescue symbol with electric violet accents',
            suggestedGraphic: 'Circuit paw emblem',
            accentColor: '#6366f1'
          }
        },
        {
          slideNumber: 2,
          type: 'problem',
          badge: 'The Bottleneck',
          headline: 'Human Rescuers Spend 70% of Time Sorting Noise',
          body: 'Between duplicate reports of the same street dog, expired photos, and non-emergency calls, critical trauma cases often get delayed.',
          bulletPoints: [
            'Average manual triage response: 3.5 hours',
            '45% duplicate reports across WhatsApp groups',
            'Staff turnover rate in animal rescue exceeds 60% annually'
          ],
          visualDirection: {
            layout: 'split_stat',
            focalElement: '3.5 Hours delay metric callout',
            suggestedGraphic: 'Bottleneck funnel diagram',
            accentColor: '#f43f5e'
          }
        },
        {
          slideNumber: 3,
          type: 'framework',
          badge: 'The Solution Architecture',
          headline: 'The 3-Tier Autonomous Triage Pipeline',
          body: 'Using multimodal AI to intake photos, extract GPS coordinates, and rank urgency automatically:',
          bulletPoints: [
            '1. Vision Classifier: Analyzes wound severity (Fracture, Maggot, Minor abrasion)',
            '2. Geo-Deduplication: Groups reports within 200m into single incident tickets',
            '3. Ambulance Dispatch: Pushes highest-priority trauma directly to the nearest rescue van'
          ],
          visualDirection: {
            layout: 'framework_grid',
            focalElement: '3-stage automated pipeline diagram',
            suggestedGraphic: 'Flow chart connecting camera to ambulance',
            accentColor: '#6366f1'
          }
        },
        {
          slideNumber: 4,
          type: 'cta',
          badge: 'Build the Future',
          headline: 'Technology Must Protect the Voiceless',
          body: 'Learn how to build and deploy practical AI automation pipelines in Pawzz AI Academy.',
          bulletPoints: [
            '📌 Save this post if you believe in humane technology',
            '🎓 Explore our AI Education Cohort for builders & students'
          ],
          visualDirection: {
            layout: 'high_impact_cta',
            focalElement: 'Academy enrollment badge',
            suggestedGraphic: 'Pawzz Academy stamp',
            accentColor: '#6366f1'
          }
        }
      ]
    }
  }
];

export const RECOMMENDED_TOOLS: RecommendedToolItem[] = [
  {
    name: 'Anthropic Claude 3.5 Sonnet',
    category: 'LLM Engine',
    purpose: 'Core reasoning, multi-turn prompt structuring, and JSON schema copywriting generation.',
    whyChosen: 'Exceptional instruction following, nuanced tone calibration, and near-zero syntax errors when emitting structured JSON payloads.',
    alternatives: ['OpenAI GPT-4o', 'Google Gemini 1.5 Pro'],
    tier: 'Paid / API'
  },
  {
    name: 'Perplexity Pro / Exa.ai API',
    category: 'Live Research',
    purpose: 'Real-time factual extraction, veterinary journal citation retrieval, and statistical verification.',
    whyChosen: 'Direct semantic web search with linked citations, preventing hallucinated medical claims or incorrect statistics in public educational carousels.',
    alternatives: ['Tavily Search API', 'Brave Search API'],
    tier: 'Paid / API'
  },
  {
    name: 'Recraft.ai / Midjourney v6',
    category: 'Visual Generation',
    purpose: 'Generating consistent vector illustrations, branded iconography, and thematic background textures.',
    whyChosen: 'Recraft allows generating native vector SVGs in strict brand color palettes (Emerald/Slate) with high consistency across multiple slides.',
    alternatives: ['DALL·E 3', 'FLUX.1 Schnell'],
    tier: 'Free / Freemium'
  },
  {
    name: 'Satori + Puppeteer / Canva API',
    category: 'Canvas Rendering',
    purpose: 'Headless conversion of structured JSON slide objects into 1080x1350px image assets.',
    whyChosen: 'Satori turns standard HTML/React components into crisp SVG in milliseconds without a full headless browser overhead, perfect for real-time preview.',
    alternatives: ['HtmlCSSToImage API', 'Bannerbear', 'Figma REST API'],
    tier: 'Free / Freemium'
  },
  {
    name: 'n8n (Self-Hosted / Cloud)',
    category: 'Automation Orchestration',
    purpose: 'Event-driven workflow glue: listens to webhooks, coordinates LLM nodes, logs to database, and notifies Slack.',
    whyChosen: 'Open-source, self-hostable with zero licensing per-task cost, built-in JavaScript transformation nodes, and native LangChain agent integrations.',
    alternatives: ['Make.com', 'Zapier', 'Temporal.io'],
    tier: 'Free / Freemium'
  },
  {
    name: 'Airtable / Supabase',
    category: 'Asset Store',
    purpose: 'Content calendar database, carousel deck versioning, founder review approval queue, and published asset repository.',
    whyChosen: 'Relational schema with rich media attachments and instant webhook triggers upon status changes (e.g. from "Draft" to "Approved").',
    alternatives: ['PostgreSQL', 'Notion Database'],
    tier: 'Free / Freemium'
  }
];

export const AUTOMATION_WORKFLOW_EXPLANATION = {
  overview: `The automated carousel workflow connects the creator's raw idea to multi-channel social publishing without manual copying or graphic re-formatting. Using Make or n8n, this 8-step pipeline executes automatically or with a designated Human-in-the-Loop review gate.`,
  n8nNodeStructure: [
    {
      step: 'Node 1: Webhook Ingestion',
      service: 'n8n Webhook / Airtable Trigger',
      details: 'Receives the founder\'s prompt or voice transcript via HTTP POST. Validates authorization token and parses JSON body { topic, targetAudience, preferredTone, platform }.'
    },
    {
      step: 'Node 2: Perplexity Research Node',
      service: 'HTTP Request (Perplexity Sonar API)',
      details: 'Sends structured query: "Find 3 verified veterinary statistics and 1 case study regarding [topic] with citations". Returns validated facts.'
    },
    {
      step: 'Node 3: Claude Structured Copywriter',
      service: 'Anthropic Claude Node (Tools / JSON Mode)',
      details: 'Injects system prompt with 7-slide narrative framework. Returns strict JSON containing slide headlines, body, bullets, and visual direction tags.'
    },
    {
      step: 'Node 4: Satori / Headless Renderer',
      service: 'Custom Dockerized Microservice / Canva API',
      details: 'Iterates through the 7 slide objects, renders each against branded React slide templates, and uploads high-res 1080x1350px PNGs to Cloud Storage (AWS S3 or Supabase Storage).'
    },
    {
      step: 'Node 5: Slack Human-in-the-Loop Approval',
      service: 'Slack Interactive Blocks',
      details: 'Sends an interactive Slack message to the founder with slide thumbnails and two buttons: "Approve & Publish" or "Open in Pawzz Studio to Edit".'
    },
    {
      step: 'Node 6: Social Scheduling & Dispatch',
      service: 'Buffer API / LinkedIn API / Instagram Graph API',
      details: 'Upon "Approve" callback, packages the image array with formatted caption and hashtags, scheduling it for peak engagement hours.'
    }
  ],
  schemaContractSample: `{
  "deckId": "pawzz-deck-7821",
  "meta": {
    "title": "5 Silent Pet Symptoms Most Owners Ignore",
    "platform": "instagram_carousel",
    "aspectRatio": "4:5",
    "theme": "emerald"
  },
  "slides": [
    {
      "slideIndex": 1,
      "badge": "Veterinary Emergency Guide",
      "headline": "5 Silent Pet Symptoms Most Owners Ignore",
      "body": "(Until it turns into a traumatic 2:00 AM hospital visit.)",
      "layout": "centered",
      "accentColor": "#10b981"
    }
  ],
  "caption": "Full social caption with hashtags...",
  "approvedBy": "founder_khushal",
  "status": "ready_for_dispatch"
}`
};
