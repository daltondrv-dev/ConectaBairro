import React from 'react'

export default function CardProfissional({ profissional }) {
  const { nome_negocio, profissao, cidade, bairro, descricao, telefone } = profissional

  const sanitizePhone = (rawPhone) => {
    if (!rawPhone) return "";
    let cleaned = rawPhone.toString().replace(/\D/g, '');
    if (cleaned.length >= 10 && cleaned.length <= 11) {
      cleaned = '55' + cleaned;
    }
    return cleaned;
  };

  const telefoneTratado = sanitizePhone(telefone);
  const temTelefone = telefoneTratado.length > 0;
  
  const handleWhatsAppClick = () => {
    if (!temTelefone) {
      alert("Telefone não disponível para este profissional.")
      return
    }

    const mensagem = 'Olá! Vi seu perfil no AcheiAqui e gostaria de mais informações.'
    const waLink = `https://api.whatsapp.com/send?phone=${telefoneTratado}&text=${encodeURIComponent(mensagem)}`
    window.open(waLink, '_blank')
  }

  return (
    <article className="card">
      <div className="card-body">
        <h3 className="card-name">{nome_negocio}</h3>
        <p className="card-profissao">{profissao}</p>
        {(cidade || bairro) && (
          <div className="location-badge">
            📍 {[bairro, cidade].filter(Boolean).join(' - ')}
          </div>
        )}
        <p className="card-desc">{descricao}</p>
        <button
          className={`btn-whatsapp${!temTelefone ? ' btn-whatsapp-disabled' : ''}`}
          onClick={handleWhatsAppClick}
          disabled={!temTelefone}
          title={temTelefone ? 'Abrir conversa no WhatsApp' : 'Telefone não disponível'}
        >
          {temTelefone ? '💬 Abrir WhatsApp' : '📵 Sem telefone'}
        </button>
      </div>
    </article>
  )
}
