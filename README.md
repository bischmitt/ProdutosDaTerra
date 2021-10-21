# Fluxo de Trabalho - (Grupo JQuery)

Fluxo modelado em **issue's** e **pull request's** para organização de tarefas e revisão de código.

Em primeiro momento, aplicando alterações (commit's) na branch com o nome do integrante, afim de realizar *pull request's* para a branch **develop**. 

Por fim, será efetuado o merge da **branch develop** para a **branch main**.


---

## GitHub
1. Escolher uma **issue**.
   - Verificar sua tarefa na descrição.
   - Se houver dúvida, comentar na própria **issue**.
2. Solucionando uma **issue**.
    - Realizar um ou mais **pull request's** (apenas com os commit's **necessários** de cada vez) <u>selecionando a branch develop como **base** e a branch com seu nome como **compare**.</u>
    - Escrever um título e uma descrição na **pull request** coerente ás alterações sendo propostas, explicando o que fez ou está fazendo para solucionar.
    - Depois de criado o **pull request**, fazer o link com a **issue** correspondente e aguardar revisão do código e/ou comentários do mesmo para o merge.
---

## Git
1. Clonar o repositório para sua máquina (**única vez**).
   - Abrir o VS-Code na sua pasta de projetos.
   - Abrir o terminal do VS-Code nessa pasta.
   - Executar no terminal para clonar:
      ```bash
      git clone https://github.com/bischmitt/SoulCode-Project.git
      ```
   - Fechar o VS-Code.
<br>
<br>
2. Verificar se está na branch apropriada.

   - Abrir o VS-Code na pasta do projeto clonado.
      
   - Abrir o terminal do VS-Code nessa pasta.
   
   - Executar no terminal:
   
      ```bash
      git status
      ```  
   - Exibirá na primeira linha do terminal.

3. Atualizar o projeto local.
   - Trazer as atualizações da branch develop para se manter atualizado.
      ```bash
      git pull origin develop
      ```
4. Trazer alterações necessárias para a área de **stage**.
     - Puxar todas as alterações:
       ```bash
       git add .
       ```
     - Ou apenas de alguns arquivos (exemplo):
       ```bash
       git add index.html index.js
       ```
    <br>

5. Efetuar um commit descritivo (exemplo):
    ```bash
    git commit -m "Adicionei a funcionalidade de soma na calculadora"
    ```
    <br>
6. Fazer o push para sua branch remota: <br>
    Ficou estabelecido que seria a branch com seu nome para o push.
   - Primeira vez:
     ```bash
     git push -u origin nomeDaSuaBranch
     ```
   - Outras vezes:
     ```bash
     git push
     ```
    <br>
7. Criar pull request com os commit's.
