  // Initialize Firebase
var config = {
    apiKey: "AIzaSyCckvguwo45qkgPaDlpjhQCYfboIiO8-p4",
    authDomain: "train-scheduler-405da.firebaseapp.com",
    databaseURL: "https://train-scheduler-405da.firebaseio.com",
    projectId: "train-scheduler-405da",
    storageBucket: "",
    messagingSenderId: "867187902694"
  };
firebase.initializeApp(config);

var database = firebase.database();

//button for adding trains
$("#add-train-btn").on("click", function(event){
event.preventDefault();

//Grabs user input
var trainName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var firstTrainTime = $("#firstTrain").val().trim();
var frequency = $("#frequency").val().trim();

//temp object for train data

var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrainTime,
    frequency: frequency
};

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.firstTrain);
console.log(newTrain.frequency);

alert("New Train successfully added");

$("#trainName").val("");
$("#destination").val("");
$("#firstTrain").val("");
$("#frequency").val("")
;




})
