const data = [
    {
        id: 1,
        fullName: "rikkei",
        email: "rikkei@gmail.com",
        phone: "0823868888",
        address: "Hà Nội",
        gender: "nam"
    },
    {
        id: 2,
        fullName: "academy",
        email: "academy@gmail.com",
        phone: "0828638888",
        address: "HCM",
        gender: "Nữ"
    }
];

let idGlobal = 2;
let indexUpdateGlobal = null;

const inputName = document.getElementById("fullName");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputAddress = document.getElementById("address");
const inputMale = document.getElementById("male");
const inputFemale = document.getElementById("female");

function drawTable(data) {
    let stringHTML = "";
    data.forEach(e => {
        stringHTML += `
            <tr>
                <td>${e.id}</td>
                <td>${e.fullName}</td>
                <td>${e.email}</td>
                <td>${e.phone}</td>
                <td>${e.address}</td>
                <td>${e.gender}</td>
                <td>
                    <div class="action_col">
                        <button class="btn btn_sua" onclick="toggleForm(${e.id})">Edit</button>
                        <button class="btn btn_delete" onclick="deleteProduct(${e.id})">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
    document.getElementById("display").innerHTML = stringHTML;
}

drawTable(data);

function toggleForm(id) {
    if (id !== undefined) {
        const indexUpdate = data.findIndex(e => e.id === id);
        indexUpdateGlobal = indexUpdate;
        inputName.value = data[indexUpdate].fullName;
        inputEmail.value = data[indexUpdate].email;
        inputPhone.value = data[indexUpdate].phone;
        inputAddress.value = data[indexUpdate].address;
        if (data[indexUpdate].gender === "nam") {
            inputMale.checked = true;
        } else if (data[indexUpdate].gender === "Nữ") {
            inputFemale.checked = true;
        }
    } else {
        indexUpdateGlobal = null;
        document.getElementById("form").reset();
    }
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (indexUpdateGlobal !== null) {
        data[indexUpdateGlobal].fullName = inputName.value;
        data[indexUpdateGlobal].email = inputEmail.value;
        data[indexUpdateGlobal].phone = inputPhone.value;
        data[indexUpdateGlobal].address = inputAddress.value;
        data[indexUpdateGlobal].gender = inputMale.checked ? "nam" : "Nữ";
        indexUpdateGlobal = null;
        this.reset();
        drawTable(data);
        return;
    }
    const product = {
        id: idGlobal,
        fullName: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        address: inputAddress.value,
        gender: inputMale.checked ? "nam" : "Nữ"
    };
    idGlobal++;
    data.push(product);
    this.reset();
    drawTable(data);
});

function deleteProduct(id) {
    const indexDelete = data.findIndex(e => e.id === id);
    const result = confirm(`Delete ${data[indexDelete].fullName}`);
    if (result) {
        data.splice(indexDelete, 1);
        drawTable(data);
    }
}

function search() {
    let textSearch = document.getElementById("input_search").value.toLowerCase().trim();
    let filterData = data.filter((e) =>
        e.fullName.toLowerCase().includes(textSearch)
    );
    drawTable(filterData);
}
function arrange() {
    data.sort(function(a, b) {
        let nameA = a.fullName.toLowerCase();
        let nameB = b.fullName.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    drawTable(data);
}