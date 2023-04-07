const baseURL = "http://localhost:2500/api/v1";
const authorTable = document.querySelector('#authorTableBody');
const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');

let authors = [];
let newAuthor = {};

const submitForm = (event) => {
    event.preventDefault();

    newAuthor.name = nameInput.value;
    newAuthor.bio = bioInput.value;

    fetch(`${baseURL}/author`, {
        method: "POST",
        body: JSON.stringify(newAuthor),
        headers: {
            'Content-Type': "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message);
    }).catch((error) => {
        console.log(error);
    });
};

const updateAuthorUI = (data) => {
    authorTable.innerHTML = "";
    console.log(data, "INCOMING VALUE");

    for (let i = 0 ; i < data.length; i++) {
        authorTable.innerHTML += `
            <tr>
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].bio}</td>
            </tr>
        `;
    }
};

const getAllAuthors = () => {
    fetch(`${baseURL}/author`).then((response) => {
        return response.json();
    }).then((res) => {
        authors = res.data;
        updateAuthorUI(res.data);
    }).catch((error) => {
        console.log(error);
    });
};

const addAuthorForm = document.querySelector('#addAuthorForm');
addAuthorForm.addEventListener('submit', submitForm);

getAllAuthors();
