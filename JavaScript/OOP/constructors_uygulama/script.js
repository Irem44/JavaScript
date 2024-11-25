function Player(name) {
  //properties
  this.score = 0;
  this.name = name;

  //methods
  this.start = function () {
    console.log(`${this.name} oyuna  başladı.`);
  };

  this.stop = function () {
    console.log(`${this.name} oyundan çıktı`);
  };

  this.pause = function () {
    console.log(`${this.name} oyunu durdurdu.`);
  };

  this.add_score = function (val) {
    this.score += val;
  };

  this.show_score = function () {
    console.log(`${this.name} isimli oyuncunun skoru ${this.score}`);
  };
}

const player1 = new Player("Ahmet");
player1.start();
player1.stop();
player1.pause();
player1.add_score(100);
player1.show_score();
