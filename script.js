const searchPhone = () => {
    const searchText = document.getElementById('input-text').value;  
    if(searchText === ''){
      nativeToast({
        message: 'Please type a item name sir!!',
        position: 'north',
        type : 'success',
        icon : false,
      })
    }
    else{
      document.getElementById('input-text').value = '';
      fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(json => displayPhone(json.data))
    }          
}

const displayPhone = (products) => {
  console.log(products)
  const emptyInput = document.getElementById('empty-input');
  if(products.length === 0){
    div = document.createElement('div');
    div.innerHTML = `
      <h5 class="fw-bolder text-center text-success">No result found sir</h5>
    `;
    emptyInput.appendChild(div);
  }
  else{
    container.textContent = '';
    products.forEach(product => {
      emptyInput.textContent = '';
      const container = document.getElementById('container');
      div = document.createElement('div');
      div.innerHTML = `
      <div class="card   p-3 border-0 rounded-0" >
      <img src="${product.image}" class="card-img-top" alt="image">
      <div class="card-body">
        <h4 class="card-title">${product.phone_name}</h4>
        <h5>${product.brand}</h5>
        <button id="btn" onclick="loadDetails('${product.slug}')" class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button" >Specification</button>
        </div>
      </div>
      `;
      container.appendChild(div);
      
  })
  }
    
}


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
        <h6>Bluetooth : ${data.others.Bluetooth} ; GPS : ${data.others.GPS} ; NFC : ${data.others.NFC}; Radio : ${data.others.Radio}</h6>
        <h6>USB : ${data.others.USB}</h6>
        <h6>WLAN : ${data.others.WLAN}</h6>
        <h6>ReleaseDate : ${data.releaseDate}</h6>
        
  `;
}