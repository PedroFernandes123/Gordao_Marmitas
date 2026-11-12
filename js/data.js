// Cardápio do Gordão Marmitas estruturado por dias da semana e categorias
window.RESTAURANT_DATA = {
  name: "Gordão Marmitas",
  slogan: "Sabor de comida de mãe com a fartura que você merece!",
  deliveryFee: 6.00,
  freeDeliveryThreshold: 70.00,
  operatingHours: "Segunda a Sábado, das 10h30 às 15h00",
  whatsapp: "5511999998888",
  
  days: {
    segunda: {
      label: "Segunda-feira",
      theme: "O Clássico que Abraça",
      items: [
        {
          id: "seg_virado",
          name: "Virado à Paulista Tradicional",
          price: 24.90,
          description: "Arroz soltinho, tutu de feijão caseiro, bisteca de porco grelhada, couve fininha refogada na manteiga, ovo frito e banana frita.",
          category: "Prato Principal",
          customizable: ["Ponto da bisteca", "Sem cebola", "Sem alho", "Ovo com gema mole", "Ovo bem passado", "Tutu bem temperado", "Sem pimenta"]
        },
        {
          id: "seg_frango_legumes",
          name: "Filé de Frango Grelhado Fit",
          price: 22.90,
          description: "Filé de peito de frango marinado em ervas finas, arroz integral ou branco, feijão carioca e mix de legumes no vapor.",
          category: "Leve & Saudável",
          customizable: ["Ponto do filé (suculento/dourado)", "Sem alho", "Sem cebola", "Pouco sal", "Sem cheiro verde"]
        },
        {
          id: "seg_bife_acebolado",
          name: "Bife de Alcatra Acebolado Especial",
          price: 27.90,
          description: "Bife de alcatra selecionada com bastante cebola dourada, arroz branco, feijão preto ou carioca e farofa crocante.",
          category: "Favoritos da Casa",
          customizable: ["Ponto da carne (mal passada/ao ponto/bem passada)", "Remover cebolas", "Sem alho", "Cebola bem tostada", "Sem pimenta"]
        }
      ]
    },
    terca: {
      label: "Terça-feira",
      theme: "Sabor Caseiro & Força",
      items: [
        {
          id: "ter_bife_role",
          name: "Bife Rolê da Vovó",
          price: 26.50,
          description: "Bifes de alcatra enrolados com cenoura, bacon e pimentão, cozidos lentamente em molho de tomate rústico, com purê de batatas cremoso.",
          category: "Prato Principal",
          customizable: ["Sem pimentão", "Sem cebola no molho", "Molho bem encorpado", "Purê sem queijo"]
        },
        {
          id: "ter_sobrecoxa",
          name: "Sobrecoxa Assada Douradinha",
          price: 23.50,
          description: "Sobrecoxa com pele super crocante e marinada no limão com alecrim, acompanhada de batatas rústicas e arroz com brócolis.",
          category: "Prato Principal",
          customizable: ["Retirar pele da sobrecoxa", "Sem alecrim", "Batata bem assada/dourada", "Sem alho"]
        },
        {
          id: "ter_bife_acebolado",
          name: "Bife de Carne Acebolado",
          price: 27.90,
          description: "Corte macio grelhado na chapa de ferro, cebolas caramelizadas, arroz, feijão e farofa de milho.",
          category: "Favoritos da Casa",
          customizable: ["Ponto da carne (mal passada/ao ponto/bem passada)", "Remover cebolas", "Sem alho", "Pouco sal"]
        }
      ]
    },
    quarta: {
      label: "Quarta-feira",
      theme: "O Tradicional Dia de Feijoada",
      items: [
        {
          id: "qua_feijoada",
          name: "Feijoada Completa do Gordão",
          price: 32.90,
          description: "Feijão preto com carne seca desfiada, costelinha suína macia, lombo, paio e calabresa defumada. Acompanha arroz, couve refogada, farofa e laranja fresca.",
          category: "Especial da Casa",
          customizable: ["Sem paio/calabresa", "Sem couve", "Molho de pimenta à parte", "Farofa caprichada"]
        },
        {
          id: "qua_parmegiana_frango",
          name: "Parmegiana de Frango Gratinada",
          price: 27.50,
          description: "Filé de frango empanado crocante coberto por fatias generosas de queijo muçarela e molho artesanal de tomates frescos. Acompanha arroz e fritas.",
          category: "Favoritos da Casa",
          customizable: ["Molho com pouco orégano", "Fritas bem sequinhas", "Sem queijo ralado extra"]
        },
        {
          id: "qua_bife_vaca",
          name: "Bife de Vaca Acebolado Tradicional",
          price: 27.90,
          description: "Bife de contrafilé grelhado com anéis generosos de cebola frita, arroz branco e feijão carioca.",
          category: "Prato Principal",
          customizable: ["Ponto da carne (mal passada/ao ponto/bem passada)", "Remover cebolas", "Sem alho", "Sem tempero verde"]
        }
      ]
    },
    quinta: {
      label: "Quinta-feira",
      theme: "Massa & Conforto Caseiro",
      items: [
        {
          id: "qui_lasanha",
          name: "Lasanha à Bolonhesa Especial",
          price: 28.90,
          description: "Camadas generosas de massa artesanal, carne moída de primeira cozida no molho de tomate pelado italiano, queijo mussarela derretido e presunto.",
          category: "Massas",
          customizable: ["Sem orégano", "Mais queijo gratinado", "Molho sem pedaços de cebola"]
        },
        {
          id: "qui_costelinha",
          name: "Costelinha Suína ao Barbecue Caipira",
          price: 29.90,
          description: "Costelinha cozida até soltar do osso e laqueada em molho barbecue de goiabada cascão. Acompanha mandioca frita crocante e arroz.",
          category: "Prato Principal",
          customizable: ["Molho barbecue à parte", "Mandioca bem tostada", "Sem pimenta"]
        },
        {
          id: "qui_bife_acebolado",
          name: "Bife de Alcatra na Manteiga de Garrafa",
          price: 27.90,
          description: "Bife grelhado na manteiga clarificada com cebolas salteadas, arroz, feijão e farofinha de cebola.",
          category: "Favoritos da Casa",
          customizable: ["Ponto da carne (mal passada/ao ponto/bem passada)", "Remover cebolas", "Sem alho", "Pouco sal"]
        }
      ]
    },
    sexta: {
      label: "Sexta-feira",
      theme: "Peixes & Sabores Especiais",
      items: [
        {
          id: "sex_peixe_empanado",
          name: "Filé de Tilápia Crocante com Molho Tártaro",
          price: 29.50,
          description: "Filés frescos de tilápia empanados na farinha panko dourada, acompanhados de purê de batata caseiro, arroz e limão taiti.",
          category: "Peixes & Frutos",
          customizable: ["Molho tártaro à parte", "Purê sem manteiga", "Sem alho", "Tilápia bem sequinha"]
        },
        {
          id: "sex_strogonoff",
          name: "Strogonoff Clássico de Carne",
          price: 28.50,
          description: "Tiras macias de mignon e alcatra em creme aveludado de cogumelos frescos e creme de leite fresco. Acompanha arroz branquinho e batata palha artesanal.",
          category: "Favoritos da Casa",
          customizable: ["Sem champignon/cogumelos", "Sem mostarda", "Batata palha separada", "Pouco sal"]
        },
        {
          id: "sex_bife_acebolado",
          name: "Bife de Contrafilé Acebolado",
          price: 27.90,
          description: "O campeão de vendas: bife de contrafilé macio e suculento com cebolas refogadas, arroz e feijão fresquinho.",
          category: "Favoritos da Casa",
          customizable: ["Ponto da carne (mal passada/ao ponto/bem passada)", "Remover cebolas", "Sem alho", "Sem tempero picante"]
        }
      ]
    },
    sabado: {
      label: "Sábado",
      theme: "Feijoada Nobre & Churrasco",
      items: [
        {
          id: "sab_feijoada_gourmet",
          name: "Feijoada Nobre do Gordão (Para 1 pessoa faminta)",
          price: 35.90,
          description: "Nossa célebre feijoada completa com costelinha defumada, lombo nobre, paio, calabresa e torresminho estaladiço à parte.",
          category: "Especial da Casa",
          customizable: ["Torresmo extra crocante", "Sem couve", "Sem paio", "Pimenta à parte"]
        },
        {
          id: "sab_churrasco_misto",
          name: "Marmita de Churrasco Misto",
          price: 33.90,
          description: "Picanha fatiada, linguiça toscana e peito de frango assados na brasa, acompanhados de vinagrete fresco, farofa de ovos e arroz.",
          category: "Churrasco",
          customizable: ["Ponto da carne bovina (mal passada/ao ponto/bem passada)", "Sem cebola no vinagrete", "Sem coentro/cheiro verde", "Frango bem assado"]
        },
        {
          id: "sab_bife_acebolado",
          name: "Bife de Alcatra Acebolado Nobre",
          price: 28.90,
          description: "Bife espesso de alcatra grelhado com anéis de cebola dourados, arroz, feijão e purê de mandioquinha.",
          category: "Favoritos da Casa",
          customizable: ["Ponto da carne (mal passada/ao ponto/bem passada)", "Remover cebolas", "Sem alho", "Pouco sal"]
        }
      ]
    }
  },

  // Itens adicionais e bebidas disponíveis todos os dias
  extras: [
    { id: "ext_ovo", name: "Ovo Frito Caipira Extra", price: 3.50, customizable: ["Gema mole", "Gema dura"] },
    { id: "ext_torresmo", name: "Porção de Torresmo Crocante", price: 7.00, customizable: ["Bem sequinho"] },
    { id: "ext_farofa", name: "Farofa de Bacon da Casa (Pote)", price: 4.50, customizable: [] },
    { id: "ext_coca_lata", name: "Coca-Cola Lata 350ml (Normal)", price: 6.00, customizable: ["Com gelo", "Sem gelo", "Com limão"] },
    { id: "ext_coca_zero", name: "Coca-Cola Zero Lata 350ml", price: 6.00, customizable: ["Com gelo", "Sem gelo", "Com limão"] },
    { id: "ext_suco_laranja", name: "Suco Natural de Laranja 500ml", price: 8.50, customizable: ["Sem açúcar", "Com pouco gelo", "Com açúcar"] },
    { id: "ext_pudim", name: "Pudim de Leite Condensado Caseiro", price: 8.00, customizable: ["Com calda caprichada"] }
  ]
};
