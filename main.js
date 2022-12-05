const loader = document.querySelector(".loader");
document.querySelector('#load').src = 'loading.gif';
window.addEventListener('load', disapperIt);

function disapperIt() {
    loader.classList.add("disappear");
}
window.addEventListener('load', () => {
    
    const envelope = document.querySelector('.envelope');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const wrapper = document.querySelector('.wrapper');
    const main = document.querySelector('.main');
    
    
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const lower = document.querySelector('.lower');
    const lower2 = document.querySelector('.lower-2');
    const text = document.querySelector('.text');
    const you = document.querySelector('#you');
    const open = document.querySelector('#open');
    
    setInterval(() => {
        main.style.display = 'flex';
    }, 500);
    
    wrapper.addEventListener('click', () => {
        you.innerHTML = "You're invited";
        open.innerHTML = 'PLEASE OPEN';
        open.style.border = '1px solid #004aad';
        open.style.background = '#004aad'
        one.style.transform = 'rotateX(90deg)';
        one.style.transitionDelay = '0s'
        two.style.transform = 'rotateX(180deg)';
        two.style.transitionDelay = '0.25s';
        main.style.transform = 'translateY(-60px)';
        main.style.transitionDelay = '0.5s';
        wrapper.addEventListener('click', () => {
            setInterval(() => {
                text.style.display = 'none';
                main.style.animation = 'up 2s forwards';
                envelope.style.animation = 'out 2s forwards';
                one.style.animation = 'out1 2s forwards';
                two.style.animation = 'out1 2s forwards';
                wrapper.style.background = 'transparent';
            }, 1000);
    
            setInterval(() => {
                  envelope.style.display = 'none';
                  one.style.display = 'none';
                  two.style.display = 'none';
            }, 1800);
          
            setInterval(() => {
                left.style.webkitAnimation = 'swing-top-left-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
                left.style.animation = 'swing-top-left-fwd 3s ;cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
                right.style.webkitAnimation = 'swing-top-right-fwd 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
                right.style.animation = 'swing-top-right-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
            }, 2000);
            
            setInterval(() => {
                lower.style.animation = 'lower 1.5s forwards';
                lower2.style.animation = 'lower-2 1.5s forwards';
            }, 3000);
            setTimeout(() => {
                lower.style.display = 'none';
            }, 3500);
        });
    });
})