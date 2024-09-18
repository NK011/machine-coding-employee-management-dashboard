const DEFAULT_DISPLAY_USER_ID = 1;
let data = [
    {
        id: 1,
        first_name: "Lesley",
        last_name: "Brignall",
        email: "lbrignall0@fc2.com",
        gender: "Male",
        company: "Trudeo",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 2,
        first_name: "Finn",
        last_name: "Sinney",
        email: "fsinney1@arstechnica.com",
        gender: "Male",
        company: "Fanoodle",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 3,
        first_name: "Arlyn",
        last_name: "Gorrick",
        email: "agorrick2@ustream.tv",
        gender: "Female",
        company: "Leenti",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 4,
        first_name: "Pattie",
        last_name: "Robel",
        email: "probel3@youku.com",
        gender: "Female",
        company: "Tagopia",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 5,
        first_name: "Reginauld",
        last_name: "Parkes",
        email: "rparkes4@miibeian.gov.cn",
        gender: "Male",
        company: "Edgetag",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 6,
        first_name: "Isaak",
        last_name: "Faithfull",
        email: "ifaithfull5@smh.com.au",
        gender: "Male",
        company: "Zoonoodle",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 7,
        first_name: "Olag",
        last_name: "Warboys",
        email: "owarboys6@delicious.com",
        gender: "Male",
        company: "Browsecat",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 8,
        first_name: "Jeremy",
        last_name: "Cosins",
        email: "jcosins7@lulu.com",
        gender: "Male",
        company: "Topicware",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 9,
        first_name: "Geordie",
        last_name: "Dufore",
        email: "gdufore8@bandcamp.com",
        gender: "Male",
        company: "Realbuzz",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
    {
        id: 10,
        first_name: "Christos",
        last_name: "Sharma",
        email: "csharma9@mozilla.com",
        gender: "Male",
        company: "Wikizz",
        picture: "./assets/wp7709776-bmw-m-1000-rr-wallpapers.jpg",
    },
];

function selectUser(id = DEFAULT_DISPLAY_USER_ID) {
    let user = data.find((user) => user.id === id);
    console.log(id)
    console.log(user);
    console.log(!user)
    if(!user) {
        user = {
            first_name: "",
            last_name: "",
            company: "",
            gender: "",
            picture: "",
        }
    }

    const userDetailsDiv = document.querySelector(".employee-details");
    const userImage = userDetailsDiv.querySelector(".user__image");
    userImage.src = user.picture;

    const userInfo = userDetailsDiv.querySelector(".user__info");
    const paras = userInfo.querySelectorAll("p");

    paras[0].textContent = user.first_name + " " + user.last_name;
    paras[1].textContent = user.company;
    paras[2].textContent = user.email;
    paras[3].textContent = user.gender;

    userInfo.replaceChildren(...paras, ...paras);
    userDetailsDiv.replaceChild(userImage, userImage);
    userDetailsDiv.replaceChild(userInfo, userInfo);
}

function handleDeleteUser(userId) {
    let updatedUserList = data.filter((user) => user.id !== userId);
    data = [...updatedUserList];
    createList();
    selectUser(userId + 1);
}

function createListItem(item) {
    const listItem = document.createElement("li");
    const text = document.createTextNode(
        item.first_name + " " + item.last_name
    );

    const deleteBtn = document.createElement("button");
    const btnText = document.createTextNode("Delete User");
    deleteBtn.appendChild(btnText);
    deleteBtn.classList.add("employee-del-btn");
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        handleDeleteUser(item.id);
    });

    listItem.addEventListener("click", () => selectUser(item.id));
    listItem.appendChild(text);
    listItem.appendChild(deleteBtn);

    return listItem;
}

function createList() {
    const employeeListDiv = document.querySelector(".employee-list");
    const existingEmployeeList = employeeListDiv.querySelector("ul");
    const employeeListItems = data.map((item) => createListItem(item));

    const employeeList = document.createElement("ul");
    employeeListItems.forEach((item) => employeeList.appendChild(item));

    employeeListDiv.replaceChild(employeeList, existingEmployeeList);
}

createList();
selectUser();
