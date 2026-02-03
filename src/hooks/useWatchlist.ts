import { useState, useCallback } from 'react'
import type { Movie } from '../types'
import { sampleMovies } from '../data/sampleMovies'

const STORAGE_KEY = 'lb_watchlist_v2'

function loadWatchlist(): Movie[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      return JSON.parse(raw)
    }
    // Initialize with sample movies for demo
    return sampleMovies.slice(0, 12)
  } catch {
    return sampleMovies.slice(0, 12)
  }
}

function saveWatchlist(movies: Movie[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies))
}

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<Movie[]>(loadWatchlist)

  const addMovie = useCallback((movie: Omit<Movie, 'added_at'>) => {
    setWatchlist(prev => {
      if (prev.some(m => m.id === movie.id)) return prev
      const next = [...prev, { ...movie, added_at: Date.now() }]
      saveWatchlist(next)
      return next
    })
  }, [])

  const removeMovie = useCallback((id: number) => {
    setWatchlist(prev => {
      const next = prev.filter(m => m.id !== id)
      saveWatchlist(next)
      return next
    })
  }, [])

  const updateMovie = useCallback((id: number, updates: Partial<Movie>) => {
    setWatchlist(prev => {
      const next = prev.map(m => m.id === id ? { ...m, ...updates } : m)
      saveWatchlist(next)
      return next
    })
  }, [])

  const getMovie = useCallback(
    (id: number) => watchlist.find(m => m.id === id),
    [watchlist]
  )

  const isInWatchlist = useCallback(
    (id: number) => watchlist.some(m => m.id === id),
    [watchlist]
  )

  return { watchlist, addMovie, removeMovie, updateMovie, getMovie, isInWatchlist }
}
