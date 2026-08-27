export const siteContent = {
  brand: {
    name: 'Vision Forge',
    logo: '/img/logo.png',
    alt: 'Logo Vision Forge',
  },
  navigation: [
    { href: '#solucao', label: 'A Solução' },
    { href: '#publico-alvo', label: 'Público-Alvo' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#equipe', label: 'Nossa Equipe' },
    { href: '#contato', label: 'Contato' },
  ],
  solution: {
    title: 'A Solução',
    blocks: [
      {
        title: 'O Problema',
        paragraphs: [
          'Atualmente, muitas pessoas enfrentam dificuldades com as anotações dentro da sala de aula e o acompanhamento do material didático. Isso gera perda de tempo, recursos e frustração no dia a dia.',
        ],
      },
      {
        title: 'Como Funciona',
        paragraphs: [
          'Nossa solução é uma integração inovadora de I.A com a câmera do celular, que resolve este problema através de uma simples foto. Nossa inteligência artificial faz um resumo da aula, produz exercícios baseados na foto e cria mapas mentais. Com uma interface intuitiva, o usuário pode facilmente tirar a foto e obter resultados rápidos e eficientes.',
        ],
      },
    ],
  },
  audience: {
    title: 'Público-Alvo',
    paragraphs: [
      'Nossa solução foi desenvolvida pensando em jovens estudantes.',
      'Este público se beneficiará imensamente do nosso projeto porque ele elimina a barreira do estudo integrado com a I.A., permitindo que foquem no que realmente importa, aumentando a produtividade e a qualidade de ensino.',
    ],
  },
  gallery: {
    title: 'Galeria da Solução',
    subtitle: 'Confira algumas telas e mockups do nosso projeto.',
    items: [
      {
        src: '/img/img1.png',
        alt: 'Mockup da Tela Inicial',
        caption: 'Tela Inicial',
      },
      {
        src: '/img/dash.png',
        alt: 'Mockup do Dashboard',
        caption: 'Dashboard do Usuário',
      },
      {
        src: '/img/img3.png',
        alt: 'Mockup de Funcionalidade',
        caption: 'Funcionalidade Principal',
      },
      {
        src: '/img/tela.png',
        alt: 'Versão Mobile',
        caption: 'Versão Mobile',
      },
    ],
  },
  team: {
    title: 'Nossa Equipe',
    members: [
      {
        name: 'Henrique Vieira Ferreira',
        role: 'Desenvolvedor Front-end',
        description: 'RM569586 - Responsável pela estruturação em HTML e estilização utilizando CSS Grid.',
      },
      {
        name: 'Nícolas Moreira Silva',
        role: 'UX/UI Designer',
        description: 'RM571510 - Responsável pela prototipação e escolha de paleta de cores da Landing Page.',
      },
      {
        name: 'Lucas Trevisan',
        role: 'Analista de Qualidade',
        description: 'RM569731 - Responsável por testar a responsividade em todos os dispositivos.',
      },
      {
        name: 'Leonardo Gracioli Barrocal',
        role: 'Gerente de Projeto',
        description: 'RM571031 - Responsável por organizar as tarefas e a documentação final da entrega.',
      },
    ],
  },
  contact: {
    title: 'Contato',
    paragraphs: [
      'Tem dúvidas ou deseja saber mais sobre o Vision Forge? Entre em contato conosco!',
      'E-mail: contato@visionforge.com',
      'Redes Sociais: @VisionForgeAI',
    ],
  },
  footer: {
    copyright: '© 2026 Vision Forge. Todos os direitos reservados.',
  },
};
