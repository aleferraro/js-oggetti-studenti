/*
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
  'nome': 'Alessandro',
  'cognome': 'Ferraro',
  'età': 28
};

document.write('<h1>Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.</h1>');

//Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in student){
  document.write('<p>La proprietà '+key+' dello studente è: '+student[key]+'</p>');
}

//Creare un array di oggetti di studenti.
var students = [
  {
    'nome': 'Alessandro',
    'cognome': 'Ferraro',
    'età': 28
  },
  {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'età': 25
  },
  {
    'nome': 'Paolo',
    'cognome': 'Bianchi',
    'età': 35
  }
];

document.write('<h1>Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome</h1>');

//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for(var i=0; i<students.length;i++){
  document.write('<p>Il nome dello studente numero '+(i+1)+' è: '+students[i]['nome']+'</p>');
  document.write('<p>Il cognome dello studente numero '+(i+1)+' è: '+students[i]['cognome']+'</p>');
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newStudent = {
  'nome': undefined,
  'cognome': undefined,
  'età': undefined
};

newStudent.nome = prompt('Inserisci il nome');
newStudent.cognome = prompt('Inserisci il cognome');
newStudent.età = parseInt(prompt('Inserisci l\'età'));

console.log(newStudent);

students.push(newStudent);

console.log(students);

document.write('<h1>Lo studente aggiunto dall\'utente è:</h1>');
for (var key in students[3]){
  document.write('<p>'+key+': '+students[3][key]+'</p>');
}
