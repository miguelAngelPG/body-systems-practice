

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

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3')
        .then(response => response.json())
        .then(json => {
            
            let html = ''
            json.forEach(({id, title, body}) => {
                html += `
                    <div id="post_card${id}" class="bg-primaryRed px-8 py-5 rounded-md">
                        <h5 class="text-white font-bold font-DM_Sans text-2xl mb-5">${title}</h5>
                        <p class="text-white font-normal text-base leading-6 font-DM_Sans mb-5">${body}</p>
                        <button class="text-white font-bold text-base leading-6 font-DM_Sans">Learn more</button>
                    </div>
                `
            });
            document.getElementById('posts').innerHTML = html
        })
}

getPost()