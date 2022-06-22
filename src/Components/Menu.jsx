import React, { useEffect, useState } from 'react'

function Menu() {

    const [menu, setMenu] = useState([]);

    useEffect(()=> {
        getMenu();
    },[]);

    const getMenu = async ()=> {
        const api = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}`);

        const data = await api.json();

        setMenu(data.week)
        console.log(menu);
    }

  return (
    <div>Menu</div>
  )
}

export default Menu