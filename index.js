const content = document.querySelector('#content');
window.addEventListener('load', () => {
  getUser();
})

function getUser() {
  let html = '';
  //fetch api
  fetch('https://hamboorgir.onrender.com/api/users',{mode: 'cors'})
  .then(response=>{console.log(response); return response.json();
  })
  .then(data=>{
    console.log(data);
    data.forEach(element=>{
      html+=`<li>${element.first_name} ${element.last_name}</li>`;
    })
    content.innerHTML = html;
  })
  .catch(err=>console.log(err));
}

    