# JavaScript + HTML Demonstration

This is a simple HTML file with JavaScript that runs directly in a web browser.

It demonstrates algorithms like Bubble Sort, Quick Sort, and/or a simple pathfinding algorithm with a visual element (e.g., sorting numbers in an array and displaying them dynamically).

## How to Run the Code

### Locally

1. Open the project folder.
2. Double-click `index.html` to open it in (default) web browser.

### With Live Server in VSCode (rec.)

1. Install Live Server extension in VS Code.
2. Open the project folder.
3. Right-click `index.html` and select _"Open with Live Server"_.
4. The browser will open, and the page will auto-refresh when changes are made.

## Explanation of the Algorithms

### Bubble Sort

1. Start at the _beginning_ of the list.
2. Compare the _first two elements_ :

   - If the first is _greater_ than the second, _swap them_.
   - Otherwise, leave them as they are.

3. Move to the _next pair_ and _repeat_ the process.
4. Continue until the _end of the list_—this completes one full _pass_.
5. Repeat the process `N` _times_ (where `N` is the number of elements).
6. With each pass, the _largest unsorted element "bubbles up" to its correct position_.
7. Continue until no swaps are needed.

## Explanation of the Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Character encoding for the document -->
    <meta charset="UTF-8" />

    <!-- Makes sure the page is responsive on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Title displayed in the browser tab -->
    <title>Sorting Algorithm Demo</title>

    <!-- Link to external CSS file for styling -->
    <link rel="stylesheet" href="styles.css" />

    <!-- Include the JavaScript file (defer ensures it runs after the HTML is loaded) -->
    <script defer src="script.js"></script>
  </head>
  <body>
    <!-- Heading displayed on the webpage -->
    <h1>Bubble Sort Visualization</h1>

    <!-- Button to trigger the sorting function -->
    <button onclick="bubbleSort()">Sort</button>

    <!-- Container where the sorting bars (divs) will be displayed -->
    <div id="bars"></div>
  </body>
</html>
```

```css
/* Style for the whole page */
body {
  /* Sets the font family to Arial (sans-serif if Arial is unavailable) */
  font-family: Arial, sans-serif;

  /* Centers the text on the page */
  text-align: center;
}

/* Style for the container that holds the bars */
#bars {
  /* Uses flexbox to arrange items in a row (horizontal) */
  display: flex;

  /* Aligns the bars to the bottom of the container */
  align-items: flex-end;

  /* Centers the bars horizontally */
  justify-content: center;

  /* Sets the height of the container that holds the bars */
  height: 120px;
}

/* Style for individual bars */
.bar {
  /* Sets the width of each bar */
  width: 20px;

  /* Adds space between each bar */
  margin: 2px;

  /* Sets the color of the bars */
  background-color: steelblue;
}
```

```js
// Waits until the DOM content is fully loaded before running the function
document.addEventListener("DOMContentLoaded", () => {
  // Generates random bars when the page is loaded
  generateBars();
});

// Function to generate random bars
function generateBars() {
  // Get the container where the bars will be placed
  const barsContainer = document.getElementById("bars");

  // Clears any existing bars from the container (if any)
  barsContainer.innerHTML = "";

  // Creates an array of 10 random numbers (representing bar heights)
  let numbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  // Loop through each number in the array and create a div for each bar
  numbers.forEach((num) => {
    // Create a div element to represent a bar
    let bar = document.createElement("div");

    // Adds the 'bar' class to the div to apply CSS styling
    bar.classList.add("bar");

    // Sets the height of the bar based on the random number
    bar.style.height = `${num}px`;

    // Appends the bar div to the bars container in the HTML
    barsContainer.appendChild(bar);
  });
}

// Function to perform the bubble sort algorithm on the bars
async function bubbleSort() {
  // Get all the bars (div elements) currently on the page
  let bars = document.querySelectorAll(".bar");

  // Get the number of bars
  let len = bars.length;

  // Loop through each element to perform sorting
  for (let i = 0; i < len - 1; i++) {
    // Inner loop to compare adjacent bars
    for (let j = 0; j < len - 1 - i; j++) {
      // Get the height of two adjacent bars
      let height1 = parseInt(bars[j].style.height);
      let height2 = parseInt(bars[j + 1].style.height);

      // If the first bar is taller than the second one, swap them
      if (height1 > height2) {
        await swap(bars[j], bars[j + 1]);
      }
    }
  }
}

// Function to swap two bars (divs)
function swap(bar1, bar2) {
  return new Promise((resolve) => {
    // Delay the swap by 200ms so we can visualize the change
    setTimeout(() => {
      // Temporarily store the height of the first bar
      let temp = bar1.style.height;

      // Swap the heights of the two bars
      bar1.style.height = bar2.style.height;
      bar2.style.height = temp;

      // Resolve the promise to indicate that the swap is complete
      resolve();
    }, 200);
  });
}
```
