import { dashboardItems } from "./dashboard-items.js";

const list = document.querySelector(".grid-list");
const data = createDashboardItems(dashboardItems);
console.log(data);
list.insertAdjacentHTML('beforeend', data);

function createDashboardItems(items) {

    return items.map(item => 
   `<li class="grid-list__item">
   <p class="grid-list__td">${item.customerName}</p> 
   <p class="grid-list__td">${item.company}</p>
   <p class="grid-list__td">${item.phoneNumber}</p>
   <p class="grid-list__td">${item.email}</p>
   <p class="grid-list__td">${item.country}</p>
   <button class="grid-list__button button__${item.status}">${item.status}</button>
   </li>` 
    ).join('');
}






