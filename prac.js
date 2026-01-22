


    /* Shopping Cart */

    function calculateTotal() {
    let variablename = document.getElementById("cart");

    let prices = [250, 150, 400, 100, 300];
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }

    console.log("Shopping Cart  total Prices : ",sum);

    variablename.innerHTML = "Shopping Cart  total Prices : " + sum;

    }

    
    
    
    /* Exam Marks Analyzer */

    function calculatemarks() {
    let vbr = document.getElementById("marks");

    let marks = [45, 67, 89, 32, 56, 78, 90, 66, 74, 50];

    let max = 0;
    let min = 100;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > max) {
            max = marks[i];
        }
    }

    console.log("max marks:", max);
    vbr.innerHTML = "max marks: " + max + "<br>";


    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < min) {
            min = marks[i];
        }
    }

    console.log("min marks :", min);
    vbr.innerHTML += "min marks :" + min;

    }

    
    
    
    
    /* temperature tracker  */

    function calculatetemp() {
    let vbr = document.getElementById("temp");


    let temps = [32, 34, 31, 29, 28, 30, 33];

    let tsum = 0;

    for (let i = 0; i < temps.length; i++) {
        tsum += temps[i];
    }   

    let tavg = tsum / temps.length;

    console.log("average temperature :", tavg);

    vbr.innerHTML = "average temperature : " + tavg;


    }

    
    
    
    
    /* even or odd checker */


    function evenodd() {
    let vbr = document.getElementById("evn");
    let vo = document.getElementById("odd");


    let odd = [];
    let even = [];

    let rollNumbers = [101, 102, 103, 104, 105, 106, 107];
    vbr.innerHTML = ""; // Clear previous output , like sum = 0;

    for (let i = 0; i < rollNumbers.length; i++) {
        if (rollNumbers[i] % 2 == 0) {
            even.push(rollNumbers[i]);
            console.log(rollNumbers[i] + " is an even number.");
            //the logic is similar to sum of the numbers
        } else {
            odd.push(rollNumbers[i]);
            console.log(rollNumbers[i] + " is an odd number.");
              //every time print in the document when the vbr.innerHTML is called 
        }
    }

    //for even numbers


        vbr.innerHTML += "these are the even numbers:";

        for (let i = 0; i < even.length; i++) {
            vbr.innerHTML += even[i] + " ";
        }

    //for odd numbers

        vo.innerHTML += "these are the odd numbers:";

        for (let i = 0; i < odd.length; i++) {
            vo.innerHTML += odd[i] + " ";
        }
        
    
    
    
    }

    
    
    function searchproduct() {
        let vbr = document.getElementById("search");
        let products = ["Laptop", "Mobile", "Tablet", "Keyboard", "Mouse"];
        for (let i = 0; i < products.length; i++) {
            if(products[i] == "Tablet")
            {
                vbr.innerHTML = " Tablet is available";
            }
            
            
        }
    }


    function reverse(){
        let vbr = document.getElementById("reverse");
        let playlist = ["Song1", "Song2", "Song3", "Song4", "Song5"];

        for (let i = playlist.length - 1; i >= 0; i--) {
            vbr.innerHTML += playlist[i] + "<br>";
        }

        
    }

    function remove(){
        let vbr = document.getElementById("remove");
        let dlr = document.getElementById("duplicate");

        let visitors = [101, 102, 103, 101, 104, 102, 105];
        let uniqueVisitors = [];
        let duplicates = [];

        for (let i = 0; i < visitors.length; i++) {
            if (!uniqueVisitors.includes(visitors[i])) { //ensure check that number is not present in the array
                uniqueVisitors.push(visitors[i]);
                
            } else {
                duplicates.push(visitors[i]);lr.innerHTML += visitors[i] + "<br>" + "these are the duplicate visitors";
            }
        }

        

    }    
