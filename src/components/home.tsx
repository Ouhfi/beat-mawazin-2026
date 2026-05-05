export function Home(){
    return(
      <div className=" flex justify-between items-center m-auto w-12/12 bg-[#7A37FF] "> 
      <div className="flex items-center gap-4 justify-center ">
        <img className= " ml-10"src="/src/image/icon-icons.svg" alt="#" />
           <h1>beat</h1>
          
          </div>
           <div > 
        <ul className=" flex col  gap-2.5 mr-10 "> 
      

          <li>accueil</li>
          <li>progrmme</li>
          <li>Passeport</li>


        </ul>
      </div>
        </div>
     
    );
}
