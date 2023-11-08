export interface Repository {
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
  created_at: string;
  updated_at: string;
  description: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}
