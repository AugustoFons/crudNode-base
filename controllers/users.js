import { v4 as uuidv4 } from 'uuid';

export const getUsers = (req, res) => { //http://localhost:5000/users
    console.log(users)
    res.send(users)
}

let users = []
/* //estructura para postman    
    {
        "firstName": "Augusto",
        "lastName": "Fons",
        "age": 25
    }
*/
export const createUser = (req, res) => { //http://localhost:5000/users
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the Database!`)
}

export const getUser = (req, res) => { //ej: http://localhost:5000/users/3c692f49-0eeb-42e6-aeec-9d9d604fb1ae
    const { id } = req.params
    
    const findUser = users.find((user) => user.id === id)
    res.send(findUser)
}

export const deleteUser = (req, res) => { //ej: http://localhost:5000/users/3c692f49-0eeb-42e6-aeec-9d9d604fb1ae
    const { id } = req.params
    users = users.filter((user) => user.id !== id)

    res.send(`User with the ${id} deleted from  the database`)
}

export const updateUser = (req, res) => { //ej: http://localhost:5000/users/3c692f49-0eeb-42e6-aeec-9d9d604fb1ae
    const { id } = req.params
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`User with the id: ${id} has been updated`)
}

