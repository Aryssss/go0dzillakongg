
const carouselItems = [
    { image: 'pictures/godzilla-toy.jpg', name: 'Godzilla Toy' },
    { image: 'pictures/kong-toy.jpg', name: 'Kong Toy' },
    { image: 'pictures/godzilla-kong-toy.jpg', name: 'Godzilla vs Kong Toy' }
];

const productData = [
    { image: 'pictures/godzilla-toy.jpg', name: 'Godzilla Toy', price: '$19.99' },
    { image: 'pictures/kong-toy.jpg', name: 'Kong Toy', price: '$24.99' },
    { image: 'pictures/godzilla-kong-toy.jpg', name: 'Godzilla vs Kong Toy', price: '$29.99' }
];

function generateCarouselItems() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselItems.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
        carouselItem.innerHTML = `
          <img src="${item.image}" class="d-block w-100" alt="${item.name}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${item.name}</h5>
          </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
}

function generateProductCards() {
    const productGrid = document.getElementById('product-grid');
    productData.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card card';
        productCard.innerHTML = `
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        `;
        productGrid.appendChild(productCard);
    });
}


function generateProductCards() {
    const productGrid = document.getElementById('product-grid');
    productData.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card card';
        productCard.innerHTML = `
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        `;
        productGrid.appendChild(productCard);
    });
}
generateCarouselItems();
generateProductCards();