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

#### Bubble Sort

1. Start at the _beginning_ of the list.
2. Compare the _first two elements_ :

   - If the first is _greater_ than the second, _swap them_.
   - Otherwise, leave them as they are.

3. Move to the _next pair_ and _repeat_ the process.
4. Continue until the _end of the list_—this completes one full _pass_.
5. Repeat the process `N` _times_ (where `N` is the number of elements).
6. With each pass, the _largest unsorted element "bubbles up" to its correct position_.
7. Continue until no swaps are needed.
