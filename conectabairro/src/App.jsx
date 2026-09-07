import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import CardProfissional from './components/CardProfissional'
import { fetchProfissionais } from './services/api'

const SUPPORT_WHATSAPP = "5541996045690";

export default function App(){
  const [profissionais, setProfissionais] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
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

  const filteredProfissionais = profissionais.filter((prof) => {
    const search = searchTerm.toLowerCase()
    if (!search) return true

    const matchesNome = prof.nome_negocio && prof.nome_negocio.toLowerCase().includes(search)
    const matchesProfissao = prof.profissao && prof.profissao.toLowerCase().includes(search)
    const matchesBairro = prof.bairro && prof.bairro.toLowerCase().includes(search)
    const matchesCidade = prof.cidade && prof.cidade.toLowerCase().includes(search)

    return matchesNome || matchesProfissao || matchesBairro || matchesCidade
  })

  return (
    <div>
      <Header />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          aria-label="Buscar por profissão, nome, bairro ou cidade"
          placeholder="🔍 Buscar por eletricista, doceira, bairro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
        
        {!loading && !error && (
          <section className="grid" aria-live="polite" aria-label="Lista de profissionais">
            {filteredProfissionais.length > 0 ? (
              filteredProfissionais.map(p => (
                <CardProfissional key={p.id} profissional={p} />
              ))
            ) : (
              <div className="empty-state">
                <p>😕 Poxa, não encontramos ninguém com esse termo.</p>
                <p>Tente buscar por outra profissão ou bairro!</p>
              </div>
            )}
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
