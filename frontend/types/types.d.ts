export interface User {
    first_name: string;
    last_name: string;
    username: string;
    pass_word: string;
    email: string;
    risk_tolerance: string;
    years_of_experience: number;
    image_url: string;
}

export type FinancialGoal = {
    goal: string;
};

export type Metadata = number | string | string[];

export interface Redirect {
    redirect_url: string;
}

export type Leader = {
  leader_user: User;
  follower_count: number;
}

export type Trending = {
  trending_user_reference: User;
  day_gain_pct: number;
}

export interface TokenStatus {
    status: string;
}

export type ClerkErrorResponse = {
  status: number;
  clerkError: string;
  errors: ClerkError[];
};

export type ClerkError = {
  code: string;
  message: string;
  longMessage: string;
};

interface UserPortfolio {
  user_id: string;
  day_gain: number;
  day_gain_pct: number;
  total_gain: number;
  total_gain_pct: number;
  positions: Position[];
}

interface Position {
  portfolio_id: number;
  position_id: number;
  ticker: string;
  quantity: number;
  cost: number;
  day_gain: number;
  day_gain_pct: number;
  total_gain: number;
  total_gain_pct: number;
  type: TradeType;
}
enum TradeType {
  LONG = 'LONG',
  SHORT = 'SHORT'
}
