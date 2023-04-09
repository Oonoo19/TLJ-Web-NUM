export default class ProductInfo {

    fetchInfo() {
        fetch('https://raw.githubusercontent.com/Oonoo19/TLJ-Web-NUM/main/data.json')
        .then(response => response.json())
        .then(data => {
            console.log("hey")
            const productContainer = document.querySelector('#product');
            console.log(productContainer);
            data.bread.forEach(product => {
                console.log(product.name);
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                `;
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error(error));
    }
}
