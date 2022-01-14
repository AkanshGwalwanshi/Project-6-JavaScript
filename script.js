const counter = document.querySelectorAll(".counter");

counter.forEach((counter) =>{
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute("data-target");
        const startCount = +counter.innerHTML;

        const incr = targetCount/100;

        if(startCount<targetCount){
            counter.innerHTML = `${Math.round(startCount + incr)}`;
            setTimeout(updateCounter, 10);
        }
    };

    updateCounter();
});

// There are several methods to convert string to numbers

// Using the unary + operator
// var n = +str;

// The Number Constructor
// var n = Number(str);

// The parseFloat Function
// var n = parseFloat(str);