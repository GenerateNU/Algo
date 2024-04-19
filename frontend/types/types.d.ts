export interface User {
  id: string,
  first_name: string;
  last_name: string;
  username: string;
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

export interface ProfileRouteParams {
  user: User;
}

export interface CopyRouteParams {
  user: User;
}

export interface FollowerRouteParams {
  users: User[],
  label: string
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

export type Post = {
  User: User,
  post_type: PostType,
  num_data: number,
  ticker_symbol: string,
  comment: string,
  title: string
}

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
export enum PostType {
  ONE_MONTH_SUMMARY = '1 month summary',
  RECENT_TRADE = 'Recent trade',
  SHARE_COMMENT = 'Share comment'
}
