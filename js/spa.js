/**
 * 💡 ATIVIDADE 3 - Single Page Application (SPA) e Templates
 * O objetivo aqui é carregar o conteúdo das páginas (home, projetos, cadastro)
 * dinamicamente no <main>, simulando a navegação de um SPA.
 */

// 1. Definição dos Templates JavaScript (Strings HTML)

// Conteúdo da página "Projetos" (main da projetos.html)
// Os links de ação (Voluntariar, Apoiar, etc.) já estão configurados com data-page="cadastro"
const templateProjetos = `
    <section class="grid-item-12">
        <h2>Projetos Sociais da Fundação Terra Renovada</h2>
        
        <div class="cards-container">
            <article class="card">
                <img class="card-imagem" src="imagens/imagensprojetos/projeto1350.png" alt="Projeto Reflorestar">
                <div class="card-conteudo">
                    <h3 id="reflorestar">1. Projeto Reflorestar</h3>
                    <span class="badge-status badge-andamento">Em Andamento</span>
                    <p><strong>Objetivo:</strong> Plantio de árvores em áreas degradadas e reflorestamento de matas ciliares.</p>
                    <p><strong>Atividades:</strong> Mutirões de plantio, acompanhamento do crescimento das mudas e manutenção das áreas.</p>
                    <div class="card-botoes">
                        <a href="#" class="btn btn-secundario-outline spa-link" data-page="cadastro">Voluntariar</a>
                    </div>
                </div>
            </article>

            <article class="card">
                <img class="card-imagem" src="imagens/imagensprojetos/projeto2350.png" alt="Projeto Limpeza e Conservação">
                <div class="card-conteudo">
                    <h3 id="limpeza">2. Projeto Limpeza e Conservação</h3>
                    <span class="badge-status badge-andamento">Em Andamento</span>
                    <p><strong>Objetivo:</strong> Limpeza de rios, praias, praças e parques urbanos.</p>
                    <p><strong>Atividades:</strong> Coleta de lixo, separação de recicláveis e conscientização comunitária.</p>
                    <div class="card-botoes">
                        <a href="#" class="btn btn-secundario-outline spa-link" data-page="cadastro">Voluntariar</a>
                    </div>
                </div>
            </article>
            
            <article class="card">
                <img class="card-imagem" src="imagens/imagensprojetos/projeto3350.png" alt="Projeto Educação Ambiental">
                <div class="card-conteudo">
                    <h3 id="educacao">3. Projeto Educação Ambiental</h3>
                    <span class="badge-status badge-concluido">Concluído</span>
                    <p><strong>Objetivo:</strong> Levar conhecimento sobre sustentabilidade e preservação da natureza para escolas e comunidades.</p>
                    <p><strong>Atividades:</strong> Palestras, oficinas de reciclagem, jogos educativos e visitas guiadas à natureza.</p>
                    <div class="card-botoes">
                        <a href="#" class="btn btn-secundario-outline spa-link" data-page="cadastro">Apoiar</a>
                    </div>
                </div>
            </article>
            
            <article class="card">
                <img class="card-imagem" src="imagens/imagensprojetos/projeto4350.png" alt="Projeto Comunidade Verde">
                <div class="card-conteudo">
                    <h3 id="comunidade">4. Projeto Comunidade Verde</h3>
                    <span class="badge-status badge-andamento">Em Andamento</span>
                    <p><strong>Objetivo:</strong> Engajar a população local em ações de sustentabilidade e melhorias ambientais.</p>
                    <p><strong>Atividades:</strong> Hortas comunitárias, compostagem e capacitação para práticas sustentáveis.</p>
                    <div class="card-botoes">
                        <a href="#" class="btn btn-secundario-outline spa-link" data-page="cadastro">Voluntariar</a>
                    </div>
                </div>
            </article>
            
            <article class="card">
                <img class="card-imagem" src="imagens/imagensprojetos/projeto5350.png" alt="Projeto Voluntariado Ativo">
                <div class="card-conteudo">
                    <h3>5. Projeto Voluntariado Ativo</h3>
                    <span class="badge-status badge-andamento">Em Andamento</span>
                    <p><strong>Objetivo:</strong> Engajar voluntários para atuarem em todos os projetos da ONG.</p>
                    <p><strong>Atividades:</strong> Plantio de árvores, limpeza de áreas verdes, eventos educativos e campanhas de conscientização.</p>
                    <div class="card-botoes">
                        <a href="#" class="btn btn-secundario-outline spa-link" data-page="cadastro">Inscrever-se</a>
                    </div>
                </div>
            </article>

            <article class="card">
                <img class="card-imagem" src="imagens/imagensprojetos/projeto6350.png" alt="Projeto Parcerias Sustentáveis">
                <div class="card-conteudo">
                    <h3>6. Projeto Parcerias Sustentáveis</h3>
                    <span class="badge-status badge-concluido">Concluído</span>
                    <p><strong>Objetivo:</strong> Trabalhar com empresas e outros órgãos para patrocínio e doações de materiais.</p>
                    <p><strong>Atividades:</strong> Desenvolvimento de projetos patrocinados, fornecimento de recursos e divulgação de ações.</p>
                    <div class="card-botoes">
                        <a href="#" class="btn btn-secundario-outline spa-link" data-page="cadastro">Parceria</a>
                    </div>
                </div>
            </article>
        </div>

        <section class="grid-item-12">
            <h2>Como ser Voluntário na Fundação Terra Renovada</h2>
            <img src="imagens/imagensprojetos/comoservoluntario300.png" alt="Como ser Voluntário na Fundação Terra Renovada">
            <p><strong>Cadastre-se no site:</strong>
                <br>Acesse o site da ONG, vá até um dos eventos presenciais ou na nossa sede.
                <br>Preencha o formulário de voluntariado com informações básicas: nome, contato, idade e endereço.
            </p>
            <p>Voluntariado é mais do que ajudar</p>
            <div style="text-align: center; margin-bottom: var(--espaco-lg);">
                <a href="#" class="btn btn-primario spa-link" data-page="cadastro">
                    Quero ser Voluntário Agora!
                </a>
            </div>
        </section>

        <section class="grid-item-12">
            <h2>Como Doar</h2>
            <img src="imagens/imagensprojetos/comodoar300.png" alt="Como Doar">
            <p>Mesmo pequenas contribuições fazem grande diferença!</p>
            <h3>Tipos de doações</h3>
            <ul>
                <li><strong>Materiais:</strong> Sacos de lixo, luvas, pás, mudas, sementes, recipientes, materiais de oficina</li>
                <li><strong>Doação em dinheiro:</strong> Conta bancária da instituição, PIX, campanhas online (vaquinhas eletrônicas)</li>
                <li><li><strong>Voluntariado/mão de obra:</strong> Pessoas se inscrevem nas ações práticas</li>
                <li>Parcerias com empresas/patrocínio: Empresas podem patrocinar eventos, fornecer insumos, logística, divulgação</li>
                <li><strong>Doações recorrentes/"amigos da fundação"</strong>: Pessoas que doam mensalmente um valor fixo pequeno.</li>
            </ul>
        </section>
    </section>
`;

// Conteúdo da página "Home" (main da index.html)
const templateHome = `
    <section class="quem-somos grid-item-12">
        <h2>Quem Somos</h2>
        <picture>
            <img src="imagens/voluntariosemacao3300.png" alt="Voluntários em Ação">
        </picture>
        <p> A <strong>Fundação Terra Renovada</strong> nasceu do desejo de transformar pequenas atitudes em grandes mudanças. Acreditamos que a preservação do meio ambiente começa com o nosso próprio bairro, com ações simples e coletivas.<br>
        Somos um grupo de voluntários unidos pela vontade de cuidar da natureza, promovendo mutirões de limpeza, plantio de árvores, educação ecológica e incentivo ao consumo consciente. Não esperamos pelos outros - agimos com as próprias mãos.<br>
        Nosso propósito é renovar o planeta começando pela nossa comunidade, inspirando pessoas a cuidarem do lugar onde vivem, cada árvore plantada, cada saco de lixo recolhido e cada pessoa conscientizada é um passo rumo a um futuro mais verde.<br>
        <br><strong>Somos a Fundação Terra Renovada.
        <br>A natureza renovada pelas nossas mãos.
        </strong>
        </p>
    </section>
    <section class="fale-conosco grid-item-12">
        <h2>Fale Conosco | Onde estamos</h2>
        <address>
            <p>Endereço: Rua Alto Plano, 555 - Bairro: Jardim Verde - São Paulo/SP</p>
            <p>Telefone: (11) 97983-0073</p>
            <p>Email: contato@terrarenovada.org.br</p>
        </address>
    </section>
`;

// Conteúdo da página "Cadastro" (main da cadastro.html)
const templateCadastro = `
    <section class="grid-item-12">
        <h2>Formulário de Cadastro de Voluntários</h2>
        
        <img class="cadastro-image" src="imagens/imagenscadastro/cadastro300.png" alt="Formulário de cadastro">
        
        <p>Preencha o formulário para se candidatar a voluntário. </p>
        <p style="margin-bottom: var(--espaco-lg);"><i>Todos os itens são obrigatórios.</i></p>
        
        <div id="area" class="formulario-container">
            <form action="#" method="POST" autocomplete="off" id="form-cadastro">
                <fieldset id="formulario-pessoal">
                    <legend>Informações Pessoais</legend>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nome">Nome Completo</label>
                            <input type="text" id="nome" name="nome" required>
                            <span class="mensagem-erro"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" name="email" required>
                            <span class="mensagem-erro"></span>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="CPF">CPF</label>
                            <input type="text" id="CPF" name="CPF"
                                        placeholder="000.000.000-00" required>
                            <span class="mensagem-erro"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="datadenascimento">Data de Nascimento</label>
                            <input type="date" id="datadenascimento" name="Data de nascimento" required>
                            <span class="mensagem-erro"></span>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="tel">Telefone (WhatsApp)</label>
                            <input type="tel" id="tel" name="tel"
                                        placeholder="(00)90000-0000" required>
                            <span class="mensagem-erro"></span>
                        </div>

                        <div class="form-group">
                            <label for="CEP">CEP</label>
                            <input type="text" id="CEP" name="CEP"
                                        placeholder="00000-000" required>
                            <span class="mensagem-erro"></span>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group span-2">
                            <label for="endereco">Endereço Completo</label>
                            <input type="text" id="endereco" name="endereco" required>
                            <span class="mensagem-erro"></span>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="cidade">Cidade</label>
                            <input type="text" id="cidade" name="cidade" required>
                            <span class="mensagem-erro"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="estado">Estado</label>
                            <select id="estado" name="estado" required>
                                <option value="" disabled selected>Selecione o Estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="SP">São Paulo</option>
                                <option value="TO">Tocantins</option>
                            </select>
                            <span class="mensagem-erro"></span>
                        </div>
                    </div>
                    
                </fieldset>

                <fieldset id="formulario-interesses">
                    <legend>Interesses e Logística</legend>

                    <div class="form-group span-2">
                        <label>Áreas de Interesse (Você pode escolher mais de uma)</label>
                        <div class="areas-interesse-grid">
                            
                            <input type="checkbox" id="int_reflorestar" name="interesse[]" value="Reflorestar">
                            <label for="int_reflorestar">Reflorestamento</label>
                            
                            <input type="checkbox" id="int_limpeza" name="interesse[]" value="Limpeza">
                            <label for="int_limpeza">Limpeza Urbana/Rios</label>
                            
                            <input type="checkbox" id="int_educacao" name="interesse[]" value="Educacao">
                            <label for="int_educacao">Educação Ambiental</label>
                            
                            <input type="checkbox" id="int_comunidade" name="interesse[]" value="Comunidade">
                            <label for="int_comunidade">Hortas Comunitárias</label>s

                            <input type="checkbox" id="int_logistica" name="interesse[]" value="Logistica">
                            <label for="int_logistica">Logística/Administrativo</label>
                            
                        </div>
                       <span class="mensagem-erro" id="interesse-erro"></span>
                    </div>
                    
                    <div class="form-row" style="margin-top: var(--espaco-md);">
                        <div class="form-group">
                            <label for="disponibilidade">Disponibilidade</label>
                            <select id="disponibilidade" name="disponibilidade" required>
                                <option value="" disabled selected>Selecione a frequência</option>
                                <option value="mensal">Mensal (eventos)</option>
                                <option value="semanal">Semanal (dedicação fixa)</option>
                                <option value="ocasional">Apenas ocasionalmente/Pontual</option>
                            </select>
                            <span class="mensagem-erro"></span>
                        </div>
                        <div class="form-group">
                            <label for="como_soube">Como soube da Terra Renovada?</label>
                            <input type="text" id="como_soube" name="como_soube" placeholder="Redes sociais, Amigo, Evento, etc.">
                            <span class="mensagem-erro"></span>
                        </div>
                    </div>

                    <div class="form-group span-2">
                        <label for="habilidades">Habilidades / Observações Adicionais</label>
                        <textarea id="habilidades" name="habilidades" rows="4" placeholder="Ex: Sou motorista, tenho experiência em carpintaria, sou bom com redes sociais, etc."></textarea>
                    </div>
                </fieldset>
                <div class="btn-container">
                    <button type="submit" class="btn btn-primario">Enviar Cadastro</button>
                </div>
            </form>
            <div id="mensagem-sucesso" style="display:none; text-align: center; margin-top: 20px; color: var(--cor-secundaria-base); font-weight: bold; font-size: 1.2em;">
                Cadastro enviado com sucesso! Obrigado por se juntar à Terra Renovada.
            </div>
        </div>
    </section>
`;

// 2. Mapeamento das rotas
const routes = {
    'home': templateHome,
    'projetos': templateProjetos,
    'cadastro': templateCadastro
};

// 3. Função para carregar o conteúdo (Manipulação do DOM)
// Função loadPage agora aceita o nome da página e a âncora
function loadPage(pageName, anchor = '') {
    const main = document.querySelector('main');
    const content = routes[pageName] || routes['home']; 

    // Manipulação do DOM: Insere o novo conteúdo no <main>
    main.innerHTML = content;

    // Atualiza o estado da navegação (classe 'ativo')
    document.querySelectorAll('.spa-link').forEach(link => {
        link.classList.remove('ativo');
        // Remove a classe 'ativo' do dropbtn também
        const dropbtn = link.closest('.dropdown')?.querySelector('.dropbtn');
        if(dropbtn) dropbtn.classList.remove('ativo');
    });

    // Encontra e ativa o link correto, checando se é um link com âncora ou link de página
    const fullDataPage = `${pageName}${anchor ? '#' + anchor : ''}`;
    const activeLink = document.querySelector(`.spa-link[data-page="${fullDataPage}"]`) || 
                       document.querySelector(`.spa-link[data-page="${pageName}"]`);
                       
    if (activeLink) {
        activeLink.classList.add('ativo');
        // Trata o caso do link ser um item de dropdown
        const dropdown = activeLink.closest('.dropdown');
        if (dropdown) {
            // Ativa o link principal do dropdown (Projetos)
            dropdown.querySelector('.dropbtn').classList.add('ativo');
        }
    }

    // Após carregar o conteúdo de cadastro, inicializamos a validação do formulário
    if (pageName === 'cadastro') {
        initializeFormValidation();
    }

    // CÓDIGO DE ROLAGEM: Rola para a âncora ou para o topo
    if (anchor) {
        // Usa setTimeout para garantir que a rolagem ocorra após o browser renderizar o novo DOM
        setTimeout(() => {
            const targetElement = document.getElementById(anchor);
            if (targetElement) {
                 targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        }, 0);
        
    } else {
        // Se for só a página principal, rola para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 4. Inicializa o SPA - AGORA USANDO DELEGAÇÃO DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    
    // --- NOVO: Listener de CLIQUE UNIFICADO (Delegação de Eventos) ---
    // Anexa o listener ao documento, garantindo que funcione para elementos carregados dinamicamente.
    document.addEventListener('click', (event) => {
        
        // 1. Encontra o link .spa-link clicado (ou o mais próximo)
        const link = event.target.closest('.spa-link');
        
        if (!link) return; // Se o clique não foi em um .spa-link, ignora.
        
        event.preventDefault(); 
        
        const fullPageName = link.getAttribute('data-page'); 
        
        // Separa a página da âncora
        const parts = fullPageName.split('#'); 
        const pageName = parts[0]; 
        const anchor = parts[1] || ''; 
        
        // Atualiza a URL: #pagina ou #pagina#ancora
        history.pushState(null, '', `#${pageName}${anchor ? '#' + anchor : ''}`); 
        
        loadPage(pageName, anchor); 
        
        // Fecha o menu hambúrguer após o clique
        const menuToggle = document.getElementById('menu-toggle-id');
        if(menuToggle) menuToggle.checked = false;
        
    });
    // --- FIM NOVO: Listener de CLIQUE UNIFICADO ---


    // Trata a navegação por histórico (popstate)
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1);
        const parts = hash.split('#');
        const pageName = parts[0] || 'home';
        const anchor = parts[1] || '';
        loadPage(pageName, anchor);
    });

    // Carrega a página inicial
    const initialHash = window.location.hash.substring(1);
    const initialParts = initialHash.split('#');
    const initialPage = initialParts[0] || 'home';
    const initialAnchor = initialParts[1] || '';
    loadPage(initialPage, initialAnchor);
});


//---------------------------------------------------------
// 💡 ATIVIDADE 3 - Validação de Formulário
//---------------------------------------------------------


const style = document.createElement('style');
style.innerHTML = `
    .form-group .mensagem-erro {
        color: #ff0000; /* Vermelho forte para erro */
        font-size: 0.85em;
        margin-top: 5px;
        min-height: 1.2em; 
        display: block;
    }
    .form-group input.erro,
    .form-group select.erro,
    .form-group textarea.erro {
        border-color: #ff0000; 
        box-shadow: 0 0 0 1px #ff0000;
    }
    #form-cadastro:invalid button[type="submit"] {
        cursor: not-allowed;
        opacity: 0.7;
    }
`;
document.head.appendChild(style);



function initializeFormValidation() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const isValid = validateForm(form); 

        
        if (isValid) {
            form.style.display = 'none'; 
            document.getElementById('mensagem-sucesso').style.display = 'block'; 
            
            
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                document.getElementById('mensagem-sucesso').style.display = 'none';
            }, 5000); 
            
        } else {
            
        }
    });

    
    form.querySelectorAll('input, select, textarea').forEach(input => {
        if(input.id && input.id !== 'habilidades' && input.id !== 'como_soube') {
             input.addEventListener('blur', () => {
                 validateField(input);
             });
        }
    });
}

/**
 * Função que valida um campo individual
 * @param {HTMLElement} field 
 */
function validateField(field) {
    const errorSpan = field.parentNode.querySelector('.mensagem-erro');
    let errorMessage = '';

    // 1. Validação de campo obrigatório
    if (field.required && field.value.trim() === '') {
        errorMessage = 'Este campo é obrigatório.';
    } 
    // 2. Validações Específicas
    else if (field.id === 'email' && field.value.trim() !== '' && !isValidEmail(field.value)) {
        errorMessage = 'E-mail inválido. Use o formato nome@dominio.com.';
    }
    // O CPF agora usa a nova função que valida formato E dígitos verificadores
    else if (field.id === 'CPF' && field.value.trim() !== '' && !isValidCPF(field.value)) {
        errorMessage = 'CPF inválido. Verifique o formato e os dígitos.';
    }
    else if (field.id === 'tel' && field.value.trim() !== '' && !isValidPhone(field.value)) {
        errorMessage = 'Telefone inválido. Use o formato (00)90000-0000.';
    }
    else if (field.id === 'CEP' && field.value.trim() !== '' && !isValidCEP(field.value)) {
        errorMessage = 'CEP inválido. Use o formato 00000-000.';
    }
    else if (field.id === 'datadenascimento' && field.value.trim() !== '' && !isLegalAge(field.value)) {
          errorMessage = 'É necessário ter pelo menos 18 anos para ser voluntário.';
    }

    // 3. Exibe/Esconde a mensagem de erro
    if (errorMessage) {
        field.classList.add('erro');
        if(errorSpan) errorSpan.textContent = errorMessage;
        return false;
    } else {
        field.classList.remove('erro');
        if(errorSpan) errorSpan.textContent = '';
        return true;
    }
}

/**
 * Função que executa a validação em todos os campos
 * @param {HTMLFormElement} form O elemento formulário
 */
function validateForm(form) {
    let formValid = true;
    
    // Valida todos os campos individuais
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
        if (!validateField(field)) {
             formValid = false;
        }
    });

    // Validação dos Checkboxes (Áreas de Interesse)
    const interesseCheckboxes = form.querySelectorAll('input[name="interesse[]"]');
    const interesseErroSpan = document.getElementById('interesse-erro');
    let isAnyInterestChecked = Array.from(interesseCheckboxes).some(checkbox => checkbox.checked);

    if (!isAnyInterestChecked) {
        if(interesseErroSpan) interesseErroSpan.textContent = 'Selecione pelo menos uma Área de Interesse.';
        formValid = false;
    } else {
        if(interesseErroSpan) interesseErroSpan.textContent = '';
    }

    // Foca no primeiro campo com erro
    if (!formValid) {
        const firstErrorField = form.querySelector('.erro');
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }
    
    return formValid;
}


// 5. Funções Auxiliares de Validação de Consistência (Regex e Lógica)

/** Verifica se o email tem um formato básico válido */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function isValidCPF(cpf) {
    // 1. Checa o formato visual (000.000.000-00)
    const reFormato = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!reFormato.test(cpf)) {
        return false;
    }

    // 2. Remove a máscara para validação matemática
    cpf = cpf.replace(/\D/g, ''); 

    // 3. Elimina CPFs inválidos conhecidos (todos iguais, ex: "11111111111")
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum;
    let remainder;
    
    // 4. Validação do Primeiro Dígito Verificador
    sum = 0;
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    // 5. Validação do Segundo Dígito Verificador
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

/** Verifica se o Telefone tem o formato (00)90000-0000 */
function isValidPhone(phone) {
    const re = /^\(\d{2}\)\d{5}-\d{4}$/;
    return re.test(phone);
}

/** Verifica se o CEP tem o formato 00000-000 */
function isValidCEP(cep) {
    const re = /^\d{5}-\d{3}$/;
    return re.test(cep);
}

/** Verifica se a pessoa tem mais de 18 anos */
function isLegalAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    // Ajusta se o aniversário ainda não ocorreu este ano
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age >= 18;
}

// Implementação das máscaras de CPF, Telefone e CEP
document.addEventListener('DOMContentLoaded', () => {
    
    const mascaraCPF = (input) => {
        let value = input.value.replace(/\D/g, ''); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
        input.value = value.substring(0, 14); 
    };

    const mascaraTelefone = (input) => {
        let value = input.value.replace(/\D/g, ''); 
        value = value.replace(/^(\d{2})(\d)/g, '($1)$2'); 
        value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
        input.value = value.substring(0, 14); 
    };
    
    const mascaraCEP = (input) => {
        let value = input.value.replace(/\D/g, ''); 
        value = value.replace(/^(\d{5})(\d)/, '$1-$2'); 
        input.value = value.substring(0, 9);
    };

    const addMaskListeners = () => {
        const cpfField = document.getElementById('CPF');
        if (cpfField) {
            cpfField.addEventListener('input', () => mascaraCPF(cpfField));
        }

        const telField = document.getElementById('tel');
        if (telField) {
            telField.addEventListener('input', () => mascaraTelefone(telField));
        }
        
        const cepField = document.getElementById('CEP');
        if (cepField) {
            cepField.addEventListener('input', () => mascaraCEP(cepField));
        }
    }
    
    // Adiciona máscaras na carga inicial e após navegações SPA
    addMaskListeners();
    
    const main = document.querySelector('main');
    const observer = new MutationObserver(() => {
        if (main.querySelector('#form-cadastro')) {
            addMaskListeners();
        }
    });

    observer.observe(main, { childList: true, subtree: true });
});