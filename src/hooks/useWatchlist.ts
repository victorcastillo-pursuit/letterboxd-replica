import { useState, useCallback } from 'react'
import type { Movie } from '../types'

const STORAGE_KEY = 'lb_watchlist_v1'

function loadWatchlist(): Movie[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
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

  const isInWatchlist = useCallback(
    (id: number) => watchlist.some(m => m.id === id),
    [watchlist]
  )

  return { watchlist, addMovie, removeMovie, isInWatchlist }
}
