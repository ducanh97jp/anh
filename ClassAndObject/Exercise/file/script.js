/**
 * Created by nhatnk on 4/26/17.
 */

 class Hero {
    constructor(image, top, left, size, speed) {
      this.image = image;
      this.top = top;
      this.left = left;
      this.size = size;
      this.speed = speed;
    }
  
    getHeroElement = function () {
      return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
  
    moveRightLeft = function () {
      this.left += this.speed;
      console.log('ok: ' + this.left);
    }
    moveTopBottom = function () {
      this.top += this.speed;
    }
  }
  
  
  let hero = new Hero('wedding.png', 20, 30, 200, 50);
  
  
  function start() {
    if (hero.left >= 0 && hero.left < window.innerWidth - hero.size)  {
      hero.moveRightLeft();
    } else {
      hero.moveTopBottom();
    }
    if (hero.left < 0 && hero.top < 0 ||
      hero.left >= window.innerWidth - hero.size && hero.top >= window.innerHeight - hero.size) {
      hero.speed = -hero.speed;
      hero.moveRightLeft();
      hero.moveTopBottom();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
  
  }
  setInterval(start, 100);
  