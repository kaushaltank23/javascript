const abc = document.querySelectorAll(".images")
let count = 0

abc.forEach(
    (img, index) => {
        img.style.left = `${index * 100}%`
    });

const sliderimg = () => {
    abc.forEach(
        (img) => {
            img.style.transform = `translateX(-${count * 100}%)`
        });
}

const goPrev = () => {
    count--
    if (count == -1) {
        count = 3
    }
    sliderimg()
}
const goNext = () => {
    count++
    if (count >= abc.length) {
        count = 0
    }
    sliderimg()
}
