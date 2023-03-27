import { Component } from "react";

class Accordion extends Component{
state={countries:[], activeIndex:null}

componentDidMount(){
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
    .then(res=>res.json())
    .then(data=>this.setState({countries:data.data}))
    .catch(error => console.log(error))
}

render(){
    const {countries, activeIndex} = this.state

return(
    <div>
        {countries.map((country, index)=>(
            <div key={index}>
                <button onClick={()=>this.setState((prevState)=>({activeIndex:prevState.activeIndex === index ? null : index}))}> 
                {country.name} +</button>
                {index === activeIndex && (
                    <div>
                        <p> Capital : {country.capital}</p>
                        <p> iso2 : {country.iso2}</p>
                        <p> iso3 : {country.iso3}</p>
                    </div>
                ) }
            </div>

        ))}
    </div>
)
}
}

export default Accordion
