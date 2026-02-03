import type { Movie } from '../types'

const posters: Omit<Movie, 'added_at'>[] = [
  { id: 693134, title: 'Dune: Part Two', poster_path: '/8b8R8l88Qje9dn9OE8PY05Nez7H.jpg' },
  { id: 572802, title: 'Aquaman and the Lost Kingdom', poster_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg' },
  { id: 346698, title: 'Barbie', poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
  { id: 872585, title: 'Oppenheimer', poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  { id: 507089, title: 'Five Nights at Freddy\'s', poster_path: '/A4j8S6phbU98uLjUg1rGm0ewtLz.jpg' },
  { id: 753342, title: 'Napoleon', poster_path: '/jE5o7y9K6pZtWNNMXw3IdIHa1Xo.jpg' },
  { id: 609681, title: 'The Marvels', poster_path: '/9GBhzXMFjgcZ3FdR9fQK4jiczny.jpg' },
  { id: 466420, title: 'Killers of the Flower Moon', poster_path: '/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg' },
  { id: 670292, title: 'The Creator', poster_path: '/vBZ0qvaRxqEhZB3Eo1WdrCYmcJW.jpg' },
  { id: 385687, title: 'Fast X', poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
  { id: 569094, title: 'Spider-Man: Across the Spider-Verse', poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
  { id: 447365, title: 'Guardians of the Galaxy Vol. 3', poster_path: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' },
  { id: 976573, title: 'Elemental', poster_path: '/4Y1WNkd88NIoOk87n1YJISZac82.jpg' },
  { id: 298618, title: 'The Flash', poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg' },
  { id: 667538, title: 'Transformers: Rise of the Beasts', poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg' },
  { id: 884605, title: 'No One Will Save You', poster_path: '/ehGIDAMaYy6Eg0o8ga0oSbKmhGV.jpg' },
  { id: 940551, title: 'Migration', poster_path: '/ldfCF9RhR40l1UMjMCiRMRZUmFe.jpg' },
  { id: 848326, title: 'Rebel Moon', poster_path: '/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg' },
]

export const sampleMovies: Movie[] = posters.map((m, i) => ({
  ...m,
  added_at: Date.now() - i * 100000,
}))
