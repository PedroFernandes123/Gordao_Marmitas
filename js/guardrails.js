// Sistema de Guardrails contra Prompt Injection, Jailbreak, Vazamento de Instruções e Manipulação
window.Guardrails = (function() {
  // Padrões de jailbreak comuns conhecidos
  const JAILBREAK_PATTERNS = [
    /ignore\s+(all\s+)?(previous|prior|above)\s+(instructions|prompts|rules)/i,
    /disregard\s+(all\s+)?(previous|prior|rules)/i,
    /voc[eê]\s+agora\s+[eé]\s+(um\s+)?DAN/i,
    /do\s+anything\s+now/i,
    /jailbreak/i,
    /system\s+prompt/i,
    /esquecer\s+(todas\s+as\s+)?(instru[cç][oõ]es|regras)/i,
    /repita\s+(o\s+)?prompt/i,
    /mostrar\s+(o\s+)?prompt/i,
    /revele\s+(o\s+)?prompt/i,
    /what\s+is\s+your\s+system\s+prompt/i,
    /print\s+your\s+instructions/i,
    /bypass\s+safety/i,
    /modo\s+sem\s+regras/i,
    /developer\s+mode/i,
    /modo\s+desenvolvedor/i,
    /hack/i,
    /sudo\s+/i,
    /<script[\s\S]*?>/i,
    /javascript:/i,
    /onload\s*=/i,
    /onerror\s*=/i,
    /eval\s*\(/i
  ];

  // Palavras-chave fora de escopo (temas perigosos ou inapropriados para venda de marmitas)
  const OUT_OF_SCOPE_SUSPICIOUS = [
    /\b(arma|bomba|explosivo|veneno|droga|cartão clonado|cpf falso|roubo|assalto)\b/i,
    /\b(kill|suicide|morte|assassinar|atentado)\b/i
  ];

  /**
   * Sanitiza a entrada do usuário removendo HTML e limitando o tamanho
   */
  function sanitizeInput(text) {
    if (typeof text !== 'string') return '';
    // Limita tamanho para evitar flood/buffer attack
    let clean = text.trim().slice(0, 500);
    // Escapa tags HTML para proteger o DOM
    clean = clean
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    return clean;
  }

  /**
   * Executa a checagem de guardrail na mensagem do usuário
   * @param {string} text - Mensagem bruta
   * @returns {Object} { isValid: boolean, reason: string|null, sanitized: string, attackType: string|null }
   */
  function checkInput(text) {
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return { isValid: false, reason: "Mensagem vazia.", sanitized: "" };
    }

    const trimmed = text.trim();

    // 1. Verificação de Jailbreak / Prompt Injection
    for (const pattern of JAILBREAK_PATTERNS) {
      if (pattern.test(trimmed)) {
        return {
          isValid: false,
          attackType: "PROMPT_INJECTION_OR_JAILBREAK",
          reason: "Tentativa de injeção de prompt ou violação de diretrizes de segurança detectada.",
          safeResponse: "🛡️ [Segurança Ativada] Desculpe, não posso processar comandos que tentem alterar minhas regras operacionais ou solicitar instruções internas. Estou aqui exclusivamente para atendê-lo com o cardápio e pedidos do **Gordão Marmitas**! Como posso ajudar na sua refeição hoje?",
          sanitized: sanitizeInput(trimmed)
        };
      }
    }

    // 2. Verificação de conteúdo fora de escopo perigoso
    for (const pattern of OUT_OF_SCOPE_SUSPICIOUS) {
      if (pattern.test(trimmed)) {
        return {
          isValid: false,
          attackType: "HARMFUL_CONTENT",
          reason: "Conteúdo potencialmente perigoso ou impróprio para um assistente de marmitas.",
          safeResponse: "🛡️ [Segurança Ativada] Este assunto não condiz com os serviços do **Gordão Marmitas**. Trabalhamos com comida caseira de qualidade. Se desejar saber sobre nossos pratos e marmitas de hoje, terei prazer em ajudar!",
          sanitized: sanitizeInput(trimmed)
        };
      }
    }

    return {
      isValid: true,
      reason: null,
      attackType: null,
      sanitized: sanitizeInput(trimmed)
    };
  }

  /**
   * Valida a resposta do agente para evitar vazamento acidental de tokens ou instruções
   */
  function validateOutput(botResponse) {
    if (!botResponse) return "Desculpe, ocorreu um imprevisto ao processar sua resposta.";
    // Se a resposta contiver palavras-chave que indicam vazamento de prompt
    if (/SYSTEM\s+PROMPT|instruções\s+iniciais|meu\s+prompt\s+[eé]/i.test(botResponse)) {
      return "Estou à disposição para montar seu pedido no Gordão Marmitas! Gostaria de consultar o cardápio de hoje?";
    }
    return botResponse;
  }

  return {
    checkInput,
    validateOutput,
    sanitizeInput
  };
})();
