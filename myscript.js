document.addEventListener("scroll", changeImage);

function changeImage()
{
  let scrollY = window.scrollY;
  let tree = document.getElementById("tree");
  let sunMoon = document.getElementById("object");

  if(scrollY < 400){
    tree.src = '1.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fffecd';
  }
  if(scrollY >= 400 && scrollY < 800){
    tree.src = '1.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#2a3747';
  }
  if(scrollY >= 800 && scrollY < 1200){
    tree.src = '2.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fffecd';
  }
  if(scrollY >= 1200 && scrollY < 1600){
    tree.src = '2.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#2a3747';
  }
  if(scrollY >= 1600 && scrollY < 2000){
    tree.src = '3.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fffecd';
  }
  if(scrollY >= 2000 && scrollY < 2400){
    tree.src = '3.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#2a3747';
  }if(scrollY >= 2400 && scrollY < 2800){
    tree.src = '4.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fffecd';
  }
  if(scrollY >= 2800 && scrollY < 3200){
    tree.src = '4.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#2a3747';
  }
  if(scrollY >= 3200 && scrollY < 3600){
    tree.src = '5.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fffecd';
  }
  if(scrollY >= 3600 && scrollY < 4000){
    tree.src = '5.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#2a3747';
  }
  /*if(scrollY >= 4000 && scrollY < 4400){
    tree.src = '4.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#000';
  }
  if(scrollY >= 4400 && scrollY < 4800){
    tree.src = '4.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fff';
  }
  if(scrollY >= 4800 && scrollY < 5200){
    tree.src = '5.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fff';
  }
  if(scrollY >= 5200 && scrollY < 5600){
    tree.src = '5.png';
    sunMoon.src = 'moon.png';
    document.body.style.background = '#000';
  }
  if(scrollY >= 5600 && scrollY < 6000){
    tree.src = '5.png';
    sunMoon.src = 'sun.png';
    document.body.style.background = '#fff';
  }
  */

}

let scrollerID;
let paused = true;
let speed = 1; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 5;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 2);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event)
{
    if (event.which == 13 || event.keyCode == 13) {
        // It's the 'Enter' key
        if(paused == true) {
            scrollerID = startScroll();
            paused = false;
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);