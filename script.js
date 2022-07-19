function myFun(){
     fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const temp = document.getElementById('newTemp');

        temp.innerHTML = jokeText;
    })  }

myFun()

document.getElementById("get_joke").addEventListener('click', function() {
    myFun()
});