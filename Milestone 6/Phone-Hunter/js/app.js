const loadPhone = async (search, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;

  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = " ";

  //Display 10 phone only
  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

  //display no phones
  const noPhone = document.getElementById("not-found");

  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");

    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
        <div class="card p-4" >
            <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
                This is a longer card with supporting text below as a
                natural lead-in to additional content. This content is a
                little bit longer.
            </p>
            <button onClick = "loadPhoneDetails('${phone.slug}')" href = "#" class = "btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#phoneModal">Show Details</button>
            </div>
        </div>
        `;
    phoneContainer.appendChild(phoneDiv);
  });
  toggleSpinner(false);
  //Stop loader
};

const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText, dataLimit);
};

//Normal key input
document.getElementById("btn-search").addEventListener("click", function () {
  processSearch(10);
});

//search input field enter key handler
document
  .getElementById("search-field")
  .addEventListener("keypress", function (e) {
    // console.log(e.key);
    if (e.key == "Enter") {
      processSearch(10);
    }
  });

const toggleSpinner = (isLoading) => {
  const spinner = document.getElementById("loader");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

//Show all
document.getElementById("btn-show").addEventListener("click", function () {
  processSearch();
});

const loadPhoneDetails = async (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
};

const displayPhoneDetails = (phone) => {
  console.log(phone);
  const modalTitle = document.getElementById("phoneModalLabel");
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.innerHTML = `
    <p> Release Date : ${
      phone.releaseDate ? phone.releaseDate : "No Release Date"
    } </p>
    <p>Others : ${phone.others ? phone.others.Bluetooth : "None"}</p>
  `;
};
loadPhone("apple");
