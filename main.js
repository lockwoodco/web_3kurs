class Model {

    constructor() {}

    checkAnswers(result, rightAnswers, countAnswers) {

        if (countAnswers > 12) result.innerHTML = "You can only select one option per question";
        else if (countAnswers < 12) result.innerHTML = "Every question needs to be answered";
        else {
            if (rightAnswers < 7) result.innerHTML = "Your result is " + rightAnswers + "/12. Try better!";
            else result.innerHTML = "Your result is " + rightAnswers + "/12. Well done!";
        }

        result.style.display = "block";
    
    }
}

class View {

    constructor() {}

    usersAnswers() {
        let rightAnswers = 0, countAnswers = 0;
        var elements = document.getElementsByClassName("form-check-input");
        var result = document.getElementById("result");
        debugger;
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i].checked) {
                countAnswers++;
                if (elements[i].id == "rightCheckBox") rightAnswers++;
            }
        }

        var myModel = new Model();
        myModel.checkAnswers(result, rightAnswers, countAnswers);
    }

}
  
class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
}

const controller = new Controller(new Model(), new View())