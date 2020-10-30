import React,{useEffect,useState} from "react"

const User = ({userId}) => {

    const [user,setUser] = useState([])

    const imgTab = ["",'https://images.unsplash.com/photo-1584536682683-b79a8744eaa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1595507287504-83625092ff6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1592818800435-341fd2817aef?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80','https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80','https://images.unsplash.com/photo-1508474722893-c3ccb8918d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80','https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80','https://images.unsplash.com/photo-1502898295-455afaf0f015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'];


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
        .then(response => response.json())
        .then(json => setUser(json))
        // .then(json => console.log(json))
    },[])

    return (
        <div className="user-header">
            {user.map(({name,id}) =>
            <div className="user-h-2">
                <img alt="foto" className="foto-user" src={imgTab[id]}/>
                <p className="name-user">{name}</p>
            </div>
            
            )}
        </div>
    )
}

export default User;