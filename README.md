📚 Boletim Escolar App

Um aplicativo móvel desenvolvido em React Native para calcular a média de notas escolares e exibir a situação do aluno (Aprovado, Recuperação ou Reprovado) com feedback visual dinâmico.

📱 Funcionalidades

Cálculo de Média: Recebe 4 notas bimestrais.

Validação de Dados: - Impede cálculos com campos vazios.

Aceita tanto ponto (.) quanto vírgula (,) como separador decimal.

Interface Dinâmica:

A cor da tela de resultado muda automaticamente baseada na situação do aluno:

🟢 Verde: Aprovado (Média >= 7.0)

🟡 Amarelo: Recuperação (Média >= 5.0 e < 7.0)

🔴 Vermelho: Reprovado (Média < 5.0)

Navegação: Utiliza React Navigation para transição entre telas.

Limpeza com Botão: Botão limpar inserido abaixo do botão calcular.

🎨 Layout e Estilos

O projeto utiliza StyleSheet para estilização, focando em uma interface limpa, moderna e responsiva.

🚀 Como rodar o projeto

Pré-requisitos: Você precisa ter o Node.js instalado.

Clone este repositório:

git clone[[https://github.com/moisestavares741/media-aluno.git]]


Entre na pasta:

cd media-aluno


Instale as dependências:

npm install


Inicie o projeto:

npx expo start


Abra no seu celular:

Baixe o app Expo Go (Android/iOS).

Escaneie o QR Code que aparecerá no terminal.

🛠 Tecnologias Utilizadas

React Native

Expo

React Navigation

👨‍💻 Autor

Desenvolvido por Moisés.

Este projeto é para fins de estudo e portfólio.
