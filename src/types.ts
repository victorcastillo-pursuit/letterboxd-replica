export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  added_at: number;
  backdrop_path?: string;
  overview?: string;
  release_date?: string;
  director?: string;
  runtime?: number;
  rating?: number;
  // User state
  watched?: boolean;
  liked?: boolean;
  userRating?: number;
  review?: string;
  watchedDate?: string;
}
