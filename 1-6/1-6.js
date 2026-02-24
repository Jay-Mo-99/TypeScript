var title = document.getElementById("title");
//Type Narrowing
if (title !== null) {
    title.innerHTML = "Hi, You are not a NULL";
}
//Type Narrowing: instanceof(Recommended)
var title2 = document.getElementById("title2");
if (title2 instanceof HTMLHeadingElement) {
    title2.innerHTML = "Using instanceof";
}
//Type Narrowing: as
//Type Assertion(Force to the specific type)
//Not recommeneded
var title3 = document.querySelector("#title3");
title3.innerHTML = "Using Type Assertion";
//Type Narrowing: ?.(optional chaining )
//If the leftside of ?. has a right side, keep it. Otherwiser, returns undefined
//If the title4 has a innerHTML, it's ture. Otherwise, returns undefined
var title4 = document.getElementById("title4");
if (title4 === null || title4 === void 0 ? void 0 : title4.innerHTML) {
    title4.innerHTML = "?.";
}
else {
    //title4.innerHTML = "Nothing in title4";
}
var gLink = document.querySelector(".g-link");
var newUrL = "https://github.com/Jay-Mo-99";
if (gLink instanceof HTMLAnchorElement) {
    gLink.innerHTML = "Github";
    gLink.href = newUrL;
}
var button = document.getElementById("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("Click");
});
//Assignment
var testImage = document.getElementById("image");
if (testImage instanceof HTMLImageElement) {
    testImage.src = "new.png";
}
var linkClass = document.querySelectorAll(".naver");
var kakaoLink = "https://kakao.com";
linkClass.forEach(function (e) {
    if (e instanceof HTMLAnchorElement) {
        e.innerHTML = "Kakao";
        e.href = kakaoLink;
    }
});
