function changeProductImage(button) {

    const mainImage = document.getElementById("mainProductImage");

    const thumbnailImage = button.querySelector("img");

    mainImage.style.opacity = "0";

    setTimeout(function () {

        mainImage.src = thumbnailImage.src;

        mainImage.style.opacity = "1";

    }, 150);


    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(function (item) {
        item.classList.remove("active");
    });

    button.classList.add("active");
}