// Search Part One start

const searchPhone = () => {
    const searchText = document.getElementById('input-text').value;
    const emptyInput = document.getElementById('empty-input'); 
    if(searchText === ''){
      container.textContent = '';
      emptyInput.textContent = '';
      document.getElementById('bttn').style.display = 'none';
      nativeToast({
        message: 'Please type an item name sir!!',
        position: 'north',
        type : 'success',
        icon : false,
      })
    }
    else{  
      fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(json => displayPhone(json.data)) 
    }          
}

// Search Part One end

// Display Part One start

const displayPhone = (products) => {
  console.log(products)
  const emptyInput = document.getElementById('empty-input');
  if(products.length === 0){
    container.textContent = '';
    div = document.createElement('div');
    div.innerHTML = `
      <h1 class="fw-bolder text-center text-success mt-5">No result found sir</h1>
    `;
    emptyInput.appendChild(div);
    document.getElementById('bttn').style.display = 'none';
  }
  else if(products.length < 20){
    container.textContent = '';
    products.slice(0,20).forEach(product => {
      emptyInput.textContent = '';
      const container = document.getElementById('container');
      div = document.createElement('div');
      div.classList.add('col-md-4','col-12')
      div.innerHTML = `
      <div class="card w-100 ps-1 py-5" >
      <img src="${product.image}" class="card-img-top w-75" alt="image">
      <div class="card-body">
        <h4 class="card-title">${product.phone_name}</h4>
        <h5>${product.brand}</h5>
        <button id="btn" onclick="loadDetails('${product.slug}')" class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button" >Specification</button>
        </div>
      </div>
      `;
      container.appendChild(div);
    })
    document.getElementById('bttn').style.display = 'none';
  }
  else{
    container.textContent = '';
    products.slice(0,20).forEach(product => {
      emptyInput.textContent = '';
      const container = document.getElementById('container');
      div = document.createElement('div');
      div.classList.add('col-md-4','col-12')
      div.innerHTML = `
      <div class="card w-100 py-5 ps-1" >
      <img src="${product.image}" class="card-img-top w-75" alt="image">
      <div class="card-body">
        <h4 class="card-title">${product.phone_name}</h4>
        <h5>${product.brand}</h5>
        <button id="btn" onclick="loadDetails('${product.slug}')" class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button" >Specification</button>
        </div>
      </div>
      `;
      container.appendChild(div); 
    })
    document.getElementById('bttn').style.display = 'block';
  }  
};

// Display Part One end

// Detail Part  start


const loadDetails = (data) => {
  console.log(data)
  const url = `https://openapi.programming-hero.com/api/phone/${data}`;
  fetch(url)
   .then(response => response.json())
   .then(json => displayDetails(json.data))
}

const displayDetails = (data) => {
  console.log(data)
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <img class="w-25" src="${data.image}" alt="image">
    <h4 class="mt-2">${data.name}</h4>
    <h5>${data.brand}</h5>
    <h6>Display : ${data.mainFeatures.displaySize}</h6>
    <h6>Memory : ${data.mainFeatures.memory}</h6>
    <h6>Chipset : ${data.mainFeatures.chipSet}</h6>
    <h6>Storage : ${data.mainFeatures.storage}</h6>
    <h6>Sensors : ${data.mainFeatures.sensors}</h6>
    <h6>Bluetooth : ${data.others.Bluetooth}</h6>
    <h6>GPS : ${data.others.GPS}</h6>
    <h6>NFC : ${data.others.NFC}</h6>
    <h6>Radio : ${data.others.Radio}</h6>
    <h6>USB : ${data.others.USB}</h6>
    <h6>WLAN : ${data.others.WLAN}</h6>
    <h6>ReleaseDate : ${data.releaseDate?data.releaseDate:"Not available"}</h6>      
  `;
}

// Detail Part  end

// Search Part Two start

const searchPhone2 = () => {
  const searchText = document.getElementById('input-text').value;
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(json => displayPhone2(json.data.slice(21,90)))
        document.getElementById('bttn').style.display = 'none';
};

// Search Part Two end

// Display Part Two start

const displayPhone2 = (products) => {  
  products.forEach(product => {
    const container = document.getElementById('container');
    div = document.createElement('div');
    div.classList.add('col-md-4','col-12')
    div.innerHTML = `
    <div class="card w-100 py-5 ps-1" >
    <img src="${product.image}" class="card-img-top w-75" alt="image">
    <div class="card-body">
      <h4 class="card-title">${product.phone_name}</h4>
      <h5>${product.brand}</h5>
      <button id="btn" onclick="loadDetails('${product.slug}')" class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button" >Specification</button>
      </div>
    </div>
    `;
    container.appendChild(div);  
  })
};

// Display Part Two end