export interface User {
    first_name: string;
    last_name: string;
    pass_word: string;
    email: string;
}

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