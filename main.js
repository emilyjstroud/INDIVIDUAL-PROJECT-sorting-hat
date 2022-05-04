console.log ("wingardium mimosa");
const students = [
  {
    studentId: 1,
    name: " ",
    house: "Gryffindor",
    imageUrl: "https://1000logos.net/wp-content/uploads/2021/11/Gryffindor-Logo.jpg"
  },
  {
    studentId: 2,
    name: " ",
    house: "Slytherin",
    imageUrl: "https://i.pinimg.com/originals/67/20/26/67202691def63dbc1fe2d8cb899c6bb2.jpg"

  },
  {
    studentId: 3,
    name: " ",
    house: "Hufflepuff",
    imageUrl: "https://www.thestoreofrequirement.com.au/assets/full/2654.jpg?20200714031013.jpg"
  },
  {
    studentId: 4,
    name: " ",
    house: "Ravenclaw",
    imageUrl: "https://www.redwolf.in/image/catalog/stickers/harry-potter-ravenclaw-crest-sticker-india.jpg"
  },
];
let domString = " ";

const filterStudentContainer = document.querySelector("#filterStudentContainer");
// console.log(students);

// *** UTILITY FUNCTIONS *** //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// *** HTML COMPONENT FUNCTIONS *** //

// *** SORTING HAT INTRO CARD *** //
const hideContent = () => {
  const x = document.getElementById("contentContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const sortingHat = () => {
  let domString = `
<div class="cardContainer" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/hQ2rS_B_DGA/maxresdefault.jpg" class="card-img-top" alt="a sorting hat">
  <div class="card-body">
    <p class="card-text">Hello There Wizard. I am the Sorting Hat. Here lies your fate for the rest of your time at Hogwarts. ~ * Expecto Patronum to you ~*</p>
    <button type="button" class="btn btn-dark" onclick="hideContent()">Start Sorting!</button>
  </div>
</div> 
`;
renderToDom ("#cardContainer", domString);
};


// *** STUDENT SORTING FORM *** //
const studentNameSubmit = () => {
  const domString = `
<form>
  <div class="row mb-3">
    <label for="input" class="col-sm-2 col-form-label">Student Name</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="input">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Year</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          First Year
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Other
        </label>
      </div>
      
    </div>
  </fieldset>
 
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sort!</button>
</form> `;
renderToDom ("#submitStudentContainer", domString);
};


// *** HOUSE BUTTONS *** //
const houseButtons = () => {
  const domString = `
<button type="button" class="btn btn-dark" id="all">All Houses</button>
<button type="button" class="btn btn-outline-danger" id="Gryffindor">Gryffindor</button>
<button type="button" class="btn btn-outline-warning" id="Hufflepuff">Hufflepuff</button>
<button type="button" class="btn btn-outline-primary" id="Ravenclaw">Ravenclaw</button>
<button type="button" class="btn btn-outline-success" id ="Slytherin">Slytherin</button>
`;
renderToDom ("#houseButtonContainer", domString)
};

const filter = (e) => {
  console.log("all" === e.target.id)
  if ("Hufflepuff" === e.target.id) {
    console.log("You clicked the Hufflepuff button.");
  } else if ("Ravenclaw" === e.target.id) {
    console.log("You clicked the Ravenclaw button.");
  } else if ("Slytherin" === e.target.id) {
    console.log("You clicked the Slytherin button.");
  } else if ("Gryffindor" === e.target.id) {
    console.log("You clicked the Gryffindor button.");
  } else if ("all" === e.target.id) {
    console.log("These are all the Houses.");
  }
};

filterStudentContainer.innerHTML = domString;

// *** HOUSE BUTTON FILTER *** //

const eventListeners = () => {

document.querySelector("#houseButtonContainer").addEventListener("click", (e) => {
  console.log("You clicked a filter button.", e.target.id);
  if (e.target.id === "all") {
    cardsOnDom(students);
  } else if (e.target.id === "Gryffindor") {
    const gryffHouse = students.filter((taco) => taco.house === e.target.id);
    cardsOnDom(gryffHouse);
  } else if (e.target.id === "Hufflepuff") {
    const huffHouse = students.filter((taco) => taco.house === e.target.id);
    cardsOnDom(huffHouse);
  } else if (e.target.id === "Ravenclaw") {
    const ravHouse = students.filter((taco) => taco.house === e.target.id);
    cardsOnDom(ravHouse);
  } else if (e.target.id === "Slytherin") {
    const slyHouse = students.filter((taco) => taco.house === e.target.id);
    cardsOnDom(slyHouse);
  }
});
};


// *** SORTING HAT FILTER *** //

document.querySelector("#cardContainer").addEventListener("click", (e) => {
  console.log("You clicked the sorting button.", e.target.id);
});

// *** STUDENT FORM FILTER *** //

document.querySelector("#submitStudentContainer").addEventListener("click", (e) => {
  console.log("You clicked the sort student button.", e.target.id);

  const randomStudent = students[Math.floor(Math.random()*students.length)];

});

const form = document.querySelector("#submitStudentContainer");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCardObj = {
  studentId: document.querySelector("#studentId").value,
  name: document.querySelector("#name").value,
  house: document.querySelector("#house").value,
  imageUrl: document.querySelector("#imageUrl").value,
  }

  students.push(newCardObj);

  cardsOnDom(students);

  form.reset();
});

// *** STUDENT CARDS *** //
const cardsOnDom = (taco) => {
  let domString = " ";
  for (const sortedStudents of taco) {
    domString += `
  <div class="card" style="width: 18rem;">
  <img src="${sortedStudents.imageUrl}" class="card-img-top" alt="a hogwarts house crest">
  <div class="card-body">
    <h5 class="card-title">${sortedStudents.name}</h5>
    <p class="card-text">${sortedStudents.house}</p>
    <button class="btn btn-danger" id="delete--${sortedStudents.students}">Expel</button>
  </div>
</div> `;
}
renderToDom ("#filterStudentContainer", domString);
  };

// *** VOLDY'S ARMY CARD *** //
// const voldyCardsOnDom = (taco) => {
//   let domString = " ";
//   while (taco = students.length) {
//     domString += `
//     <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div> `;
//   }
//   renderToDom ("#voldysArmyContainer", domString);
// };

// *** STUDENT HOUSE CARDS *** //
// const cardsOnDom = (array) => {
//   let domString = " ";
//   do (const item, array) {
//     domString += `
    
//     `;
//   }
// }

// *** EVENT LISTENERS *** //


// document.querySelector("#filterStudentContainer").addEventListener("click", (e) => {
//   console.log("You clicked a filter button.", e.target.id);
//   if (e.target.id === "")



  //   if (e.target.id) {
//     console.log(e.target.id.split("--"));
//     const [method, students] = e.target.id.split("--");
//     const index = students.findIndex((taco) => taco.students === students);

//   if (e.target.id.includes("delete")) {
//     students.splice(index, 1);
//     cardsOnDom(students);
//     }
//   }
// });


// // *** FORM BUTTONS *** ///
// const houseButtons = () => {

// }









// *** FUNCTIONS *** //
hideContent ();
sortingHat ();
studentNameSubmit ();
houseButtons ();
cardsOnDom (students);
// voldyCardsOnDom ();
eventListeners ();
