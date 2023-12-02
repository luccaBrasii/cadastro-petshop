
//Dados
const raças = [
    { id: 1, nome: 'Labrador Retriever' },
    { id: 2, nome: 'Bulldog Francês' },
    { id: 3, nome: 'Dachshund' },
];

// Função para cadastrar uma nova raça
function cadastrarRaça() {
    const raçaNome = document.getElementById('raçaNome').value;

    raças.push({ id: raças.length + 1, nome: raçaNome });

    carregarListaRacas();
}

// Função para carregar a lista de raças no formulário de cadastro de cachorro
function carregarListaRacas() {

    const raçasList = document.getElementById('raçasList');
    raçasList.innerHTML = '';

    // Adiciona as raças à lista
    raças.forEach(raça => {
        const li = document.createElement('li');
        li.textContent = raça.nome;
        raçasList.appendChild(li);
    });


    carregarDropdownRacas(raças);
}

// Função para carregar o dropdown de raças no formulário de cachorro
function carregarDropdownRacas(raças) {
    const dropdown = document.getElementById('raçaSelecionada');
    dropdown.innerHTML = '';

    raças.forEach(raça => {
        const option = document.createElement('option');
        option.value = raça.id;
        option.textContent = raça.nome;
        dropdown.appendChild(option);
    });
}



const cachorros = [];

// Função para cadastrar um novo cachorro
function cadastrarCachorro() {
    const cachorroNome = document.getElementById('cachorroNome').value;
    const raçaSelecionada = document.getElementById('raçaSelecionada').value;

    const novoCachorro = { nome: cachorroNome, raçaId: raçaSelecionada };
    cachorros.push(novoCachorro);

    document.getElementById('cachorroNome').value = '';
    document.getElementById('raçaSelecionada').value = '';

    // Atualiza a lista de cachorros
    carregarListaCachorros();
}

// Função para carregar a lista de cachorros
function carregarListaCachorros() {
    // Limpa a lista de cachorros existente
    const cachorrosList = document.getElementById('cachorrosList');
    cachorrosList.innerHTML = '';

    // Adiciona os cachorros à lista
    cachorros.forEach(cachorro => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${cachorro.nome}, Raça: ${encontrarRacaPorId(cachorro.raçaId).nome}`;
        cachorrosList.appendChild(li);
    });
}

// Função auxiliar para encontrar uma raça por ID
function encontrarRacaPorId(raçaId) {
    return raças.find(raça => raça.id == raçaId) || {};
}


carregarListaRacas();
carregarListaCachorros();