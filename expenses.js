
//@ aviGeta sololern

window.onload = function () {

    var items;
    var bolTog = true;
    var editBtn;
    var totalSum = 0;
    var delEl;
    var dataFromlocal = [];
    var n = "";
    var a = "";

    var itm = document.getElementById("items");
    var btns = document.getElementById("btns");
    var addItem = document.getElementById("add");

    //localStorage.removeItem("savedExpenses");
    //itm.addEventListener("input",changeWidth);

    loadSavedData();


    function htmlAdd() {
        return (
            `<div class="ex">
            <input type="text" 
            class="data"
            value = ${n}> 
                 <input type="number" 
                        class="item"
                        value = ${a} > 
                 
                   <button class = "edit"> SAVE </button>
                   <button class =  "del">   x   </button>

             </div> 
           `
        );

    }

    function getEl() {
        items = document.getElementsByClassName("item");
        editBtn = document.getElementsByClassName("edit");
        delEl = document.getElementsByClassName("del");
    }

    function saveItem(event) {
      
        var ct = event.currentTarget;
        /*
        for(var i = 0 ; i < (pn.childNodes.length);i++)
          alert(pn.childNodes[i].value);
        */

        if (bolTog) {
            ct.innerHTML = "EDIT";
           ct.parentNode.childNodes[1].setAttribute("disabled", "disabled");
           ct.parentNode.childNodes[3].setAttribute("disabled", "disabled");
            bolTog = !bolTog;
        }
        else {
            
            ct.innerHTML = "SAVE";
            ct.parentNode.childNodes[1].
                removeAttribute("disabled");

            ct.innerHTML = "SAVE";
            ct.parentNode.childNodes[3].
                removeAttribute("disabled");
            bolTog = !bolTog

        }

    }

    function deleteData(event) {
        var dt = event.currentTarget;
        dt.parentNode.parentNode.removeChild(dt.parentNode);
        sumExpenses();
    }

    function sumExpenses() {

        getEl();
        for (var i = 0; i < (items.length); i++)
            totalSum += Number(items[i].value);

        document.getElementById("totalSum").innerHTML = totalSum;
        totalSum = 0;
    }

    function saveData() {
        var myExpenses = [];
        var expensesAmount = document.getElementsByClassName("item");
        var expeneseName = document.getElementsByClassName("data");

        for (var i = 0; i < (expensesAmount.length); i++) {
            var expense = {
                expN: expeneseName[i].value,
                expA: expensesAmount[i].value
            };

            myExpenses.push(expense);
        }

        localStorage.setItem("savedExpenses", JSON.stringify(myExpenses));
    }


    function loadSavedData() {
        dataFromlocal = JSON.parse(localStorage.getItem("savedExpenses"));
        if (dataFromlocal == null) {
            var myExpenses = [];
            var expensesAmount = "";
            var expeneseName = "";
            var expense = {
                expN: expeneseName,
                expA: expensesAmount
            };

            myExpenses.push(expense);
            localStorage.setItem("savedExpenses", JSON.stringify(myExpenses));

        }

        else {

            for (var i = 0; i < (dataFromlocal.length); i++) {

                a = dataFromlocal[i].expA;
                n = dataFromlocal[i].expN;
                document.getElementById("items").innerHTML += htmlAdd();
            }

        }

        getEl();
        listner();
        sumExpenses();

    }
    
    document.getElementById("saveAll").addEventListener("click", saveData);

    function listner() {
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("input", sumExpenses);
            editBtn[i].addEventListener("click", saveItem);
            delEl[i].addEventListener("click", deleteData);
        }
    }

    addItem.addEventListener("click", function () {
        n = "";
        a = "";
        document.getElementById("items").innerHTML += htmlAdd();

        getEl();
        listner();
    });

}
//@ aviGeta sololern

window.onload = function () {

    var items;
    var bolTog = true;
    var editBtn;
    var totalSum = 0;
    var delEl;
    var dataFromlocal = [];
    var n = "";
    var a = "";

    var itm = document.getElementById("items");
    var btns = document.getElementById("btns");
    var addItem = document.getElementById("add");

    //localStorage.removeItem("savedExpenses");
    //itm.addEventListener("input",changeWidth);
    
     try{
      loadSavedData();
     }
     catch{
     }

    function htmlAdd() {
        return (
            `<div class="ex">
            <input type="text" 
            class="data"
            value = ${n}> 
                 <input type="number" 
                        class="item"
                        value = ${a} > 
                   <div class = "menu"> 
                   <span class="menuSimbol">&#8285</span>
                   <button class = "edit"> SAVE </button>
                   <button class =  "del"> X </button>
                   </div>
             </div>`
        );

    }

    function getEl() {
        items = document.getElementsByClassName("item");
        editBtn = document.getElementsByClassName("edit");
        delEl = document.getElementsByClassName("del");
        menuSimbol = document.getElementsByClassName("menuSimbol");
    }

    var tg = true;
    function menuItem (){
    var pn = this.parentNode.children;
    if(tg){
    pn[1].style.display="block";
    pn[2].style.display="block";
    tg=false;
    }
    else{
    pn[1].style.display="none";
    pn[2].style.display="none";
    tg=true;
    }
    
    }
    
    function saveItem(event) {
      
        var ct = event.currentTarget;
        /*
        for(var i = 0 ; i < (pn.childNodes.length);i++)
          alert(pn.childNodes[i].value);
        */

        if (bolTog) {
            ct.innerHTML = "EDIT";
           ct.parentNode.childNodes[1].setAttribute("disabled", "disabled");
           ct.parentNode.childNodes[3].setAttribute("disabled", "disabled");
            bolTog = !bolTog;
        }
        else {
            
            ct.innerHTML = "SAVE";
            ct.parentNode.childNodes[1].
                removeAttribute("disabled");

            ct.innerHTML = "SAVE";
            ct.parentNode.childNodes[3].
                removeAttribute("disabled");
            bolTog = !bolTog

        }

    }

    function deleteData(event) {
        var dt = event.currentTarget;
        dt.parentNode.parentNode.parentNode.removeChild(dt.parentNode.parentNode);
        sumExpenses();
    }

    function sumExpenses() {

        getEl();
        for (var i = 0; i < (items.length); i++)
            totalSum += Number(items[i].value);

        document.getElementById("totalSum").innerHTML = totalSum;
        totalSum = 0;
    }

    function saveData() {
         try{
        var myExpenses = [];
        var expensesAmount = document.getElementsByClassName("item");
        var expeneseName = document.getElementsByClassName("data");

        for (var i = 0; i < (expensesAmount.length); i++) {
            var expense = {
                expN: expeneseName[i].value,
                expA: expensesAmount[i].value
            };

            myExpenses.push(expense);
        }

        localStorage.setItem("savedExpenses", JSON.stringify(myExpenses));
        }
        catch{
          
        }
    }


    function loadSavedData() {
        dataFromlocal = JSON.parse(localStorage.getItem("savedExpenses"));
        if (dataFromlocal == null) {
            var myExpenses = [];
            var expensesAmount = "";
            var expeneseName = "";
            var expense = {
                expN: expeneseName,
                expA: expensesAmount
            };

            myExpenses.push(expense);
            localStorage.setItem("savedExpenses", JSON.stringify(myExpenses));

        }

        else {

            for (var i = 0; i < (dataFromlocal.length); i++) {

                a = dataFromlocal[i].expA;
                n = dataFromlocal[i].expN;
                document.getElementById("items").innerHTML += htmlAdd();
            }

        }

        getEl();
        listner();
        sumExpenses();

    }
    
    document.getElementById("saveAll").addEventListener("click", saveData);

    function listner() {
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("input", sumExpenses);
            editBtn[i].addEventListener("click", saveItem);
            delEl[i].addEventListener("click", deleteData);
            menuSimbol[i].addEventListener("click", menuItem);
        }
    }

    addItem.addEventListener("click", function () {
        n = "";
        a = "";
        document.getElementById("items").innerHTML += htmlAdd();

        getEl();
        listner();
    });

}
