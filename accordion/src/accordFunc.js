import {useState, useEffect} from "react"
import './accordFunc.css'

const AccordionFunc = ()=>{
    const[countries, setCountries]=useState([])
    const[activeIndex, setActiveIndex]=useState("")
    const[showMore, setShowMore]=useState(false)

    useEffect(()=>{
        fetch("https://countriesnow.space/api/v0.1/countries/capital")
        .then(res=>res.json())
        .then(data=>setCountries(data.data))
        .catch(error=>console.log(error))
    },[])
    return(
        <div>
            {countries.slice(0, showMore ? countries.length : 100).map((country, index)=>(
                <div key={index} className="country1">
                    <button className="but1" onClick={()=>setActiveIndex((prevState =>prevState === index ? null:index))}>{country.name}</button>
                    {index === activeIndex && (
                        <div>
                        <p className="capital1"> Capital : {country.capital}</p>
                        <p className="iso21"> iso2 : {country.iso2}</p>
                        <p className="iso31"> iso3 : {country.iso3}</p>
                        </div>
                    )}
                </div>
            ))}
            <div>
            <button className="show1" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    ) 
}

export default AccordionFunc