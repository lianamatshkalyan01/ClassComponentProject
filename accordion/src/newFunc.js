import {useState, useEffect} from "react"
import { useParams, Link} from 'react-router-dom'

const AccordionNewFunc = ()=>{
    const {page} = useParams();
    const[country, setCountries]=useState([])
    const[activeIndex, setActiveIndex]=useState("")
    const [pages, setPages] = useState(0);

    const limit = 5;
    const offset = (page-1)*limit;

    useEffect(()=>{
        fetch(`http://localhost:4000/country?limit=${limit}&offset=${offset}`)
        .then(res=>res.json())
        .then(({country, count})=>{
            setCountries(country)
            setPages(Math.ceil(count/ limit))})
        .catch(error=>console.log(error))
    },[page])
    return(
        <div>
            {country.map((country, index)=>(
                <div key={index}>
                    <button onClick={()=>setActiveIndex((prevState =>prevState === index ? null:index))}>{country.name}</button>
                    {index === activeIndex && (
                        <div>
                        <p> Capital : {country.capital}</p>
                        <p> land_area : {country.land_area}</p>
                        <p> createdAt : {country.createdAt}</p>
                        <p> updatedAt : {country.updatedAt}</p>
                        </div>
                    )}
                </div>
            ))}
             <div>
          {Array.from(Array(pages).keys()).map((el)=><Link to={`/newfunction/${el+1}`} key={el}><button>{el+1}</button></Link>)}
        </div>
        </div>
    ) 
}

export default AccordionNewFunc