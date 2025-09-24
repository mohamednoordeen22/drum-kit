// function w(){
//      document.getElementsByClassName("w")[0].innerHTML="w"+"<audio src='./sounds/tom-1.mp3' autoplay hidden></audio>";

// }


// document.getElementsByClassName("w")[0].addEventListener("click",w)

// function a(){
//      document.getElementsByClassName("a")[0].innerHTML="a"+"<audio src='./sounds/tom-2.mp3' autoplay ></audio>";
     
// }


// document.getElementsByClassName("a")[0].addEventListener("click",a)

// function s(){
//      document.getElementsByClassName("s")[0].innerHTML="s"+"<audio src='./sounds/tom-3.mp3' autoplay ></audio>";
     
// }

// document.getElementsByClassName("s")[0].addEventListener("click",s)

// function d(){
//      document.getElementsByClassName("d")[0].innerHTML="d"+"<audio src='./sounds/tom-4.mp3' autoplay></audio>";
// }


// document.getElementsByClassName("d")[0].addEventListener("click",d)

// function j(){
//      document.getElementsByClassName("j")[0].innerHTML="j"+"<audio src='./sounds/snare.mp3' autoplay hidden></audio>";
     
// }


// document.getElementsByClassName("j")[0].addEventListener("click",j)

// function k(){
//      document.getElementsByClassName("k")[0].innerHTML="k"+"<audio src='./sounds/crash.mp3' autoplay hidden></audio>";
    
// }


// document.getElementsByClassName("k")[0].addEventListener("click",k)

// function l(){
//      document.getElementsByClassName("l")[0].innerHTML="l"+"<audio src='./sounds/kick-bass.mp3' autoplay hidden></audio>";

// }


// document.getElementsByClassName("l")[0].addEventListener("click",l)


// document.addEventListener("keypress",function(event){
//      let letter=event.key;
//      if(letter=='w')
//      {
//           w();
//      }
//      else if(letter=='a')
//      {
//           a();
//      }
//      else if(letter=='s')
//      {
//           s();
//      }
//      else if(letter=='d')
//      {
//           d();
//      }
//      else if(letter=='j')
//      {
//           j();
//      }
//      else if(letter=='k')
//      {
//           k();
//      }
//      else
//      {
//           l();
//      }
// })

var buttonlength=document.querySelectorAll(".drum").length;

for(let i=0;i<buttonlength;i++)
{
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          var clickedletter=this.innerHTML;
          makesound(clickedletter);
          animaeffect(clickedletter)
     });
}

function makesound(letter){
     switch(letter)
     {
          case 'w':
               var w=new Audio("./sounds/tom-1.mp3");
               w.play();
               break;
          
          case 'a':
               var a=new Audio("./sounds/tom-2.mp3");
               a.play();
               break;
          
          case 's':
               var s=new Audio("./sounds/tom-3.mp3");
               s.play();
               break;

          case 'd':
               var d=new Audio("./sounds/tom-4.mp3");
               d.play();
               break;

          case 'j':
               var j=new Audio("./sounds/snare.mp3");
               j.play();
               break;

          case 'k':
               var k=new Audio("./sounds/crash.mp3");
               k.play();
               break;

          case 'l':
               var l=new Audio("./sounds/kick-bass.mp3");
               l.play();
               break;
     }
}

document.addEventListener("keypress",function(event){
     makesound(event.key);
});

function animaeffect(button1letter)
{
     var char=document.querySelector("."+button1letter);
     char.classList.add("pressed");
     setTimeout(function(){
          document.querySelector("."+button1letter).classList.remove("pressed")
     },300);
}