function openCurtain(){
  let curtains_2 = document.querySelector("div#curtains_2");
  let curtains_array = document.querySelectorAll('div.curtain');

  curtains_2.addEventListener('click',()=>{
    console.log("Hellow");
    curtains_array.forEach(curtain=> {
      curtain.classList.toggle('open');
    });
  })


}

openCurtain();