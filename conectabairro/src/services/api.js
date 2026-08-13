import Papa from 'papaparse'

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSw6ldiG8GDgnL2Qihh-OKK8mvIg73wpQ-j37poDa0IXT_drXLXjN_7wWO9UWL6E4rByydJqeMBT_pH/pub?output=csv'

/**
 * Busca a lista de profissionais a partir do Google Sheets (CSV)
 * @returns {Promise<Array>} Array de profissionais com id, nome_negocio, profissao, descricao, telefone
 * @throws {Error} Se houver erro na requisição ou parsing
 */
export async function fetchProfissionais() {
  try {
    const response = await fetch(CSV_URL)
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`)
    }
    
    const csvText = await response.text()
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        transformHeader: (header) => {
          return header
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // remove acentos
            .replace(/[^a-z0-9]+/g, '_')     // substitui barras, espaços e símbolos por _
            .replace(/^_+|_+$/g, '');        // remove _ do início/fim
        },
        skipEmptyLines: true,
        complete: (results) => {
          console.log('Primeiro registro parsed:', results.data[0]);

          const getFieldValue = (row, keywords) => {
            const keys = Object.keys(row);
            for (const kw of keywords) {
              const matchedKey = keys.find(k => k.includes(kw));
              if (matchedKey && row[matchedKey] && row[matchedKey].toString().trim() !== '') {
                return row[matchedKey].toString().trim();
              }
            }
            return '';
          };

          const profissionais = results.data.map((row, index) => ({
            id: row.id || String(index + 1),
            nome_negocio: getFieldValue(row, ['nome', 'negocio', 'empresa', 'profissional']) || "Empreendedor Local",
            profissao: getFieldValue(row, ['profissao', 'categoria', 'ramo', 'servico']) || "Profissional Local",
            cidade: getFieldValue(row, ['cidade', 'municipio']) || "",
            bairro: getFieldValue(row, ['bairro', 'regiao']) || "",
            descricao: getFieldValue(row, ['descricao', 'detalhe', 'resumo', 'sobre']) || "",
            telefone: getFieldValue(row, ['telefone', 'whats', 'celular', 'contato', 'num']) || ""
          }));
          
          resolve(profissionais);
        },
        error: (error) => {
          reject(new Error(`Erro ao fazer parse do CSV: ${error.message}`))
        }
      })
    })
  } catch (error) {
    throw new Error(`Falha ao buscar profissionais: ${error.message}`)
  }
}
