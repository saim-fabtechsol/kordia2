$(".musician-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".musician-slider-prev",
    nextArrow: ".musician-slider-next",
  //  autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".Musical-genre-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".Musical-genre-slider-prev",
    nextArrow: ".Musical-genre-slider-next",
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".testimonial-slider-prev",
    nextArrow: ".testimonial-slider-next",
    // autoplay: true,
});

$(document).ready(function () {
    $(".accordian-btn").click(function () {
        $(".accordian-content")
            .not($(this).closest("div").find(".accordian-content"))
            .slideUp();
        $(".accordian-btn .accordian-icon")
            .not($(this).find(".accordian-icon"))
            .removeClass("active");

        $(this).closest("div").find(".accordian-content").slideToggle();

        $(this).find(".accordian-icon").toggleClass("active");
    });
});

function displayToggle() {
    var x = document.getElementById("side-bar");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onload = function () {
    const targetElement = document.getElementById('target');
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const ctx2 = document.getElementById("db-revenue-graph").getContext("2d");
const mainorange = 'rgba(255, 151, 0, 1)';
const mainblue = 'rgba(0, 58, 94, 1)';

const gradient = ctx2.createLinearGradient(0, 0, 0, 800);
gradient.addColorStop(0, "rgba(237, 197, 138, .6)");
gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

// Set mycanvas width and height to 100%
const mycanvas = document.getElementById("db-revenue-graph");
mycanvas.style.width = '100%';
//mycanvas.style.height = '100%';

new Chart(ctx2, {
    type: "line",
    data: {
        labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
        datasets: [
            {
                label: "Revenue",
                data: [20, 40, 25, 50, 30, 85, 45, 65, 40, 60, 75, 60],
                borderWidth: 1,
                borderColor: mainorange,
                fill: true,
                backgroundColor: gradient,
                pointRadius: 4,
                pointBackgroundColor: mainblue,
                pointBorderColor: mainblue,
            },
        ],
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: true,
                },
                border: {
                    display: true,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                border: {
                    display: false,
                },
                ticks: {
                    stepSize: 20,
                    callback: function (value, index, ticks) {
                        return '$' + value + ' k';
                    },
                },
            },
        },
    },
});