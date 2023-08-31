const loadPhone = async (searchText,isShowAll ) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones, isShowAll);

}


const displayPhones =( phones, isShowAll) =>{
// console.log(phones);
const phoneContainer = document.getElementById('phone-container');
// clear phone container cards before adding new cards
phoneContainer.textContent = '';
const showAllContainer = document.getElementById('show-all-container');
if(phones.length >12 && !isShowAll ){
showAllContainer.classList.remove('hidden');
}
else{
  showAllContainer.classList.add('hidden');
}

if(!isShowAll){
  phones = phones.slice(0,12);
}
phones.forEach(phone =>{
    // console.log(phone);
    // 2create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card p-4 bg-blue-100 shadow-xl`;
    // 3 set innerHtml
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    // 4 append child
    phoneContainer.appendChild(phoneCard);
});
// hide loading spinner
toggleLoadingSpinner(false)

}

// handle search buttton
const handleSearch =(isShowAll) =>{
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-filed');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
}

const handleSearch2 = () =>{
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-filed2');
  const searchText = searchField.value;
  loadPhone(searchText);
}
const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
  loadingSpinner.classList.add('hidden');
  }
  
}
// handle showall
const handleShowAll = () =>{
  handleSearch(true);
}
// loadPhone();