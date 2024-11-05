class Shopping{
    clear(){
        ROOT_SHOPPING.innerHTML = ""
    }

    render(){

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let calc = 0;

        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td class="shopping-container-element__name">🔥 ${name}</td>
                        <td class="shopping-container-element__price">${price.toLocaleString()} руб</td>
                    </tr>
                `;
                calc += price;
            }
          
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.clear();"></div> 
                <table>
                    ${htmlCatalog}
                    
                </table>
                <p>Всего : ${calc} рублей</p>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }

}

const shoppingPage = new Shopping();
