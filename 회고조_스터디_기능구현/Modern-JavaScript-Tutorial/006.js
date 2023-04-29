let calculator = {
  read(){
    this.a = +prompt('숫자 입력1'); // + : prompt 숫자 변환
    this.b = +prompt('숫자 입력2'); 
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;  // this => ladder 객체를 의미
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert( this.step );
    return this;
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); 아래와 같이 가능하게 하려면
ladder.up().up().down().showStep();

// this가 ladder의 step 값을 수정한 후, ladder을 반환해야 체이닝이 가능