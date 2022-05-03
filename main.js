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
const sortingHat = () => {
  let domString = `
<div class="cardContainer" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/hQ2rS_B_DGA/maxresdefault.jpg" class="card-img-top" alt="a sorting hat">
  <div class="card-body">
    <p class="card-text">Hello There Wizard. I am the Sorting Hat. Here lies your fate for the rest of your time at Hogwarts. ~ * Expecto Patronum to you ~*</p>
    <button type="button" class="btn btn-dark">Start Sorting!</button>
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
<button type="button" class="btn btn-outline-danger">Gryffindor</button>
<button type="button" class="btn btn-outline-warning">Hufflepuff</button>
<button type="button" class="btn btn-outline-primary">Ravenclaw</button>
<button type="button" class="btn btn-outline-success">Slytherin</button>
`;
renderToDom ("#houseButtonContainer", domString)
};

const filter = (e) => {
  console.log("Gryffindor" === e.target.id)
  if ("Hufflepuff" === e.target.id) {
    console.log("You clicked the Hufflepuff button.");
  } else if ("Ravenclaw" === e.target.id) {
    console.log("You clicked the Ravenclaw button.");
  } else if ("Slytherin" === e.target.id) {
    console.log("You clicked the Slytherin button.");
  } else if ("Gryffindor" === e.target.id) {
    console.log("You clicked the Gryffindor button.");
  }
};

// filterStudentContainer.innerHTML = domString;

// *** HOUSE BUTTON FILTER *** //

document.querySelector("#houseButtonContainer").addEventListener("click", (e) => {
  console.log("You clicked a filter button.", e.target.id);
  if (e.target.id === "Gryffindor") {
    cardsOnDom(students);
  } else if (e.target.id) {
    const houses = students.filter((taco) => taco.type === e.target.id);
    console.log(houses);
    cardsOnDom(houses);
  }
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
    <a href="#" class="btn btn-danger">Expel</a>
  </div>
</div> `;
}
renderToDom ("#filterStudentContainer", domString);
  };

// *** VOLDY'S ARMY CARD *** //
// const voldyCardsOnDom = (taco) => {
//   let domString = " ";
//   while (voldyCardsOnDom = taco) {
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
// const eventListeners = () => {
// document.querySelector("#cardContainer").addEventListener("click",(e) => {
//   console.log("You may enter the student name", e.target.id);
//   if (e.target.id === "#submitStudentContainer"){
//     cardsOnDom(studentNameSubmit);
//   } else if (e.target.id) {
//     const houses = students.filter (taco => taco.type === e.target.id);
//     cardsOnDom(houses);
//   }
// });
// }

// // *** FORM BUTTONS *** ///
// const houseButtons = () => {

// }









// *** FUNCTIONS *** //

sortingHat ();
studentNameSubmit ();
houseButtons ();
cardsOnDom (students);
// voldyCardsOnDom (students);
// eventListeners ();
