function render(){
    let productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG=[];

fetch('server/catalog1.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(function(){
            spinnerPage.handleClear();
            render();
        }, 500);
        
    })
    .catch(error =>{
        spinnerPage.handleClear();
        errorPage.render();
    });