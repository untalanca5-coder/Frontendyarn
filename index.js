const content = document.querySelector('#content');
window.addEventListener('load', () => {
  getUser();
})

function getUser() {
  let html = '';
  //fetch api
  fetch('https://api.sampleapis.com/beers/ale',{mode: 'cors'})
  .then(response=>{console.log(response); return response.json();
  })
  .then(data=>{
    console.log(data);
    data.forEach(element=>{
      html+=`<li><img= src={element.image} style ="width=50px" >
      ${element.price} ${element.name}</li>`;
    })
    content.innerHTML = html;
  })
  .catch(err=>console.log(err));
}


    


