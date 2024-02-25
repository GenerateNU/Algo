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