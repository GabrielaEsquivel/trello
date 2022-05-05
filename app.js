//const Trello = require("./main");
var Trello = require("trello");

var trello = new Trello("7f7aec828eed9b4bb2f0db478a36ca57", "bb55da80299ea0b3e820c9443643b4e122fbf6cc41af736f3b3dcea6581a380f");
var cardTitle = `Card Nueva del test ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "6272ffd32ae6f3091dbe0dec",
  function (error, trelloCard) {
      console.log("HA ENTRADO AQUI")
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });