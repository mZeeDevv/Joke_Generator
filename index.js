let joke_button = document.getElementById('btn')
let joke = document.getElementById('joke')
joke_button.onclick = function(){
  var jokeAray = [
    "Why did the tomato turn red? <br> Because it saw the salad dressing!",
    "Why did the scarecrow win an award? <br> Because he was outstanding in his field!",
    "What did one wall say to the other wall? <br> I'll meet you at the corner!",
    "Why don't scientists trust atoms? <br> Because they make up everything!",
    "What do you get when you cross a snowman and a vampire? </br> <b>Frostbite!</b>",
    "What do you call a bear with no teeth? <br> A gummy bear!",
    "Why did the cookie go to the doctor? </br> Because it felt crumbly!",
    "What do you call a lazy kangaroo?<br> A pouch potato!",
    "What do you get from a pampered cow? <br>Spoiled milk!",
    "Why don't oysters give to charity? <br> Because they're shellfish!",
    "Why did the bicycle fall over?<br>Because it was two-tired!",
    "What do you call a sleeping bull?<br>A bulldozer!",
    "What do you get when you cross a snowman and a shark?<br>Frostbite!",
    "Why did the chicken cross the playground?<br>To get to the other slide!",
    ""
  ];
  let numbers = Math.floor(Math.random() * 10);
  let randomJoke = jokeAray[numbers];
  joke.innerHTML = randomJoke;
  console.log("HEy")
}
