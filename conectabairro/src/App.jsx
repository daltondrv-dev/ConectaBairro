import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import CardProfissional from './components/CardProfissional'
import { fetchProfissionais } from './services/api'

const SUPPORT_WHATSAPP = "5541996045690";

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
        <div className="support-banner">
          <p className="support-text">
            Cadastrou seu negócio e precisa alterar ou excluir alguma informação?
          </p>
          <a 
            href={`https://api.whatsapp.com/send?phone=${SUPPORT_WHATSAPP}&text=${encodeURIComponent("Olá! Sou um profissional cadastrado no AcheiAqui e preciso de ajuda com meus dados.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-suporte"
          >
            📱 Falar com o suporte via WhatsApp
          </a>
        </div>
        <p className="footer-credits">Projeto acadêmico de extensão — ConectaBairro (PUCPR)</p>
      </footer>
    </div>
  )
}
