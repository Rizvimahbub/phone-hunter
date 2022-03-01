const searchPhone = () => {
    const searchText = document.getElementById('input-text').value;
    document.getElementById('input-text').value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(json => displayPhone(json.data.slice(0,20)))         
}

const displayPhone = (products) => {
  console.log(products)
    products.forEach(product => {
        const container = document.getElementById('container');
        div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-75  p-2 border-0" style="border-radius: 20px;">
        <img src="${product.image}" class="card-img-top" alt="image">
        <div class="card-body">
          <h4 class="card-title">${product.phone_name}</h4>
          <h5>${product.brand}</h5>
          <button onclick="" class="btn btn-success mt-2">Specification</button>
        </div>
      </div>
        `
        container.appendChild(div);
    })
}


