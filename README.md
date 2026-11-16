# 😭 ChoreiBook — As Olimpíadas do Sofrimento Cotidiano

> *"A rede social onde a sua desgraça é o nosso entretenimento e quem sofre mais ganha mais biscoito de lágrimas."*

---

## 📖 Sobre o Projeto

O **ChoreiBook** é uma plataforma satírica desenvolvida com **HTML5, CSS3 moderno e JavaScript puro (Vanilla)** onde usuários compartilham seus piores perrengues cotidianos e competem pelo cobiçado **"Troféu Coitado da Semana"**. 

Inspirado nas principais redes sociais e fóruns modernos, o ChoreiBook transforma os reveses diários — como pisar em poça com meia limpa, levar vácuo no WhatsApp, ter o TCC rejeitado ou ver o saldo sumir no cheque especial — em uma competição bem-humorada com reações, rankings dinâmicos e trilha sonora melodramática.

---

## ✨ Funcionalidades Principais

### 1. 🏆 Olimpíadas da Sofrência (Pódio em Tempo Real)
- **Top 3 no Pódio**: Destaque visual com coroa para o 1º lugar (Campeão da Miséria), 2º e 3º lugares.
- **Recálculo Automático**: Toda vez que um post recebe reações ou comentários, a pontuação de lágrimas é atualizada e o ranking reclassifica os participantes em tempo real.

### 2. 😭 Feed de Lágrimas & Reações Interativas
- **5 Reações Temáticas com Pontuação**:
  - 😭 **Chorei** (+10 lágrimas)
  - 🎻 **Violino Triste** (+5 lágrimas)
  - 💀 **Enterra / UTI** (+15 lágrimas)
  - 🤡 **Troféu Palhaço** (+8 lágrimas)
  - 💸 **Pix de Piedade** (+20 lágrimas)
- **Microinterações e Efeitos**: Efeito sonoro sintetizado via **Web Audio API** (sem arquivos pesados externos) e números flutuantes animados subindo na tela (`+15 💧`).
- **Gaveta de Comentários**: Usuários podem deixar palavras de solidariedade sarcástica em cada relato.

### 3. ✍️ Registro de Nova Desgraça (Modal Completo)
- Formulário intuitivo para cadastrar novos perrengues com:
  - Nome / Pseudônimo do sofredor
  - Departamento da Dor (CLT, Boletos, Amor, Transporte, Faculdade, Cotidiano)
  - **Escala Richter do Desespero (1 a 10)** com slider reativo
  - Selo de Gravidade (*Humilhação Pública, Prejuízo Irreparável, Trauma Amoroso, Azar Lendário*)
  - Contador de caracteres em tempo real

### 4. ⚔️ X1 da Desgraça (Duelo do Dia)
- Dois perrengues clássicos colocados cara a cara.
- Votação interativa com cálculo dinâmico de porcentagens e barra de progresso.

### 5. 🧮 Termômetro da Ruindade (Calculadora de Sofrência)
- Mini-simulador com 3 perguntas sobre finanças, vida amorosa e saúde física/mental.
- Gera um diagnóstico cômico oficial com base na pontuação.

### 6. 🎻 Trilha Sonora & Efeitos Visuais
- **Violino Triste Melodramático**: Toca uma melodia triste sintetizada em escala menor gerada inteiramente via código no navegador (Web Audio API).
- **🌧️ Chuva de Lágrimas**: Efeito toggleable de emojis e partículas de lágrimas caindo pela tela.
- **🎭 Gerador de Desculpas Dramáticas**: Gera desculpas mirabolantes para escapar de reuniões ou encontros.
- **🌓 Alternador de Temas**:
  - *Modo Vale das Lágrimas* (Dark Theme moderno com tons azul/ardósia)
  - *Modo Ilusão de Óptica* (Light Theme limpo)

### 7. 💾 Persistência com LocalStorage
- Todas as histórias criadas pelo usuário, reações, votos do duelo e preferências de tema são gravadas localmente no navegador, persistindo mesmo após recarregar a página (F5).

---

## 📂 Estrutura de Arquivos

```
ChoreiBook-2a/
├── index.html     # Estrutura semântica, acessível e completa da aplicação
├── style.css      # Design moderno, variáveis CSS, animações, grid/flexbox e responsividade
├── app.js         # Lógica da aplicação, pontuação, ranking, áudio e localStorage
└── README.md      # Documentação do projeto
```

---

## 🚀 Como Executar

Não é necessário instalar nenhuma dependência, servidor ou banco de dados externo.

1. Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
2. Divirta-se desabafando e competindo para ver quem tem a vida mais difícil!
