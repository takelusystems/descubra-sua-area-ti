import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

import { testSupabaseConnection } from './services/quizResults'

if (import.meta.env.DEV) {
  void testSupabaseConnection()
    .then((distribution) => {
      console.log(
        '✅ Supabase conectado com sucesso.',
      )

      console.table(distribution)
    })
    .catch((error) => {
      console.error(
        '❌ Falha ao conectar com o Supabase.',
        error,
      )
    })
}

createRoot(
  document.getElementById('root')!,
).render(
  <StrictMode>
    <App />
  </StrictMode>,
)