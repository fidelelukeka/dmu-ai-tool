export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  icon: 'clock' | 'users' | 'book' | 'coffee' | 'activity';
}

export interface ModuleSummary {
  title: string;
  facilitator: string;
  keyPoints: string[];
  details: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ViewState {
  REPORT = 'REPORT',
  AI_ASSISTANT = 'AI_ASSISTANT'
}