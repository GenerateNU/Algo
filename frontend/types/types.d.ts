export interface User {
    first_name: string;
    last_name: string;
    username: string;
    pass_word: string;
    email: string;
    risk_tolerance: string;
    years_of_experience: number;
}

export type FinancialGoal = {
    goal: string;
};

export type Metadata = number | string | string[];

export interface Redirect {
    redirect_url: string;
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