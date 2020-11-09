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
}

document.write('<h1>Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.</h1>')

//Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in student){
  document.write('<p>La proprietà '+key+' dello studente è: '+student[key]);
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
]

document.write('<h1>Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome</h1>')

//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for(var i=0; i<students.length;i++){
  for(var key in students[i]){
    if((key == 'nome') || (key == 'cognome')){
    document.write('<p>La proprietà '+key+' dello studente numero '+(i+1)+' è: '+students[i][key]);
    }
  }
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newStudent = {
  'nome': undefined,
  'cognome': undefined,
  'età': undefined
}

newStudent.nome = prompt('Inserisci il nome');
newStudent.cognome = prompt('Inserisci il cognome');
newStudent.età = parseInt(prompt('Inserisci l\'età'));

console.log(newStudent);

students.push(newStudent);

console.log(students);
//I dati del nuovo studente inserito dall'utente non verranno stampati in quanto il for che procede alla stampa è antecedente ai prompt che inseriscono il nuovo studente
