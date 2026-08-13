import React from 'react'

export default function Header() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc4HaQ09ZQ_eaelGMWAtLr_ceY0R1JU7Ss7R8BHUwh2WdKyUA/viewform?usp=publish-editor";

  return (
    <header className="site-header">
      <div className="header-container">
        <h1>AcheiAqui</h1>
        <p className="tagline">Encontre os melhores profissionais e negócios da sua região.</p>
        <a 
          href={GOOGLE_FORM_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-cadastro"
        >
          Quero me Cadastrar 📝
        </a>
      </div>
    </header>
  )
}
