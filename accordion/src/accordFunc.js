import {useState, useEffect} from "react"

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
                <div key={index}>
                    <button onClick={()=>setActiveIndex((prevState =>prevState === index ? null:index))}>{country.name}</button>
                    {index === activeIndex && (
                        <div>
                        <p> Capital : {country.capital}</p>
                        <p> iso2 : {country.iso2}</p>
                        <p> iso3 : {country.iso3}</p>
                        </div>
                    )}
                </div>
            ))}
            <div>
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    ) 
}

export default AccordionFunc