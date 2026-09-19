 
<!--
    Inicia a área principal de destaque da página inicial.
 
    Esta é a primeira área que o visitante visualiza quando
    entra na TechStore. Ela apresenta uma mensagem de destaque,
    uma descrição da loja e um botão para acessar os produtos.
-->
<section class="hero">
 
    <!--
        Área esquerda do destaque.
        Aqui ficam os textos principais e o botão que leva
        o visitante para o catálogo de produtos.
    -->
    <div class="hero-texto">
 
        <!--
            Pequena etiqueta acima do título.
            Serve para apresentar rapidamente a proposta da loja.
        -->
        <span class="etiqueta">
            TECNOLOGIA PARA VOCÊ
        </span>
 
        <!--
            Título principal da página inicial.
            A quebra de linha separa "Seu próximo upgrade"
            da frase "começa aqui." para criar o efeito visual
            utilizado no destaque da loja.
        -->
        <h2>
            Seu próximo upgrade
            <br>
 
            <!--
                Esta parte do título recebe um estilo diferente
                através do CSS para destacar a segunda frase.
            -->
            <span>começa aqui.</span>
        </h2>
 
        <!--
            Texto utilizado para explicar ao visitante
            quais tipos de produtos ele encontrará na loja.
        -->
        <p>
            Encontre computadores, notebooks, periféricos
            e acessórios para deixar seu setup muito mais completo.
        </p>
 
        <!--
            Botão principal da página inicial.
            Quando o visitante clicar, o index.php recebe
            pagina=produtos e carrega produtos.php no centro.
        -->
        <a
            class="botao-principal"
            href="index.php?pagina=produtos"
        >
            Ver produtos →
        </a>
 
    </div>
 
 
    <!--
        Área direita do destaque.
        É onde aparece a imagem principal relacionada
        aos computadores e à tecnologia.
    -->
    <div class="hero-imagem">
 
        <!--
            Imagem utilizada como destaque visual da loja.
            A URL aponta para uma imagem externa.
            O alt identifica a imagem caso ela não possa ser carregada
            e também ajuda na acessibilidade da página.
        -->
        <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=85"
            alt="Computador moderno"
        >
 
        <!--
            Cria um pequeno selo sobre a imagem.
            O CSS posiciona esse elemento de forma flutuante
            dentro da área da imagem.
        -->
        <div class="selo-flutuante">
 
            <!--
                Mostra a quantidade de produtos que a loja
                apresenta como destaque.
            -->
            <strong>
                8+
            </strong>
 
            <!--
                Complementa o número explicando ao visitante
                o que significa o "8+" apresentado acima.
            -->
            <span>
                produtos em destaque
            </span>
 
        </div>
 
    </div>
 
</section>
 
 
<!--
    Inicia a área de benefícios da loja.
 
    Esta parte aparece abaixo do destaque principal
    e apresenta três motivos para o cliente comprar
    na TechStore.
-->
<section class="beneficios">
 
 
    <!--
        Primeiro benefício apresentado ao visitante.
        O conteúdo informa que a loja oferece entrega rápida.
    -->
    <div class="beneficio">
 
        <!--
            Ícone utilizado para representar velocidade
            e reforçar visualmente a ideia de entrega rápida.
        -->
        <span>⚡</span>
 
        <div>
 
            <!--
                Título do primeiro benefício.
            -->
            <strong>
                Entrega rápida
            </strong>
 
            <!--
                Complementa o benefício informando
                a região atendida pela proposta da loja.
            -->
            <small>
                Para toda a região
            </small>
 
        </div>
 
    </div>
 
 
    <!--
        Segundo benefício apresentado na página.
        Destaca a ideia de segurança durante a compra.
    -->
    <div class="beneficio">
 
        <!--
            O símbolo de confirmação reforça visualmente
            a mensagem de compra segura.
        -->
        <span>✓</span>
 
        <div>
 
            <!--
                Título do segundo benefício.
            -->
            <strong>
                Compra segura
            </strong>
 
            <!--
                Explica de forma curta a proposta
                de segurança do pagamento.
            -->
            <small>
                Pagamento protegido
            </small>
 
        </div>
 
    </div>
 
 
    <!--
        Terceiro benefício apresentado na página.
        Destaca a qualidade dos produtos disponíveis.
    -->
    <div class="beneficio">
 
        <!--
            O símbolo de estrela é utilizado para representar
            qualidade e destaque dos produtos.
        -->
        <span>★</span>
 
        <div>
 
            <!--
                Título do terceiro benefício.
            -->
            <strong>
                Qualidade
            </strong>
 
            <!--
                Explica que os produtos exibidos na loja
                foram selecionados para compor o catálogo.
            -->
            <small>
                Produtos selecionados
            </small>
 
        </div>
 
    </div>
 
</section>
 
 