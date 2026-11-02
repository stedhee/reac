import React from "react"
import PageBanner from '../components/PageBanner';
import SearchBar from "../components/menu/Searchbar";
import PopularDishes from "../components/menu/PopularDishs";




const Menu = () => {
  return (
   <>
    <PageBanner
        title="Our menu"
        breadcrumb="Home / Menu"
        image="https://th.bing.com/th/id/OIG4.jA.OTOcBmNUIJ3M_ib.Q?pid=ImgGn"
      />
      

       <SearchBar/>
      
      <PopularDishes/>
      </>
  
  )
}

export default Menu
