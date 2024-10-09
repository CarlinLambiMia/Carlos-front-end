const body = document.querySelector('body');
const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function criarMenu() {
    const header = document.createElement('header');
    header.style.backgroundColor = '#071D41';
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    return { header, nav, ul };
}

function usarMenu() {
    const { header, nav, ul } = criarMenu();
    header.style.backgroundColor = '#071D41';
    header.style.fontFamily = 'Arial, sans-serif';
    ul.style.height = '40px';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';

    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nome;
        a.href = item.url;
        a.style.textDecoration = 'none';
        a.style.color = 'white';

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    document.body.prepend(header);
}

usarMenu();