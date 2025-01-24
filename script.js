document.addEventListener("DOMContentLoaded", () => {
    generateBars();
});

function generateBars() {
    const barsContainer = document.getElementById("bars");
    barsContainer.innerHTML = "";
    let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

    numbers.forEach((num) => {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${num}px`;
        barsContainer.appendChild(bar);
    });
}

async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");
    let len = bars.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);

            if (height1 > height2) {
                await swap(bars[j], bars[j + 1]);
            }
        }
    }
}

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
