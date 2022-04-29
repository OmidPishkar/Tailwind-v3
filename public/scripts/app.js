// Build FAQ 
const faqParent = document.querySelectorAll('.faq-parent')
const faqArray = [...faqParent]
faqArray.forEach(item => {
    item.addEventListener('click', () => {
        const itemSelected = [...item.getElementsByClassName('faq-detail')]
        itemSelected.map(item => {
            const classes = [...item.classList]
            classes.map(element => {
                if(element === 'h-0') itemSelected[0].classList.remove('h-0')
                else itemSelected[0].classList.add('h-0')
            })
        })
    })
})
// --------------------------------------------------------------------------------
// Header Menu Toggle
const toggleMenu = document.querySelector('#toggle-menu')
const headerMenu = document.querySelector('#header-menu')
toggleMenu.addEventListener('click', event => {
    if(event.target.classList[6] === 'bx-menu'){
        event.target.className = 'text-3xl border-0 bg-transparent text-white cursor-pointer   bx bx-x'
        headerMenu.classList.add('flex')
        headerMenu.classList.remove('hidden')
    }else{
        event.target.className = 'text-3xl border-0 bg-transparent text-white cursor-pointer   bx bx-menu'
        headerMenu.classList.add('hidden')
        headerMenu.classList.remove('flex')
    }
})
// --------------------------------------------------------------------------------
// Chart.js 
let myChart = document.getElementById('myChart')
let massPopChart = new Chart(myChart , {
    type: 'doughnut',
    data: {
        labels: ['Financial Overhead' , 'Bonus & found' , 'it infastruetue' , 'Gift Code Inventory'],
        datasets: [{
            label: 'Population',
            data: [39.2 , 29.6 , 20.4 , 10.8],
            backgroundColor: [
                'rgb(59 , 130 , 246)',
                'rgb(29 , 78 , 216)',
                'rgb(147 , 197 , 253)',
                'rgb(191 , 219 , 254)',
            ],
            borderWidth: 0,
        }]
    },

    options:{}
})