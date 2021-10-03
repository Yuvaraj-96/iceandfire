
async function getdata()
{
    try{
    const data = await fetch("https://www.anapioficeandfire.com/api/books?page=1&pageSize=6",{method:"GET"});
    const books= await data.json();
    //console.log(book.name);
      
      
    const bookdiv= document.querySelector(".books");
// <img src="${book.url}" alt="Book Image"> 
      //<a href="${book.url}"</p>
      bookdiv.innerHTML=""
    books.forEach(book => {    
      
        bookdiv.innerHTML+= `<div class="container1">  
        <img  class="bookimg" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Game_of_Thrones_Season_8.png" alt="">
        <h2>${book.name}</h2>
        <h4>ISBN : <span class="valuefornt">${book.isbn}</span></h4>
        <h4>Number Of Pages : <span class="valuefornt">${book.numberOfPages}</span></h4>
        <h4>Authors : <span class="valuefornt">${book.authors}</span></h4>
        <h4>Publisher : <span class="valuefornt">${book.publisher}</span></h4>
        <h4>Released : <span class="valuefornt">${book.released}</span></h4>
        <div class=characters${book.isbn}></div>
        </div>`   
        
        getcharacters(book.characters,book.isbn);
    });
} catch(err)
{
    console.log(err.message);
  
}
  nextprev();
  heading();
}


async function getcharacters(characters,isbn)
{
  var charname ="";
  for(var i=0; i<5;i++){
     const charact = await fetch(characters[i],{method:"GET"});
    const chars= await charact.json();
  //console.log(chars.name);
    if(chars.name != null && chars.name !="")
      {
         charname+=chars.name;
        if(i!=4)
          {
            charname+=", "
          }
      }    
  }
  // console.log("charname "+charname);
   
   const chardiv= document.querySelector(".characters"+isbn);
   chardiv.innerHTML+=`<h4>Characters : <span class="valuefornt">${charname}</span></h4>`;  
}

function nextprev()
{
  const nextprev= document.querySelector(".nextprev");
  nextprev.innerHTML="";
  nextprev.innerHTML+=`<button onclick="nextprevdata('prev')" class="prev nav">&#8249;</button>
  <button href="" class="next nav" onclick="nextprevdata('next')">&#8250;</button>`;
  
}

function heading()
{
  const nextprev= document.querySelector(".header");
  nextprev.innerHTML="";
  nextprev.innerHTML+=`<img  class="logoimg" src="https://www.logolynx.com/images/logolynx/f6/f6c636e38b6e5e12f4877e6d4f420d73.png"> 
  <div class="header-right">
    <a class="active home"  onclick="getdata()" href="#home">Home</a>
  </div>
  <div class="search">
    <input type="text" id="searchvalue" placeholder="Search Book Here" onblur="getbook(this.value)"></input>
  </div>`;
}
async function getbook(searchvalue){
  var url="";
  console.log(searchvalue);
  
  if(typeof Number(searchvalue) == 'number')
    {    
      url="https://www.anapioficeandfire.com/api/books/"+searchvalue;
    }else if(Number(searchvalue) == NaN){
      alert(" Kindly Enter Book Number")
    }
  
  try{
    const data = await fetch(url,{method:"GET"});
    const book= await data.json();   
    const bookdiv= document.querySelector(".books");
         bookdiv.innerHTML="";
         const nextprev= document.querySelector(".nextprev");
         nextprev.innerHTML="";
        bookdiv.innerHTML+= `<div class="booksearchcontainer1">  
        <img  class="booksearchimg" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Game_of_Thrones_Season_8.png" alt="">
        <div class="searchcontent">
        <h2>${book.name}</h2>
        <h4>ISBN : <span class="valuefornt">${book.isbn}</span></h4>
        <h4>Number Of Pages : <span class="valuefornt">${book.numberOfPages}</span></h4>
        <h4>Authors : <span class="valuefornt">${book.authors}</span></h4>
        <h4>Publisher : <span class="valuefornt">${book.publisher}</span></h4>
        <h4>Released : <span class="valuefornt">${book.released}</span></h4> 
        <div class=characters${book.isbn}></div>
        </div>
        </div>
        
        <div class="searchcontent">
        
        </div>
        
        
        `;
        // 
        getcharacters(book.characters,book.isbn);
   
} catch(err)
{
    console.log(err.message);
  
}
  
  
}


//getbook(1);

async function nextprevdata(direction)
{
  var url="";
  
  if(direction=="next")
    {
      url="https://www.anapioficeandfire.com/api/books?page=2&pageSize=6"
      
    }else if(direction=="prev")
      {
        url="https://www.anapioficeandfire.com/api/books?page=1&pageSize=6";
      }
  
    try{
    const data = await fetch(url,{method:"GET"});
    const books= await data.json();
    //console.log(book.name);
      
    const bookdiv= document.querySelector(".books");
// <img src="${book.url}" alt="Book Image"> 
      //<a href="${book.url}"</p>
      bookdiv.innerHTML=""
    books.forEach(book => {    
      
        bookdiv.innerHTML+= `<div class="container1">  
        <img  class="bookimg" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Game_of_Thrones_Season_8.png" alt="">
        <h2>${book.name}</h2>
        <h4>ISBN : <span class="valuefornt">${book.isbn}</span></h4>
        <h4>Number Of Pages : <span class="valuefornt">${book.numberOfPages}</span></h4>
        <h4>Authors : <span class="valuefornt">${book.authors}</span></h4>
        <h4>Publisher : <span class="valuefornt">${book.publisher}</span></h4>
        <h4>Released : <span class="valuefornt">${book.released}</span></h4>
        <div class=characters${book.isbn}></div>
        </div>`   
        
        getcharacters(book.characters,book.isbn);
    });
} catch(err)
{
    console.log(err.message);
  
}
  nextprev();
  heading();
}
getdata();

