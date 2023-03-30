import { Component } from "react";
import './accordClass.css'

class AccordionClass extends Component{
state={countries:[], activeIndex:null, showMore: false}

componentDidMount(){
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
    .then(res=>res.json())
    .then(data=>this.setState({countries:data.data}))
    .catch(error => console.log(error))
}

render(){
    const {countries, activeIndex, showMore} = this.state

return(
    <div className="country" >
        {countries.slice(0, showMore ? countries.length : 100).map((country, index)=>(
            <div key={index} >
                <button  className="but" onClick={()=>this.setState((prevState)=>({activeIndex:prevState.activeIndex === index ? null : index}))}> 
                {country.name}</button>
                {index === activeIndex && (
                    <div>
                        <p className="capital"> Capital : {country.capital}</p>
                        <p className="iso2"> iso2 : {country.iso2}</p>
                        <p className="iso3"> iso3 : {country.iso3}</p>
                    </div>
                ) }
            </div>

        ))}
        <div className="show">
            <button className="show" onClick={() => this.setState({showMore: !showMore})}>{showMore ? "Show Less" : "Show More"}</button>
            </div>
    </div>
)
}
}

export default AccordionClass
