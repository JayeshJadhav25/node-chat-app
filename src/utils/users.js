const users = []

const addUser=({id,username,room})=>{
    //clean the data
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    //validate the user
    if(!username || !room){
        return{
            error:'Username and room are required'
        }
    }

    //check for existing user
    const existingUser=users.find((user)=>{
        return user.room===room && user.username===username
    })

    //validate username
    if(existingUser){
        return{
            error:'Username is in use'
        }
    }

    //store user
    const user={id,username,room}
    users.push(user)
    return{ user }

}

const removeUser=(id)=>{
    const index=users.findIndex((user)=>user.id===id)

    if(index !==-1){
        return users.splice(index,1)[0]
    }
}
const getUser=(id)=>{
    return users.find((user)=>user.id===id)
}

const getUsersInRoom=(room)=>{
    room=room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


// addUser({
//     id:22,
//     username:'Jayesh',
//     room:'  first'
// })

// addUser({
//     id:42,
//     username:'Mike',
//     room:'center city'
// })
// addUser({
//     id:24,
//     username:'Andrew',
//     room:'  first'
// })

// const user=getUser(2)
// console.log(user)

// const userList=getUsersInRoom('center city')
// console.log(userList)


