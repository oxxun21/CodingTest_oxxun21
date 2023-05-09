let count = 0; // 초기 값

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
      count--;
    } else if (styles.contains('increase')){
      count++;
    } else {
      count = 0;
    }

    if(count > 0){
      value.style.color = 'green';
    }
    if(count < 0){
      value.style.color = 'red';
    }
    if(count === 0){
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
