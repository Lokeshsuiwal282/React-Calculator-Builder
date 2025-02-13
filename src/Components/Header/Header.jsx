import React, { useState } from "react";
import logo_image from "../../assets/img/React_Calculator_Builder_logo_image_2.jpg";

export const Header = () => {
   const [isDarkTheme, setIsDarkTheme] = useState(false);

   const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
      document.body.classList.toggle("dark");
   };

   return (
      <nav className="w-full bg-white dark:bg-gray-800 shadow-md p-2 flex justify-between items-center fixed top-0">
         <div className="flex items-center">
            <img src={logo_image} alt="Logo" className="h-15 rounded-md" />
         </div>
         <button className="text-xl bg-gray-200 dark:bg-gray-700 p-3 rounded-md cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600 transition-all" onClick={toggleTheme}>
            {isDarkTheme ? "🌞 Light" : "🌙 Dark"}
         </button>
      </nav>
   );
};
