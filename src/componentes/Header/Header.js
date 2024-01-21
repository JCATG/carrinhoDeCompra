import React from 'react';
import Search from '../Search/Search';
import Carrinho from '../Carrinho/Carrinho';
function Header(){
   return (
     <header>
       <div className="bg-yellow-200 mx-auto relative w-full z-20">
         <div className='flex justify-around items-center mx-4'>
           <Search />
           <Carrinho/>
         </div>
       </div>
     </header>
   );
}

export default Header;