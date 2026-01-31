# Product Requirements Document (PRD): Watchlist Feature Replica

| Metadata | Details |
| :--- | :--- |
| **Project Name** | Letterboxd Watchlist Replica |
| **Status** | Draft / In-Progress |
| **Team** | Frontend (UI), Backend (Logic) |
| **Last Updated** | January 31, 2026 |

## 1. Executive Summary
The goal of this project is to reverse-engineer and replicate the "Watchlist" feature of Letterboxd with high visual fidelity and functional state management. The focus is on demonstrating proficiency in **React**, **Tailwind CSS**, and **State Persistence**.

## 2. Problem Statement
Users need a frictionless way to curate a list of movies they intend to watch. The current implementation (the "real" Letterboxd) relies on a grid-based UI with specific hover interactions. Our goal is to recreate this interaction model to study its UX patterns.

## 3. Core User Stories
| ID | As a... | I want to... | So that... |
| :--- | :--- | :--- | :--- |
| **3.1** | User | Add a movie to my watchlist | I don't forget to watch it later. |
| **3.2** | User | Remove a movie via the grid interface | I can manage my list quickly. |
| **3.3** | User | See a visual indicator (Green Border) | I know which movie I am interacting with. |
| **3.4** | User | Persist my list after refreshing | I don't lose my data. |

## 4. Functional Requirements

### 4.1 The Watchlist Grid
* **Layout:** Responsive Grid (CSS Grid).
* **Columns:** Mobile (3), Tablet (4-5), Desktop (6).
* **Aspect Ratio:** Posters must maintain a strict `2:3` ratio.

### 4.2 Interactions (The "Hover State")
* **Trigger:** On mouse enter.
* **Visual Change:**
    * Border becomes `#00e054` (Solid, 2px).
    * Image opacity darkens (Black overlay at 60-70% opacity).
    * "Quick Action" icons (Eye, Star, Remove) fade in.
* **Transition:** All changes must occur within `150ms` (Ease-in-out).

### 4.3 State Management
* **Data Structure:** Array of Objects.
* **Storage:** `localStorage` (Browser API).
* **Key:** `lb_watchlist_v1`

## 5. Technical Architecture

### 5.1 Tech Stack
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide-react
* **Data Source:** TMDB API (The Movie Database)
* **Language:** TypeScript

### 5.2 Data Model (Schema)
```ts
interface Movie {
  id: number;          // TMDB ID
  title: string;       // "Dune: Part Two"
  poster_path: string; // "/path/to/image.jpg"
  added_at: number;    // Timestamp
}