import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import CardProfissional from './components/CardProfissional'
import { fetchProfissionais } from './services/api'

export default function App(){
  const [profissionais, setProfissionais] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProfissionais = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProfissionais()
        setProfissionais(data)
      } catch (err) {
        setError(err.message)
        console.error('Erro ao carregar profissionais:', err)
      } finally {
        setLoading(false)
      }
    }

    loadProfissionais()
  }, [])

  return (
    <div>
      <Header />
      <main className="container">
        {loading && (
          <div className="loading-state">
            <p>⏳ Carregando profissionais da comunidade...</p>
          </div>
        )}
        
        {error && (
          <div className="error-state">
            <p>❌ Erro ao carregar dados: {error}</p>
          </div>
        )}
        
        {!loading && !error && profissionais.length === 0 && (
          <div className="empty-state">
            <p>Nenhum profissional encontrado no momento.</p>
          </div>
        )}
        
        {!loading && !error && profissionais.length > 0 && (
          <section className="grid" aria-live="polite" aria-label="Lista de profissionais">
            {profissionais.map(p => (
              <CardProfissional key={p.id} profissional={p} />
            ))}
          </section>
        )}
      </main>
      <footer className="footer">
        <p>Projeto acadêmico de extensão — ConectaBairro (PUCPR)</p>
      </footer>
    </div>
  )
}
