# Product Requirements Document (PRD): Watchlist Feature Replica


| Metadata         | Details                        |
| ---------------- | ------------------------------ |
| **Project Name** | Letterboxd Watchlist Replica   |
| **Status**       | Draft / In-Progress            |
| **Team**         | Frontend (UI), Backend (Logic) |
| **Last Updated** | February 4, 2026               |


## 1. Executive Summary

The goal of this project is to reverse-engineer and replicate the "Watchlist" feature of Letterboxd with high visual fidelity and functional state management. The focus is on demonstrating proficiency in **React**, **Tailwind CSS**, and **State Persistence**.

## 2. Problem Statement

Users need a frictionless way to curate a list of movies they intend to watch. The current implementation (the "real" Letterboxd) relies on a grid-based UI with specific hover interactions. Our goal is to recreate this interaction model to study its UX patterns.

## 3. Value Proposition

| Audience | Value Delivered |
| -------- | --------------- |
| **End Users** | A streamlined, visually appealing watchlist experience with intuitive interactions—add, remove, and organize movies effortlessly without account friction. |
| **Couples/Groups** | The "Roulette" feature eliminates decision fatigue by randomly selecting a movie both parties have added, turning movie night into a fun, collaborative experience. |
| **Developers** | A well-documented reference implementation showcasing modern React patterns, Tailwind CSS styling, and localStorage persistence—ideal for portfolio projects or learning. |
| **Designers** | A pixel-perfect recreation of Letterboxd's proven UX patterns, demonstrating attention to detail in hover states, transitions, and responsive grid layouts. |

**Key Differentiators:**
- **No signup required** — Data persists locally in the browser
- **Offline-first** — Works without network connectivity after initial load
- **Lightweight** — Fast load times with minimal dependencies
- **Open source** — Transparent codebase for learning and customization

## 4. Core User Stories


| ID      | As a...  | I want to...                        | So that...                                              |
| ------- | -------- | ----------------------------------- | ------------------------------------------------------- |
| **4.1** | User     | Add a movie to my watchlist         | I don't forget to watch it later.                       |
| **4.2** | User     | Remove a movie via the grid interface | I can manage my list quickly.                         |
| **4.3** | User     | See popout animations               | I feel engaged and encouraged to watch.                 |
| **4.4** | User     | Mark a movie as "Watched" & Rate it | I can track my history and leave a review.              |
| **4.5** | User     | Drag a movie onto a calendar view   | I can plan specifically when to watch it.               |
| **4.6** | Couple   | Start a "Roulette" session          | We can find a movie we both want to watch without arguing. |
| **4.7** | User     | Have my list persist after refresh  | I don't lose my data when I reload the page.               |


## 5. Functional Requirements

### 5.1 The Watchlist Grid

- **Layout:** Responsive Grid (CSS Grid).
- **Columns:** Mobile (3), Tablet (4-5), Desktop (6).
- **Aspect Ratio:** Posters must maintain a strict `2:3` ratio.

### 5.2 Interactions (The "Hover State")

- **Trigger:** On mouse enter.
- **Visual Change:**
  - Border becomes `#00e054` (Solid, 2px).
  - Image opacity darkens (Black overlay at 60-70% opacity).
  - "Quick Action" icons (Eye, Star, Remove) fade in.
- **Transition:** All changes must occur within `150ms` (Ease-in-out).

### 5.3 State Management

- **Data Structure:** Array of Objects.
- **Storage:** `localStorage` (Browser API).
- **Key:** `lb_watchlist_v1`

## 6. Technical Architecture

### 6.1 Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-react
- **Data Source:** TMDB API (The Movie Database)
- **Language:** TypeScript

### 6.2 Data Model (Schema)

```ts
interface Movie {
  id: number;          // TMDB ID
  title: string;       // "Dune: Part Two"
  poster_path: string; // "/path/to/image.jpg"
  added_at: number;    // Timestamp
}
```

