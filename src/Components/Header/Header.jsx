import React, { useState } from "react";
import logo_image from "../../assets/img/React_Calculator_Builder_logo_image_2.jpg";
import '../../App.style.css';
export const Header = () => {
   const [isLightTheme, setIsLightTheme] = useState(false);

   const toggleTheme = () => {
      setIsLightTheme((prevTheme) => !prevTheme);
      document.body.classList.toggle("light-theme");
   };

   return (
      <nav className="w-full bg-white shadow-md p-2 flex justify-between items-center fixed top-0 drak_light">
         <div className="flex items-center">
            <img src={logo_image} alt="Logo" className="h-12 w-70 rounded-md" />
         </div>
         <button className="text-sm bg-gray-200 dark:bg-gray-700 p-3 rounded-md cursor-pointer transition-all drak_light_button" onClick={toggleTheme}>
            {isLightTheme ? "🌞 Light" : "🌙 Dark"}
         </button>
      </nav>
   );
};
