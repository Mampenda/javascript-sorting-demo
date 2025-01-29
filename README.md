# JavaScript + HTML Demonstration

This is a simple project which runs directly in a web browser.

It demonstrates the Bubble Sort algorithm with a visual element.

It demonstrates algorithms like Bubble Sort, Quick Sort, and/or a simple pathfinding algorithm with a visual element (e.g., sorting numbers in an array and displaying them dynamically).

## File Purposes:

The code contains three types of files: an `HTML`-, a `css`-, and a `JavaScript`-file.

`index.html`: Contains the structure of the page, including the button and container where bars will be displayed.

`styles.css`: Provides the styles for the page, such as the layout and the appearance of the bars.

`script.js`: Contains the logic for generating random bars and performing the bubble sort algorithm.

## How to Run the Code

### Locally

1. Open the project folder.
2. Double-click `index.html` to open it in (default) web browser.

### With Live Server in VSCode (rec.)

1. Install the _Live Server_ extension in VS Code.
2. Open the project folder.
3. Right-click `index.html` and select _"Open with Live Server"_.
4. The browser will open, and the page will auto-refresh when changes are made.

## Pseudocode

### What is Pseudocode?

Pseudocode is a way of writing steps in plain language to describe how a program should work. It isn’t a real programming language but helps us plan out logic before coding.

#### Examples of Pseudocode (can you guess what these do?)

```
bread = "wholemeal bread"
ingredients = ["butter", "cheese", "pesto"]

MakeToast(bread, ingredients)
  Slice the bread

  Assemble the sandwich

  Toast the sandwich

  Add ketchup

  Return finished grilled cheese sanwich
```

```
contact = "Ola Nordman"
phoneNumber = "12 34 56 78"

MakeCall(contact, phoneNumber)
    Unlock the phone // Ensure the phone is unlocked

    Open the phone dialer

    Dial the phone number

    If the call is connected then
      Talk to the contact
    else
      Leave a voicemal

    Return "Call completed"
```

```
number = 7  // The number we want to check

if number divided by 2 has no remainder then
    print "The number is even"
else
    print "The number is odd"
```

## Explanation of the Algorithms

### Bubble Sort

#### Plaintext

1. Start at the _beginning_ of the list.
2. Compare the _first two elements_ :

   - If the first is _greater_ than the second, _swap them_.
   - Otherwise, leave them as they are.

3. Move to the _next pair_ and _repeat_ the process.
4. Continue until the _end of the list_—this completes one full _pass_.
5. Repeat the process `N` _times_ (where `N` is the number of elements).
6. With each pass, the _largest unsorted element "bubbles up" to its correct position_.
7. Continue until no swaps are needed.

#### Psuedocode

```
BubbleSort(array)
    n = length of array
    repeat
        swapped = false
        for i = 0 to n-2 do
            if array[i] > array[i + 1] then
                swap array[i] with array[i + 1]
                swapped = true
        until swapped is false
```

### Quick Sort

#### Planitext

Quick Sort is a divide-and-conquer algorithm that selects a pivot and partitions elements into two halves:

1. Pick a "pivot" element from the list (usually the last element, but it could be any element).

2. Partition the list around the pivot:

   Rearrange the list so that all elements smaller than the pivot are on the left.
   All elements greater than the pivot are on the right.
   The pivot is now in its correct position, where it will stay once the list is fully sorted.

3. Recursively apply the same steps to the left and right sublists created by the pivot:

   The left sublist contains elements smaller than the pivot.
   The right sublist contains elements larger than the pivot.

4. Continue until each sublist contains only one element or is empty, at which point the sublists are considered sorted.

5. Merge the sublists—the result is a sorted list.

#### Pseudocode

```
QuickSort(array, low, high)
    if low < high then
        pivotIndex = Partition(array, low, high)
        QuickSort(array, low, pivotIndex - 1)  // Sort elements before the pivot
        QuickSort(array, pivotIndex + 1, high) // Sort elements after the pivot

Partition(array, low, high)
    pivot = array[high]  // Choose the pivot element (can be any element)
    i = low - 1          // Index of the smaller element
    for j = low to high - 1 do
        if array[j] <= pivot then
            i = i + 1
            swap array[i] with array[j]
    swap array[i + 1] with array[high]  // Place pivot in the correct position
    return i + 1  // Return the pivot's final index
```

#### Key-Differences

| Feature                                       | Bubble Sort                                     | Quick Sort                                             |
| --------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Approach                                      | Repeatedly swaps adjacent elements until sorter | Uses a pivot to divide and recursively sort            |
| Best Case Time Complexity                     | O(n) (Already Sorted)                           | O(n log n)                                             |
| Average Case Time Complexity                  | O(n²) (Slow)                                    | O(n log n) (Fast)                                      |
| Worst Case Time Complexity                    | O(n²) (Very slow on large lists)                | O(n²) (If poorly chosen pivot, but usually O(n log n)) |
| Sorting Method                                | In-place, swaps adjacent elements               | In-place, uses partitioning                            |
| Stability (Preserves order of equal elements) | Stable                                          | Not always stable                                      |
| Practical Use                                 | Simple but inefficient for large datasets       | Very efficient for large datasets                      |
| Recursion                                     | No recursion, simple loops                      | Uses recursion                                         |

## Explanation of the Code

### HTML-file

```html
<!--Declare the document as HTML5 -->
<!DOCTYPE html>

<!--Specifie that the primary language of the document is English. -->
<html lang="en">
  <!-- Head section of an HTML document -->
  <head>
    <!-- Character encoding for the document -->
    <meta charset="UTF-8" />

    <!-- Make sure the page is responsive on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Title displayed in the browser tab -->
    <title>Sorting Algorithm Demo</title>

    <!-- Link to external CSS file for styling -->
    <link rel="stylesheet" href="styles.css" />

    <!-- Include the JavaScript file (defer ensures it runs after the HTML is loaded) -->
    <script defer src="script.js"></script>
  </head>

  <!-- Body section of an HTML document -->
  <body>
    <!-- Heading displayed on the webpage -->
    <h1>Sorting Algorithms Visualization</h1>

    <!-- Button to generate a new set of random bars -->
    <button onclick="generateBars()">Generate Bars</button>

    <!-- Buttons to start sorting using different algorithms -->
    <button onclick="bubbleSort()">Bubble Sort</button>
    <button onclick="quickSort()">Quick Sort</button>

    <!-- Container that will hold the generated bars -->
    <div id="bars"></div>
  </body>
</html>
```

### css-file

```css
/* Basic styles for the page */
body {
  font-family: Arial, sans-serif; /* Sets font for the text */
  text-align: center; /* Centers text and elements */
}

/* Style for the container that holds the bars */
#bars {
  display: flex; /* Makes bars appear in a row */
  justify-content: center; /* Centers bars horizontally */
  align-items: flex-end; /* Aligns bars at the bottom */
  height: 120px; /* Sets the height of the container */
}

/* Style for individual bars */
.bar {
  width: 20px; /* Sets a fixed width for each bar */
  margin: 2px; /* Adds spacing between bars */
  background-color: steelblue; /* Sets the color of bars */
}
```

### JavaScript-file

```js
// Waits until the page is fully loaded before generating bars
document.addEventListener("DOMContentLoaded", () => {
  generateBars(); // Calls function to create the bars when the page loads
});

// Function to generate random bars
function generateBars() {
  const barsContainer = document.getElementById("bars"); // Gets the container div where bars will be displayed
  barsContainer.innerHTML = ""; // Clears any existing bars to refresh the visualization

  // Generates an array of 10 random heights between 10 and 100 pixels
  let numbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 10
  );

  // Creates bars dynamically based on the generated numbers
  numbers.forEach((num) => {
    let bar = document.createElement("div"); // Creates a new div element for each bar
    bar.classList.add("bar"); // Adds the "bar" class for styling
    bar.style.height = `${num}px`; // Sets the height of the bar based on the number
    barsContainer.appendChild(bar); // Appends the bar to the container
  });
}

// Function to perform the Bubble Sort algorithm on the bars
async function bubbleSort() {
  disableButtons(); // Disable buttons to prevent multiple clicks during sorting

  let bars = document.querySelectorAll(".bar"); // Select all bars
  let len = bars.length; // Number of bars

  // Outer loop iterates through the array
  for (let i = 0; i < len - 1; i++) {
    // Inner loop iterates through unsorted part of the array
    for (let j = 0; j < len - 1 - i; j++) {
      let height1 = parseInt(bars[j].style.height); // Gets the height of the first bar
      let height2 = parseInt(bars[j + 1].style.height); // Gets the height of the next bar

      // If the current bar is taller than the next one, swap them
      if (height1 > height2) {
        await swap(bars[j], bars[j + 1]); // Calls the swap function (with a delay for visualization)
      }
    }
  }
  enableButtons(); // Re-enable buttons after sorting is complete
}

// Function to perform the Quick Sort algorithm on the bars
async function quickSort(low = 0, high = null) {
  let bars = document.querySelectorAll(".bar"); // Selects all bars dynamically

  if (high === null) high = bars.length - 1; // Sets high index on the first function call

  // Only proceed if there are elements to sort
  if (low < high) {
    let pivotIndex = await partition(bars, low, high); // Calls partition function to find pivot position
    await quickSort(low, pivotIndex - 1); // Recursively sorts the left part of the pivot
    await quickSort(pivotIndex + 1, high); // Recursively sorts the right part of the pivot
  }

  // Ensure buttons are only enabled once all recursion is finished
  if (low === 0 && high === bars.length - 1) {
    enableButtons();
  }
}

// Partition function for Quick Sort
async function partition(bars, low, high) {
  let pivot = parseInt(bars[high].style.height); // Uses the last element as the pivot
  let i = low - 1; // Pointer for elements smaller than the pivot

  // Loop through elements to compare them with the pivot
  for (let j = low; j < high; j++) {
    let heightJ = parseInt(bars[j].style.height); // Gets the height of the current bar

    // If current bar is smaller than pivot, move it to the left
    if (heightJ < pivot) {
      i++; // Move the boundary for smaller elements
      await swap(bars[i], bars[j]); // Swaps the smaller element to the correct position
    }
  }

  await swap(bars[i + 1], bars[high]); // Places the pivot in its correct position
  return i + 1; // Returns the final position of the pivot
}

// Function to swap two bars (divs) with animation delay
function swap(bar1, bar2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let temp = bar1.style.height; // Temporarily stores the height of the first bar
      bar1.style.height = bar2.style.height; // Assigns the second bar's height to the first
      bar2.style.height = temp; // Assigns the stored height to the second bar
      resolve(); // Resolves the promise after the swap
    }, 200); // Delay of 200ms to visualize sorting
  });
}
```

#### What each part of the JavaScript does:

`generateBars()`:
This function creates 10 random bars with heights between 0 and 100 pixels. It places them in the container (#bars) on the webpage.

`bubbleSort()`:
This function implements the Bubble Sort algorithm. It repeatedly compares and swaps adjacent bars (if needed) until the bars are in the correct order. The function is asynchronous to allow for the visual updates (swapping bars) to be seen step-by-step.

`quickSort()`
This function implements the Quick Sort algorithm. It selects a "pivot" element (usually the last), partitions the bars by moving all those smaller than the pivot to the left of it and all those larger to the right. Then, it recursively sorts the left and right partitions until all elements are sorted.

`swap()`:
This function swaps the heights of two bars. It uses a setTimeout to add a 200ms delay, making the swapping action visible to the user.

`document.addEventListener("DOMContentLoaded", ...)`:
This ensures that the bars are generated as soon as the HTML content is fully loaded and the DOM is ready for manipulation.
