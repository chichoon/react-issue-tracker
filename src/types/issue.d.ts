export interface IssueType {
  number: number;
  html_url: string;
  created_at: string;
  body?: string | null;
  title: string;
  comments: number;
  user: UserType | null;
}

export interface UserType {
  avatar_url: string;
  id: number;
  login: string;
}
