import Papa from 'papaparse'

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSw6ldiG8GDgnL2Qihh-OKK8mvIg73wpQ-j37poDa0IXT_drXLXjN_7wWO9UWL6E4rByydJqeMBT_pH/pub?output=csv'

/**
 * Busca a lista de profissionais a partir do Google Sheets (CSV)
 * @returns {Promise<Array>} Array de profissionais com id, nome, profissao, descricao, telefone, urlFoto
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
        skipEmptyLines: true,
        complete: (results) => {
          // Validar e mapear dados
          const profissionais = results.data.map((row, index) => ({
            id: row.id || String(index + 1),
            nome: row.nome || '',
            profissao: row.profissao || '',
            descricao: row.descricao || '',
            telefone: row.telefone || '',
            urlFoto: row.urlFoto || ''
          }))
          
          resolve(profissionais)
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
