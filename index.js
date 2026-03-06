const content = document.querySelector("#content");
const submit = document.querySelector("#add");

submit.addEventListener("click", () => {

    let itemName = document.querySelector("#item-name").value;
    let unitPrice = document.querySelector("#price-unit").value;
    let quantity = document.querySelector("#quantity").value;
    let supplier = document.querySelector("#supplier").value;
    let formData = {itemName, unitPrice, quantity, supplier};

    fetch("https://pcs112-products.onrender.com/api/users",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch((error) => {
        console.log(error);
    })
    alert("Item added successfully!");
    location.reload();
});

    window.addEventListener("load", () => {
        getUsers();
    });

    function getUsers() {
        let html = "";

        fetch("https://pcs112-products.onrender.com/api/users", {mode: 'cors'})
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                html += `<li>${element.id} ${element.itemName} ${element.unitPrice} ${element.quantity} ${element.supplier}</li>`;
            })

            content.innerHTML = html;
        })
    }
