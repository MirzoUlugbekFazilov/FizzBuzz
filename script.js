// Function for index.html
function goToNextPage() {
  let n = document.querySelector(".numberInput").value;

  if (!n || n < 1) {
    alert("Please enter a positive number.");
    return;
  }

  // Go to next page and pass number in URL
  window.location.href = "newpage.html?n=" + n;
}

// Function for newpage.html
function runFizzBuzz(n) {
  let results = document.querySelector(".results");
  results.innerHTML = "";

  n = parseInt(n);
  if (!n || n < 1) {
    results.innerHTML = "Invalid number.";
    return;
  }

  for (let i = 1; i <= n; i++) {
  let text;
  
  if (i % 15 === 0) {
    text = "FizzBuzz";
  } else if (i % 3 === 0) {
    text = "Fizz";
  } else if (i % 5 === 0) {
    text = "Buzz";
  } else {
    text = i;
  }

  results.innerHTML += text + "  " + "<br>";
}
}

// Run automatically on newpage.html
window.onload = function () {
  let params = new URLSearchParams(window.location.search);
  let n = params.get("n");

  if (document.querySelector(".results")) {
    runFizzBuzz(n);
  }
};
