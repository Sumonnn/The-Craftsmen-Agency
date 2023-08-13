function page1Display(){
    document.querySelector(".page1-bottom-right-top-left").addEventListener("mouseenter",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
    })
    document.querySelector(".page1-bottom-right-top-left").addEventListener("mouseleave",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
    })
    

    document.querySelector(".page1-bottom-right-bottom").addEventListener("mouseenter",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
    })
    document.querySelector(".page1-bottom-right-bottom").addEventListener("mouseleave",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
    })
    

    document.querySelector(".page1-bottom-right-top-right").addEventListener("mouseenter",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
    })
    document.querySelector(".page1-bottom-right-top-right").addEventListener("mouseleave",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
    }) 
    
    
    document.querySelector(".page1-bottom-left").addEventListener("mouseenter",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'none';
    })
    document.querySelector(".page1-bottom-left").addEventListener("mouseleave",()=>{
        document.querySelector(".page1-bottom-left-rotate").style.display = 'block';
    })   
}
page1Display();