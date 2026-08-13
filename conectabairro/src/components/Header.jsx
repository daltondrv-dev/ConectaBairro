import React from 'react'

export default function Header() {
  const GOOGLE_FORM_URL = "https://forms.gle/SEU_LINK_AQUI"; // Substitua pelo link real do forms

  return (
    <header className="site-header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1>ConectaBairro</h1>
          <p className="tagline">Fortalecendo a economia local. Encontre os melhores profissionais do nosso bairro!</p>
        </div>
        <a 
          href={GOOGLE_FORM_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-cadastro"
          style={{ backgroundColor: '#2E8B57', color: 'white', padding: '12px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          Quero me Cadastrar 📝
        </a>
      </div>
    </header>
  )
}
