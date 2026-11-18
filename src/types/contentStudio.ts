export type WorkflowStageId =
  | 'raw_idea'
  | 'research_structuring'
  | 'headline_generation'
  | 'slide_copy'
  | 'visual_direction'
  | 'carousel_design'
  | 'founder_review'
  | 'editable_export';

export interface WorkflowStage {
  id: WorkflowStageId;
  order: number;
  label: string;
  shortDesc: string;
  detailedProcess: string;
  recommendedTool: string;
  toolRole: string;
  sampleInput: string;
  sampleOutput: string;
  status: 'pending' | 'in_progress' | 'completed';
}

export interface CarouselSlide {
  slideNumber: number;
  type: 'hook' | 'problem' | 'agitation' | 'framework' | 'deep_dive' | 'case_study' | 'cta';
  badge: string;
  headline: string;
  body: string;
  bulletPoints?: string[];
  visualDirection: {
    layout: 'centered' | 'split_stat' | 'framework_grid' | 'quote_focus' | 'checklist' | 'high_impact_cta';
    focalElement: string;
    suggestedGraphic: string;
    accentColor: string;
  };
  keyTakeaway?: string;
}

export interface CarouselDeck {
  id: string;
  title: string;
  targetPlatform: 'Instagram' | 'LinkedIn' | 'Both';
  targetAudience: string;
  estimatedReadTime: string;
  caption: string;
  hashtags: string[];
  aspectRatio: '4:5' | '1:1';
  theme: 'emerald' | 'indigo' | 'amber' | 'slate';
  slides: CarouselSlide[];
}

export interface RecommendedToolItem {
  name: string;
  category: 'LLM Engine' | 'Live Research' | 'Visual Generation' | 'Canvas Rendering' | 'Automation Orchestration' | 'Asset Store';
  purpose: string;
  whyChosen: string;
  alternatives: string[];
  tier: 'Free / Freemium' | 'Paid / API';
}
