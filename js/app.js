/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/

const intialTime = performance.now(); /// performance time 

  const app = ()=>{ //containing the app

    const data       = document.querySelectorAll("section"); //return nodelist of all sections ==> use for each to loop
    const navBarList =document.querySelector('ul'); // catch the ul 
    const fragment   =document.createDocumentFragment(); ///prove the performance
    

       //intersection observer api 
      const secOptions    ={
        root:null, //viewport
        threshold:0.5,
        rootMargin:"0px"
    
       };
       //intersection observer // when scrolling, the target section will be active with designed circles
       const secObserver = new IntersectionObserver((enteries,secObserver)=>{
        enteries.forEach(entry=>{ ///each section el 
            if(!entry.isIntersecting){
                entry.target.classList.remove('your-active-class') ///show off the circle
            }else{
            
            entry.target.classList.add('your-active-class')/// show on the circle

            }
        })

       },secOptions)
    
    
            //adding  section automatic to navigation bar 
        data.forEach(el=>{
            // created li and a for each section in the list.
           const newELement = document.createElement('li'); // creating unordered list 
           const links      = document.createElement('a'); //create the hyperlink 
           const dataNav    = el.getAttribute('data-nav');// get an atomatic inner text for every section will be add in the future
           

           links.textContent = dataNav; //dataNav variable sets for the text content of each link.

            

             //scroll to each link to appropiate section       
            
            links.addEventListener("click",() =>{
                el.scrollIntoView({behavior:"smooth"}); 
            });
           
                
           secObserver.observe(el) //// observing every section el
           

    
           newELement.appendChild(links)  //a added to li
           fragment.appendChild(newELement);//for better performance
    
        });

        navBarList.appendChild(fragment); ///added to the dom 
   
    
    }


app();

const endingTime = performance.now();
console.log(`The code took ${endingTime -intialTime} ms`)
    
 
 

            