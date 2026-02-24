let title = document.getElementById("title");
//Type Narrowing
if (title !== null) {
  title.innerHTML = "Hi, You are not a NULL";
}

//Type Narrowing: instanceof(Recommended)
let title2 = document.getElementById("title2");
if (title2 instanceof HTMLHeadingElement) {
  title2.innerHTML = "Using instanceof";
}
//Type Narrowing: as
//Type Assertion(Force to the specific type)
//Not recommeneded
let title3 = document.querySelector("#title3") as Element;
title3.innerHTML = "Using Type Assertion";

//Type Narrowing: ?.(optional chaining )
//If the leftside of ?. has a right side, keep it. Otherwiser, returns undefined
//If the title4 has a innerHTML, it's ture. Otherwise, returns undefined

let title4 = document.getElementById("title4");
if (title4?.innerHTML) {
  title4.innerHTML = "?.";
} else {
  //title4.innerHTML = "Nothing in title4";
}

let gLink = document.querySelector(".g-link");
let newUrL = "https://github.com/Jay-Mo-99";
if (gLink instanceof HTMLAnchorElement) {
  gLink.innerHTML = "Github";
  gLink.href = newUrL;
}

let button = document.getElementById("button");
button?.addEventListener("click", function () {
  console.log("Click");
});

//Assignment
let testImage = document.getElementById("image");
if (testImage instanceof HTMLImageElement) {
  testImage.src = "new.png";
}

let linkClass = document.querySelectorAll(".naver");
let kakaoLink = "https://kakao.com";
linkClass.forEach((e) => {
  if (e instanceof HTMLAnchorElement) {
    e.innerHTML = "Kakao";
    e.href = kakaoLink;
  }
});
