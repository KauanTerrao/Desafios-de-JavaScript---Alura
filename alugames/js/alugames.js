function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let item = gameClicado.getElementsByClassName('dashboard__item__img')[0];
    let link = gameClicado.getElementsByTagName('a')[0];

    if (item.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Tem certeza que deseja realizar a devolução?')) {
            item.classList.remove('dashboard__item__img--rented');
            link.classList.remove('dashboard__item__button--return');
            link.innerHTML = 'Alugar';
        }
    } else {
        item.classList.add('dashboard__item__img--rented');
        link.classList.add('dashboard__item__button--return');
        link.innerHTML = 'Devolver';
    }

    const alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log('Jogos alugados:', alugados);
}