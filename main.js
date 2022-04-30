console.log ("wingardium mimosa");
const students = [
  {
    studentId: 1,
    name: "Harry",
    house: "Gryffindor",
    firstYear: true,
  },
  {
    studentId: 2,
    name: "Ron",
    house: "Gryffindor",
    firstYear: true,
  },
  {
    studentId: 3,
    name: "Hermione",
    house: "Hufflepuff",
    firstYear: true,
  },
  {
    studentId: 4,
    name: "Malfoy",
    house: "Slytherin",
    firstYear: true,
  },
];
// console.log(students);

// *** UTILITY FUNCTIONS *** //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// *** HTML COMPONENT FUNCTIONS *** //
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











// *** FUNCTIONS *** //
studentNameSubmit ();
