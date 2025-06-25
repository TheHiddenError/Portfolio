const savedTheme = localStorage.getItem('theme');
let preferredTheme;
if (!savedTheme) {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    preferredTheme = systemPrefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', preferredTheme);
}
else {
    preferredTheme = savedTheme
}


const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

if (preferredTheme == "light"){
    icon1.classList.toggle("hide");
    icon2.classList.toggle("hide");
    document.getElementsByClassName('theme')[0].style.colorScheme = 'light';
}

icon1.addEventListener('click', ()=>{
    icon1.classList.toggle("hide");
    icon2.classList.toggle("hide");
    document.getElementsByClassName('theme')[0].style.colorScheme = 'light';
    localStorage.setItem('theme', 'light');
})

icon2.addEventListener('click', ()=>{
    icon1.classList.toggle("hide");
    icon2.classList.toggle("hide");
    document.getElementsByClassName('theme')[0].style.colorScheme = 'dark';
    localStorage.setItem('theme', 'dark');
})
