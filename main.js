let form = document.querySelector('.form')
let create = document.querySelector('.create')

create.addEventListener('click', () => {
    fetch(' https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers:{
             'Content-Type': "application/json" 
    },body: JSON.stringify(
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha"
            },
        )
    }).then((res) => alert('вы успешноо создали данные', res))
        .catch(err => alert('ошибка создания данных', err))
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users', {
       method: 'POST',
       headers: {
        'Conten-Type': "application/json"
       }
       ,body:JSON.stringify({
        name: e.target[0].value ,
        username: e.target[1].value
       })
    })
    .then((res) => {
        e.target[0].value = ''
        e.target[1].value = ''
    })
    .catch((err) => console.log(err))
})
