import React, { useEffect, useState } from "react"
import Loading from "../components/Loading";
import Header from "../components/page/Header";
import Review from "../components/Review";

const Tasks = () => {

    const [posts,setPosts] = useState([]);
    const [more,setMore] = useState(false);
    const [loading,setLoading] = useState(true)

    let tab1 = [];
    let tab2 = [];
    let helpJson = [];
    let randomTab = []

    let random;

    const randomNumber = () => {
        random = Math.floor(Math.random() * (101 - 1)) + 1;
    }

    while(randomTab.length !== 100){
        randomNumber();
        if(randomTab.indexOf(random) === -1){
            randomTab.push(random)
        }
    }

    useEffect(() => {
        for(let i=0;i<=99;i++){

            fetch(`https://jsonplaceholder.typicode.com/posts/${randomTab[i]}`)
            .then(response => response.json())
            .then(json => {
                helpJson.push(json)

                if(helpJson.length === 100){
                    setPosts(helpJson)
                }
                setLoading(false)
            })
            // .then(json => console.log(json))
        }
    },[])

    tab1 = posts.slice(0,50);
    tab2 = posts.slice(50,100);


    return (
        <div className="review">
            <Header/>
            {loading && <Loading/>}
            <h3 className="heading-3">Clients reviews</h3>
            {tab1.map((arr) => <Review key={arr.id} userId={arr.userId} id={arr.id} title={arr.title}/>)}
            {!more && <button className="btn-more-review" onClick={() => setMore(true)}>See more reviews</button>}
            {more && tab2.map((arr) => <Review key={arr.id} id={arr.id} userId={arr.userId} title={arr.title}/>)}
        </div>
    )
}

export default Tasks;