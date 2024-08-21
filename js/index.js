import state from "./state.js";
document.addEventListener('DOMContentLoaded', () => {
    const aside = {
        open: document.getElementsByClassName('open')[0],
        container: document.getElementsByClassName('aside')[0],
        close: document.getElementsByClassName('close')[0],
        openAside(e) {
            console.log(e.target);
            if (this.container) {
                this.container.style.display = 'block';
                console.log(this.container.style);
            } else {
                console.error('Aside container not found');
            }
        },
        closeAside() {
            if (this.container) {
                this.container.style.display = 'none';
            } else {
                console.error('Aside container not found');
            }
        },
        render() {
            if (this.open && this.close) {
                this.open.addEventListener('click', (e) => this.openAside(e));
                this.close.addEventListener('click', () => this.closeAside());
            } else {
                console.error('Open or close button not found');
            }
        }
    }
    aside.render();
});
const modalObject = {
    modalContainer: document.getElementsByClassName('modalContainer')[0],
    modalButtonInfo: document.getElementById('modalButtonInfo'),
    orderButton: document.getElementById('orderButton'),
    textarea: document.querySelector('textarea'),

    closeModal() {
        this.modalContainer.style.display = 'none';
    },

    openModal() {
        this.modalContainer.style.display = 'block';
    },

    render() {
        this.modalContainer.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closeModal();
            }
        });
        this.modalButtonInfo.addEventListener('click', (e) => {
            this.closeModal();
        });
        this.textarea.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        this.orderButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();  
            this.openModal();
        });
        
    }
};
modalObject.render();
function dispatch(action,container,data = state){
    switch (action) {
        case 'aside':
            data.aside.forEach(item => {
                const liElement = document.createElement('li');
                liElement.innerHTML = `<a href="#">${item.title}</a>`;
                liElement.addEventListener('click', (event) => {
                    event.preventDefault(); 
                    if (item.title === "Про мене") {
                        document.querySelector('.section6').scrollIntoView({ behavior: 'smooth' });
                    } else if (item.title === "Проекти") {
                        document.querySelector('.section4').scrollIntoView({ behavior: 'smooth' });
                    } else if (item.title === "Контакти") {
                        document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
                    }
                });
                container.appendChild(liElement);
            });
            
            break;
        case 'section4':
            data.section4.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <div class="flex">
                        <img src="./img/section4/${item.url}" alt="">
                        <div class="column">
                            <h5>${item.title}</h5>
                            <p>${item.text}</p>
                        </div>
                    </div>
                    `)
            )
            break;
        case 'section5':
            data.section5.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <img src="./img/section5/${item.url}" alt="">
                    `)
            )
            break;
        case 'section6':
            data.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <li>${item}</li>
                    `)
            )
            break;
        case 'section7':
            data.section7.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <div class="flex">
                        <h2>${item.title}</h2>
                        <p>${item.text}</p>
                    </div>
                    `)
            )
            break;
        case 'header':
            data.header.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <button onclick="${item.onclick}" class="header_btn"><img class="discord" src="./img/header/${item.url}" alt="">${item.text}</button>
                    `)
            )
            break;
        case 'footer_title':
            data.footer.titleFooter.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <b>${item.title}</b>
                    `)
            )
            break;
        case 'footer_bud':
            data.footer.bud.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <li><a href="${item.link}">${item.text}</a></li>
                    `)
            )
            break;
        case 'footer_bud':
            data.footer.bud.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <li><a href="${item.link}">${item.text}</a></li>
                    `)
            )
        case 'footer_colum':
            data.footer.colum.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <div class="flex">
                        <img src="./img/footer/${item.url}" alt=""><span>${item.text}</span>
                    </div>
                    `)
            )
            break;
        case 'footer_contacts':
            data.footer.contact.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <a href="${item.url}" target="_blank"><img src="./img/footer/${item.link}" alt=""></a>
                    `)
            )
            break;
        case 'slider':
            data.slider.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                        <img src="./img/section8/${item.url}" alt=""></img>
                    `)
            )
            break;
        case 'section2':
            data.section2.forEach(item=>
                container.insertAdjacentHTML('beforeend',`
                    <div class="colum">
                        <div class="cercle"></div>
                        <h4>${item.text}</h4>
                        <button class="btn">Детальніше</button>
                        <img class="unity" src="./img/section2/${item.url}" alt="">
                    </div>                    
                    `)
            )
            break;
        case 0:
            
            break;    
        default:
            break;
    }
}
const nav = document.getElementsByClassName('nav')[0];
dispatch('aside',nav);
const section4 = document.getElementsByClassName('section4_wrap')[0];
dispatch('section4',section4);
const section5_wrap = document.getElementsByClassName('section5_wrap')[0];
dispatch('section5',section5_wrap);
const section6_ul = document.getElementsByClassName('section6_ul')[0];
const section6_ol = document.getElementsByClassName('section6_ol')[0];
dispatch('section6',section6_ul,state.section6.ul);
dispatch('section6',section6_ol,state.section6.ol);
const section7_wrap = document.getElementsByClassName('section7_wrap')[0];
dispatch('section7',section7_wrap);
const header_flex = document.getElementsByClassName('header_flex')[0];
dispatch('header',header_flex);
const footer_title = document.getElementsByClassName('footer_title')[0];
dispatch('footer_title',footer_title);
const footer_bud = document.getElementsByClassName('footer_bud')[0];
dispatch('footer_bud',footer_bud);
const footer_colum = document.getElementsByClassName('footer_colum')[0];
dispatch('footer_colum',footer_colum);
const footer_contacts = document.getElementsByClassName('footer_contacts')[0];
dispatch('footer_contacts',footer_contacts);
const slider_wrap = document.getElementsByClassName('slider_wrap')[0];
dispatch('slider',slider_wrap);
const section2_wrap = document.getElementsByClassName('section2_wrap')[0];
dispatch('section2',section2_wrap);
