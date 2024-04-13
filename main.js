const qoute = document.getElementById('qoute');
const author = document.getElementById('author');
fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(data => {
    qoute.innerHTML = ' " ' + data.content + ' " ';
    author.innerHTML = " ~ " + data.author;
  })


// api use when button press
{
  const btn = document.getElementById('btn');
  
  btn.addEventListener("click", getquote);

  function getquote() {
    
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        qoute.innerHTML = ' " ' + data.content + ' " ';
        author.innerHTML = " ~ " + data.author;
       document.body.style.backgroundImage="url('https://source.unsplash.com/random/mountains')";
      })
    //bodycolor();
  }
}

// random number help body color
/*
{
const bodycol=document.getElementsByTagName('body');
function bodycolor()  {
  const ran=Math.floor(Math.random() *100)+1;// 1 to 100
  // console.log(ran);
  if(ran<=30 && ran>=0){
    bodycol[0].style.backgroundColor="red";
  }
  if(ran >=31 && ran <=50){
    bodycol[0].style.backgroundColor="yellow";
  }
  if(ran >=51 && ran <=70){
    bodycol[0].style.backgroundColor="blue";
  }
  if (ran >= 71 && ran <= 100) {
    bodycol[0].style.backgroundColor = "white";
  }
}
}
*/