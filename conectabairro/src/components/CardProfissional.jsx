import React from 'react'

export default function CardProfissional({ profissional }) {
  const { nome, profissao, descricao, telefone, urlFoto } = profissional
  
  const handleWhatsAppClick = () => {
    // Limpar telefone: remover espaços, traços, parênteses, etc
    const telefoneLimpo = telefone.replace(/\D/g, '')
    const mensagem = 'Olá! Vi seu perfil no ConectaBairro e gostaria de mais informações.'
    const mensagemCodificada = encodeURIComponent(mensagem)
    const waLink = `https://api.whatsapp.com/send?phone=${telefoneLimpo}&text=${mensagemCodificada}`
    window.open(waLink, '_blank')
  }
  
  // Fallback: primeira letra do nome como avatar
  const inicial = nome.charAt(0).toUpperCase()
  const temFoto = urlFoto && urlFoto.includes('placeholder') === false

  return (
    <article className="card">
      {temFoto ? (
        <img className="card-photo" src={urlFoto} alt={`Foto de ${nome}`} />
      ) : (
        <div className="card-photo">{inicial}</div>
      )}
      <div className="card-body">
        <h3 className="card-name">{nome}</h3>
        <p className="card-profissao">{profissao}</p>
        <p className="card-desc">{descricao}</p>
        <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
          💬 Abrir WhatsApp
        </button>
      </div>
    </article>
  )
}
