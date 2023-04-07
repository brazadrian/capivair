(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#000000"; // cor dos textos das legendas de todos os graficos
    Chart.defaults.borderColor = "#000000"; //outline das caixas dos graficos(single line chart & multiple line chart)





//-- TELA -> index.html
//-- GRAFICO COLUNA #worldwide-sales
    function fetchData() {
        return fetch('dados.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
    }

    fetchData().then(data => {
        // Worldwide Sales Chart
        var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
        var myChart1 = new Chart(ctx1, {
            type: "bar",
            data: {
                labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                datasets: [
                    {
                        label: "AR",
                        data: [
                            data.ARcoluna1,
                            data.ARcoluna2,
                            data.ARcoluna3,
                            data.ARcoluna4,
                            data.ARcoluna5,
                            data.ARcoluna6,
                            data.ARcoluna7
                        ],
                        backgroundColor: "#89CFF0" // primeira barra do grafico (multiple bar chart)
                    },
                    {
                        label: "ÁGUA",
                        data: [
                            data.AGUAcoluna1,
                            data.AGUAcoluna2,
                            data.AGUAcoluna3,
                            data.AGUAcoluna4,
                            data.AGUAcoluna5,
                            data.AGUAcoluna6,
                            data.AGUAcoluna7
                        ],
                        backgroundColor: "#0096FF" //segunda barra do grafico (multiple bar chart)
                    },
                    {
                        label: "SOLO",
                        data: [
                            data.SOLOcoluna1,
                            data.SOLOcoluna2,
                            data.SOLOcoluna3,
                            data.SOLOcoluna4,
                            data.SOLOcoluna5,
                            data.SOLOcoluna6,
                            data.SOLOcoluna7
                        ],
                        backgroundColor: "#0047AB" //terceira barra do grafico (multiple bar chart)
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
    });

//-- TELA -> index.html
//-- GRAFICO LINHA #salve-chart
    fetchData().then(data => {
        // Salse & Revenue Chart
        var ctx2 = $("#salse-revenue").get(0).getContext("2d");
        var myChart2 = new Chart(ctx2, {
            type: "line",
            data: {
                labels: ["04/04", "05/04", "06/04", "07/04", "08/04", "09/04", "10/04"],
                datasets: [{
                        label: "Setor A",
                        data: [
                            data.linhaA1,
                            data.linhaA2,
                            data.linhaA3,
                            data.linhaA4,
                            data.linhaA5,
                            data.linhaA6,
                            data.linhaA7
                        ],
                        backgroundColor: "rgba(137, 207, 240, .5)", // linha setor a (Multiple line chart)
                        fill: true
                    },
                    {
                        label: "Setor B",
                        data: [
                            data.linhaB1,
                            data.linhaB2,
                            data.linhaB3,
                            data.linhaB4,
                            data.linhaB5,
                            data.linhaB6,
                            data.linhaB7
                        ],
                        backgroundColor: "rgba(0, 150, 255, .5)", // linha setor b (Multiple line chart)
                        fill: true
                    },
                    {
                        label: "Setor C",
                        data: [
                            data.linhaC1,
                            data.linhaC2,
                            data.linhaC3,
                            data.linhaC4,
                            data.linhaC5,
                            data.linhaC6,
                            data.linhaC7,
                        ],
                        backgroundColor: "rgba(0, 71, 171, .9)", // linha setor c (Multiple line chart)
                        fill: true
                    },
                ]
                },
            options: {
                responsive: true
            }
        });
    });


//-- TELA -> chart.html
//-- 1° Grafico em Linha
    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: ["09:50", "10:50", "11:50", "12:50", "00:50", "01:50", "02:50", "03:50", "04:50", "05:50", "06:50"],
            datasets: [{
                label: "Hora",
                fill: false,
                backgroundColor: "rgba(137, 207, 240)", // cor dos pontos (single line chart)
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

//-- Há um Grafico nesse momento na tela, que é o Grafico em Linha da index.html

//-- TELA -> chart.html
//-- Grafico em colunas separadas
    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["00101", "00201", "00301", "00401", "00501"],
            datasets: [{
                label: "Sensor",
                fill: false,
                backgroundColor: [
                    "rgba(0, 71, 171, .9)", // cor das barras (single bar chart)
                    "rgba(0, 150, 255, .9)",
                    "rgba(0, 150, 255, .5)",
                    "rgba(137, 207, 240, .9)",
                    "rgba(137, 207, 240, .4)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

//--Aqui também tem um Grafico na tela. É o Grafico em Colunas da tela index.html

//-- TELA -> chart.html
//-- Grafico em Pizza
    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 71, 171, .9)",  // cor das fatias (pie chart)
                    "rgba(0, 150, 255, .9)",
                    "rgba(0, 150, 255, .5)",
                    "rgba(137, 207, 240, .9)",
                    "rgba(137, 207, 240, .4)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

//-- TELA -> chart.html
//-- Circular
    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 71, 171, .9)", // cor das fatias (doughnut chart)
                    "rgba(0, 150, 255, .9)",
                    "rgba(0, 150, 255, .5)",
                    "rgba(137, 207, 240, .9)",
                    "rgba(137, 207, 240, .4)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


})(jQuery);
