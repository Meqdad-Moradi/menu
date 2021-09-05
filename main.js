let menu = [{
        id: 1,
        title: 'breakfast salad',
        img: './img/1.jpg',
        category: 'breakfast',
        price: 15.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 2,
        title: 'lunch salad',
        img: './img/2.jpg',
        category: 'lunch',
        price: 11.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 3,
        title: 'Jause salad',
        img: './img/3.jpg',
        category: 'jause',
        price: 9.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 4,
        title: 'chipps burger',
        img: './img/4.jpg',
        category: 'lunch',
        price: 5.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 5,
        title: 'vegetable',
        img: './img/5.jpg',
        category: 'dinner',
        price: 18.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 6,
        title: 'breakfast with egg',
        img: './img/6.jpg',
        category: 'breakfast',
        price: 13.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 7,
        title: 'nachspeise lunch',
        img: './img/7.jpg',
        category: 'lunch',
        price: 3.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 8,
        title: 'jause',
        img: './img/8.jpg',
        category: 'jause',
        price: 7.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    },
    {
        id: 9,
        title: 'fruit salad',
        img: './img/9.jpg',
        category: 'marende',
        price: 19.9,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut sint laboriosam impedit
        voluptates consequatur dicta earum distinctio delectus vitae.`
    }
]


// select center section
const center = document.querySelector('.center')
center.innerHTML = ''

// btns
const btnContainer = document.querySelector('.btn-container')
btnContainer.innerHTML = ''


// display all items when page loaded
window.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu)
    displayBtns()
})


// display btns
const displayBtns = () => {
    const menuCategory = menu.reduce((value, item) => {
        if (!value.includes(item.category)) {
            value.push(item.category)
        }
        return value
    }, ['all'])

    const category = menuCategory.map(item => {
        return `<button class="btn" data-id="${item}">${item}</button>`
    }).join('')

    btnContainer.innerHTML = category

    // select the buttons
    const btns = btnContainer.querySelectorAll('.btn')
    btns.forEach(btn => btn.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id
        const category = menu.filter(item => item.category === id)
        if (id === 'all') {
            displayMenu(menu)
        } else {
            displayMenu(category)
        }
    }))
}


// display menu
const displayMenu = (menuItem) => {
    const myMenu = menuItem.map(item => {
        return `<div class="menu">
    <div class="menu-img">
        <img src="${item.img}" alt="${item.title}">
    </div>
    <div class="content">
        <header class="menu-header">
            <h3 class="title">${item.title}</h3>
            <p class="price">€${item.price}</p>
        </header>
        <p class="desc">${item.desc}
        </p>
    </div>
</div>`
    }).join('')
    center.innerHTML = myMenu
}