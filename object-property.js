const students = [
    {id:43, name : 'Miraj'}, {id:37, name : 'Bappy'}, {id:34, name : 'Aysha'}
];
const names = students.map(n=>n.name);
const ids = students.map(n=>n.id);

console.log(names, ids);