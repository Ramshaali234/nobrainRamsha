import Styles5 from "../styles/Searchbar.module.css";
import { motion } from "framer-motion"
import { useRouter } from "next/router";
import { useState } from "react"


const Searchbar = () => {
  const router = useRouter();
  const [search,setSearch] = useState({
    type:"Resedential",
    price:"10000",
    city:"",
  });
  const [btn,setBtn] = useState("SALE");
  const handleSubmit = async (e)=>{
    e.preventDefault();
      router.push({
        pathname: "/search",
        query:{search:JSON.stringify(btn),
          data: JSON.stringify(search)
         }
      })
  }
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    setSearch({...search, [name]:value});
  }
    return ( 
        <>
        <div className={`${Styles5.search} search`}>
        <div className={Styles5.textContainer} >
            <span className={`${Styles5.proptype} buybtn`} onClick={
              ()=>{
                setBtn("SALE");
                document.querySelector(".rentbtn").style.backgroundColor = "rgba(0,212,255)"
                document.querySelector(".rentbtn").style.color = "white"
                document.querySelector(".buybtn").style.color = "rgba(0,0,0,0.5)"
                document.querySelector(".buybtn").style.backgroundColor = "#F0F0F0"
              }
            } >Buy Properties</span>
            <span className={`${Styles5.proptype} ${Styles5.rentbtn} rentbtn`} onClick={
              ()=>{
                setBtn("RENT");
                document.querySelector(".buybtn").style.backgroundColor = "rgba(0,212,255)"
                document.querySelector(".buybtn").style.color = "white"
                document.querySelector(".rentbtn").style.color = "rgba(0,0,0,0.5)"
                document.querySelector(".rentbtn").style.backgroundColor = "#F0F0F0"
              }
            } >Rent Properties</span>
          </div>
        <form className={Styles5.searchBar} onSubmit={handleSubmit}>
        <div className={Styles5.container}>
          <label htmlFor="property_type" className={Styles5.label}>Property Type</label>
          <select name='type' className={`${Styles5.inpt} ${Styles5.field} ${Styles5.drop}`} onChange={handleChange} required >
            <option value="Resedential">Resedential</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
        <div className={Styles5.container}>
        <label htmlFor="property_type" className={Styles5.label}>City</label>
        <input type="text" name="city" value={search.city} onChange={handleChange} className={`${Styles5.inpt} ${Styles5.field}`} placeholder="Search City" required />
        </div>
        <div className={Styles5.container}>
        <label htmlFor="property_type" className={Styles5.label}>Price Limit</label>
        <select className={`${Styles5.inpt} ${Styles5.field} ${Styles5.drop}`} name="price" onChange={handleChange} required>
          <option value="10000">PKR 10,000</option>
          <option value="50000">PKR 50,000</option>
          <option value="100000">PKR 100,000</option>
          <option value="105000">PKR 150,000</option>
          <option value="200000">PKR 200,000</option>
          <option value="250000">PKR 250,000</option>
          <option value="300000">PKR 300,000</option>
          <option value="400000">PKR 400,000</option>
          <option value="500000">PKR 500,000</option>
          <option value="600000">PKR 600,000</option>
          <option value="700000">PKR 700,000</option>
          <option value="800000">PKR 800,000</option>
          <option value="900000">PKR 900,000</option>
          <option value="1000000">PKR 1000,000</option>
        </select>
        </div>
        <motion.button className={`${Styles5.inpt} ${Styles5.searchBtn}`}
        whileTap={{
          scale:0.8
        }}
        transition={{
          type:"tween",
          duration:0.2,
          ease:"easeInOut"
        }}
        type="submit"
        >Search</motion.button>
      </form>
      </div>
        </>
     );
}
 
export default Searchbar