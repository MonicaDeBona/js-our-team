/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
Angela Lopez   Social Media Manager  angela-lopez-social-media-manager.jpg
Scott Estrada  Developer         scott-estrada-developer.jpg
Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg
*/


//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const teamMember = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg',
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager ',
        foto : 'walter-gordon-office-manager.jpg',
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager ',
        foto : 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg',
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg',
    },
];



//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe


const team = document.getElementById('team');

for (let i = 0; i < teamMember.length; i++) {
    console.log(teamMember[i]);

    const card = document.createElement('div');
    card.classList.add('col-4','text-center');
    team.append(card);

    const currentMember = teamMember[i];
    card.innerHTML += `<h3>${currentMember.nome}</h3>`;
    card.innerHTML += `<p>${currentMember.ruolo}</p>`;
    card.innerHTML += `<img src="./img/${currentMember.foto}"</img>`;
}