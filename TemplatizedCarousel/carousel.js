<script>
            const pic = document.querySelector('.pic');
            const imges = pic.getElementsByTagName('img')
            const trig = document.querySelector('.trig');
            // const buttons = trig.getElementsByTagName('span');
          
            //imgFilter
            function imgFilter(event) {
              event = event ? event : window.event;
              var obj = event.srcElement ? event.srcElement : event.target;
              obj.style.display = 'none';
            }
      
          window.onload = function() {
              const carousel_module = document.querySelector('.carousel-module')
              const carousel_box = document.querySelector('.carousel-box')
              var fileLength = 0;
              var index = 0;
              var timer = setInterval(handleMove, 3000);
              var showIndex = 0;
              var averWidth = carousel_module.clientWidth;
        
              //initial width of some elements in accordance with the width of device
              pic.style.left = 0 + 'px';
              //pic.style.height = averWidth/1.714286 + 'px';
              //carousel_module.style.height = averWidth/1.714286 + 'px';
              pic.style.width = averWidth*imges.length + 'px';
      
              // console.log(carousel_module.clientWidth);
      
              for(let i=0;i<imges.length;i++){
                //imges[i].style.width = averWidth + 'px';
                //imges[i].style.height = averWidth/1.714286 + 'px';
                      if(imges[i].style.display !== 'none'){
                        showIndex+=1;
                      }
                    }
              createCarouselMoudle();
              bindEvent();
      
              //creat trig span accroding to length of displayed img 
              function createCarouselMoudle(){
                      
                      let trigHtml = '';
                      let showImgLength =0;
                      
                      for(var i = 0;i<showIndex;i++){
                      
                        trigHtml += '<span></span>';
                      }
      
                      trig.innerHTML=trigHtml;
                      buttons = trig.getElementsByTagName('span');
                      buttons[0].className = "on";
                      
                  }
      
              function buttonsShow() {
                          //将之前的小圆点的样式清除
                          for (var i = 0; i < buttons.length; i++) {
                              if (buttons[i].className == "on") {
                                buttons[i].className = "";
                              }
                          }
                          //数组从0开始，故index需要-1
                          buttons[index].className = "on"
                          
              }
                    
              
              function handleMove() {
                  let left = parseInt(pic.style.left);
                  
                  index += 1;
                    if (index > showIndex -1) {
                        index = 0
                  }
                  // if it is interrupted, it will be restart.  return to 0
                if (left <= - (showIndex-1) * averWidth || (left % averWidth)!==0) {
                  pic.style.left = 0 + 'px';
                  index = 0
                } else {
                  animate(pic, 12);
                }
                buttonsShow();
              }
      
              function bindEvent() {
      
                for (let i = 0; i < showIndex; i++) {
                  trig.children[i].onclick = function(e) {
                    index = i ;
                    pic.style.left = i * - averWidth + 'px';
      
                    buttonsShow();
                  }
                }
              }
      
              function animate(elem, time) {
                let count = 0;
                
                let timer = setInterval(() => {
                  if (count >= averWidth/24 ) return clearInterval(timer);
                  count++;
                  elem.style.left = parseInt(elem.style.left) - 24+ 'px';
      
      
                }, time);
              }
      
          }
        </script>