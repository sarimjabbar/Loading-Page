setTimeout(handleLoader, 3000)

function handleLoader(){
document.getElementsByTagName('img')[0].style.display = 'none'
document.getElementsByTagName('h1')[0].style.display = 'flex'
}