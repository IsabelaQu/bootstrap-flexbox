// Arquivo das automações do Menu Hamburguer 

//Selecione o botão menu pelo sei ID utilizando 'const' para não 
//modificar posteriormente
const btnMobile = documento.getElementById('btn-mobile');

/**
 * Função que alterna o estado do menu (aberto/fehcado)
 * 
 */
function toggleMenu(event) {
    // evita o comportamento padrão do evento 'toutcstart' , evitando bug em dispositivos moveis 
    if (event.tipe === 'touchstart') event.preventDefault();

    //selecione o elemento de navegação pelo seu ID
    const nav = document.getElementById('nav');

    //adiciona ou remove a classe 'active' no elemento de navegação, ativando ou desativando o menu
    nav.classList.toggle('active');

    //verifica se o menu está aberto ou não
    const isActive = nav.classList.contains('active');

    //atualiza o atributo 'aria-expanded' para melhorar a acessibilidade ao menu
    event.currentTarget.setAttribute('aria-expanded', isActive);

    // define o texto do atributo 'aria-label' dependendo do estado do menu (aberto/fechado)
    if (isActive) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

// adiciona eventos de 'click' e 'touchstart' para ativar a função toggleMenu ao interagir com o botão
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);