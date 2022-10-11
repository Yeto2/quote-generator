import React , {useState , useEffect} from "react"


export default function Quote(){

        const [quote , setQuote] = useState('');
        const [author , setAuthor] = useState('');

    useEffect(()=>{
        getQuote()
    },[])
    const getQuote = ()=>{
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        fetch(url)
        .then(res=>{
            return res.json()
        }).then(data =>{
            let dataQ = data.quotes
            let randNum = Math.floor(Math.random() * dataQ.length)
            let randomQuote = dataQ[randNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }

    const handleclick = () => {
        getQuote()
    }

    return(
        <div id="quote-box">
            <div id="text">
                <p>
                    <sup><i className="fa-solid fa-quote-left"></i></sup>
                    {quote}
                    <sub><i className="fa-solid fa-quote-right"></i></sub>
                
                </p>
            </div>
            <div id="author">
                <p>{author}</p>
            </div>
            <div id="bnts">
                <button onClick={handleclick} id="new-quote">new quote</button>
                <a id="tweet-quote" target="_top" href="twitter.com/intent/tweet"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    )
}