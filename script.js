let Instagram = document.getElementById('instagram');
let GitHub = document.getElementById('github')
let LinkedIn= document.getElementById('linkedin')
let logo= document.getElementById('historicaLogo')


Instagram.onclick = () => {
    window.open("https://www.instagram.com/krishna.obj/", "_blank");
}
GitHub.onclick = () => {
    window.open("https://github.com/krishnaobj", "_blank");
}
LinkedIn.onclick = () => {
    window.open("https://www.linkedin.com/in/krishna-sharma-365a36271/", "_blank");
}
logo.onclick = () => {
    window.location = '/'
    // window.open("/");
}