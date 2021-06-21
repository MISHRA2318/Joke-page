const btn = document.querySelector('button');
const p= document.querySelector('.para');

const newJokes = async ()=>{
    const Jokes = await dadjoke();
    p.innerHTML=Jokes
}



const dadjoke= async ()=>{
    const config = await {headers : {Accept : 'application/json'}}
    const res =await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke
}


btn.addEventListener('click',newJokes);
