

const classList = document.getElementById('navbar').classList

document.getElementById('menuMobile').addEventListener('click', function () {
    classList.toggle('hidden')
    classList.toggle('block')
})
  
document.querySelectorAll('#navbar ul li').forEach(li => {
    li.addEventListener('click', function () {
        classList.toggle('hidden')
        classList.toggle('block')
    })
})
