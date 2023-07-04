const productBody = document.querySelector('.tabs-product__body')
const basketWrapper = document.querySelector('.basket__items')
productBody.addEventListener('click',toggleBasket)

function toggleBasket(e){
    const targetElement = e.target
    if(targetElement.closest('.basket__info') && basketWrapper.children.length > 0){
        document.documentElement.classList.toggle("basket-open");
    }
    if(basketWrapper.children.length === 0){
        console.log(5556);
        document.documentElement.classList.remove("basket-open");
    }
}
