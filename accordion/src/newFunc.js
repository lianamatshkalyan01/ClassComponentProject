import {useState, useEffect} from "react"
import { useParams, Link} from 'react-router-dom'
import './newFunc.css'

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
                <div key={index} className="country2">
                    <button className="but2" onClick={()=>setActiveIndex((prevState =>prevState === index ? null:index))}>{country.name}</button>
                    {index === activeIndex && (
                        <div>
                        <p className="capital2"> Capital : {country.capital}</p>
                        <p className="land_area"> land_area : {country.land_area}</p>
                        <p className="createdAt"> createdAt : {country.createdAt}</p>
                        <p className="updatedAt"> updatedAt : {country.updatedAt}</p>
                        </div>
                    )}
                </div>
            ))}
             <div>
          {Array.from(Array(pages).keys()).map((el)=><Link to={`/newfunction/${el+1}`} key={el}><button className="but3">{el+1}</button></Link>)}
        </div>
        </div>
    ) 
}

export default AccordionNewFunc