/**
 * A utility to create a random id
 */
 function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

const students = [
    {
      id: '4d332b1f-3ccc-466f-8be8-3bf3ce53ec63',
      name: 'Md. Masud Khan',
      email: 'masud@gmail.com'
    },
    {
      id: '89672909-3394-4ed6-969c-2f20d3b56722',
      name: 'Nishat Anjom',
      email: 'nishat32@gmail.com'
    },
    {
      id: '0f836d47-016f-4353-9cb5-466c55d11409',
      name: 'Md. Mafuj Khan',
      email: 'mafuj546@gmail.com'
    }
  ];
// create new student
students.push({
    id: uuidv4(),
    name: 'Sadiya Akter',
    email: 'sadiya23akter@gmail.com'
})

// update sudents
const updateId = '89672909-3394-4ed6-969c-2f20d3b56722';
const indexUpdate = students.findIndex(item => item.id == updateId);
const updateData = {
    name: 'Nishat Anjom Riya'
}
students[indexUpdate] = {
    ...students[indexUpdate],
    ...updateData,
}
console.log('update', students);

students.splice(indexUpdate, 1);
console.log('delete', students)

// array traverse method, forEach, map, filter, every, reduce, some, find, findIndex

// imparetive way for in or of loop
for(let i in students) console.log(students[i].name);
for(let student of students) console.log(student.name)