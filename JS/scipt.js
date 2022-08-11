// for the navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})

// prevent errors from java reading other page
if (document.URL.includes("healthbenefit.html")) {
    function CheckDisplay(z) {
        var y = document.getElementById(z);
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "block";
        }
    }
    // each func1,2,3,4,5,6,7 is to remove notext1,2,3,4,5,6,7
    function func1() {

        var x = document.getElementById("notext1");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("healthBenefits");
    }
    function func2() {
        var x = document.getElementById("notext2");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("whiteTeaBenefits");
    }
    function func3() {

        var x = document.getElementById("notext3");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("herbalTeaBenefits");
    }
    function func4() {

        var x = document.getElementById("notext4");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("greenTeaBenefits");
    }
    function func5() {

        var x = document.getElementById("notext5");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("blackTeaBenefits");
    }
    function func6() {

        var x = document.getElementById("notext6");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("oolongTeaBenefits");
    }
    function func7() {

        var x = document.getElementById("notext7");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
        CheckDisplay("teasToAvoid");
    }
    document.getElementById("notext1").addEventListener("click", func1);
    document.getElementById("notext2").addEventListener("click", func2);
    document.getElementById("notext3").addEventListener("click", func3);
    document.getElementById("notext4").addEventListener("click", func4);
    document.getElementById("notext5").addEventListener("click", func5);
    document.getElementById("notext6").addEventListener("click", func6);
    document.getElementById("notext7").addEventListener("click", func7);
}
