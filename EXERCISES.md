# Exercises

## Exercise 1 - Cosider the JavaScript Code

```javascript
// Waits until the page is fully loaded before generating bars
document.addEventListener("DOMContentLoaded", () => {
  generateBars();
});

// Function to generate random bars
function generateBars() {
  const barsContainer = document.getElementById("bars");
  barsContainer.innerHTML = ""; // Clears existing bars
  let numbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  ); // Generates 10 random numbers

  numbers.forEach((num) => {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${num}px`;
    barsContainer.appendChild(bar);
  });
}

// Function to perform the bubble sort algorithm on the bars
async function bubbleSort() {
  //TODO: Implement the Bubble Sort algorithm
}

// Function to perform the quick sort algorithm on the bars
async function quickSort(low = 0, high = null) {
  let bars = document.querySelectorAll(".bar");

  if (high === null) high = bars.length - 1;
  if (low < high) {
    let pivotIndex = await partition(bars, low, high);
    await quickSort(low, pivotIndex - 1);
    await quickSort(pivotIndex + 1, high);
  }
}

// Partition function for Quick Sort
async function partition(bars, low, high) {
  let pivot = parseInt(bars[high].style.height);
  let i = low - 1; // Index of smaller element

  for (let j = low; j < high; j++) {
    let heightJ = parseInt(bars[j].style.height);

    if (heightJ < pivot) {
      i++;
      await swap(bars[i], bars[j]); // Swap bars visually
    }
  }

  await swap(bars[i + 1], bars[high]); // Move pivot to correct position
  return i + 1; // Return the pivot index
}

// Function to swap two bars (divs)
function swap(bar1, bar2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let temp = bar1.style.height;
      bar1.style.height = bar2.style.height;
      bar2.style.height = temp;
      resolve();
    }, 200);
  });
}
```

### Hint

These are the correct lines of code put in a random order.

```javascript
await swap(bars[j], bars[j + 1]); // Calls the swap function (with a delay for visualization)

// Inner loop iterates through unsorted part of the array
for (let j = 0; j < len - 1 - i; j++) {}

let height2 = parseInt(bars[j + 1].style.height); // Gets the height of the next bar

// If the current bar is taller than the next one, swap them
if (height1 > height2) {
}

let len = bars.length; // Stores the number of bars

// Outer loop iterates through the array
for (let i = 0; i < len - 1; i++) {}

let height1 = parseInt(bars[j].style.height); // Gets the height of the current bar
let bars = document.querySelectorAll(".bar"); // Selects all bars in the container
```
