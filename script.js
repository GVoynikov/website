let shape = document.getElementById('shape');
let startButton = document.getElementById('start');
let timer = document.getElementById('timer');
startButton.addEventListener('click', function(e) {
    e.preventDefault()
});
let shapesList = ['square', 'triangle', 'circle'];
let shapeColor = ['red', 'green', 'blue'];
let startTime;
let endTime;
let resultTime;
let counter = 0;

start.addEventListener('click', startGame, true);
shape.addEventListener('click', continueGame, true);


                    //Generate shape function//


    function generate() {
        counter++;
        console.log(counter);
        shape.className = shapesList[Math.floor(Math.random()*3)];
        shape.style.display = 'block';
        shape.style.backgroundColor = shapeColor[Math.floor(Math.random()*3)];
        startTime = Date.now();
    
        if (shape.className == 'triangle') {
            shape.style.top = Math.floor(Math.random()*175)+'px';
            shape.style.left = Math.floor(Math.random()*300)+'px';
            shape.style.borderBottomColor = shapeColor[Math.floor(Math.random()*3)];
            shape.style.backgroundColor = 'transparent';
        } else {
            shape.style.top = Math.floor(Math.random()*175)+'px';
            shape.style.left = Math.floor(Math.random()*325)+'px';
            shape.style.backgroundColor = shapeColor[Math.floor(Math.random()*3)];
            shape.style.borderBottomColor = 'transparent';
        };
    };

                // Start game function //

    function startGame() {
        startButton.style.display = 'none';
        shape.style.display = 'none';
        let randomInterval = Math.floor(Math.random()*1500+1000);
        setTimeout(generate, randomInterval);
        
        
    };

            // Play game function (on shape click) //

    function continueGame() {

        endTime = Date.now();
        resultTime = endTime - startTime;
        timer.innerText = resultTime;
        shape.style.display = 'none';
        let randomInterval = Math.floor(Math.random()*1500+1000);
        setTimeout(generate, randomInterval);

    };






 
     

