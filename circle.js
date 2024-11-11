slider.addEventListener("input", function() {
    var radius = slider.value;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    radiusValue.textContent = radius;
});

slider.dispatchEvent(new Event("input"));