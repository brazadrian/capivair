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
        // Worldwide Sales Chart -> Emissao Total
        var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
        var myChart1 = new Chart(ctx1, {
            type: "bar",
            data: {
                labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                datasets: [
                    {
                        label: "CO₂",
                        data: [
                            data.emissao_total.CO.coluna1,
                            data.emissao_total.CO.coluna2,
                            data.emissao_total.CO.coluna3,
                            data.emissao_total.CO.coluna4,
                            data.emissao_total.CO.coluna5,
                            data.emissao_total.CO.coluna6,
                            data.emissao_total.CO.coluna7
                        ],
                        backgroundColor: "#89CFF0" // primeira barra do grafico (multiple bar chart)
                    },
                    {
                        label: "O₃",
                        data: [
                            data.emissao_total.O.coluna1,
                            data.emissao_total.O.coluna2,
                            data.emissao_total.O.coluna3,
                            data.emissao_total.O.coluna4,
                            data.emissao_total.O.coluna5,
                            data.emissao_total.O.coluna6,
                            data.emissao_total.O.coluna7
                        ],
                        backgroundColor: "#0096FF" //segunda barra do grafico (multiple bar chart)
                    },
                    {
                        label: "NO₂",
                        data: [
                            data.emissao_total.NO.coluna1,
                            data.emissao_total.NO.coluna2,
                            data.emissao_total.NO.coluna3,
                            data.emissao_total.NO.coluna4,
                            data.emissao_total.NO.coluna5,
                            data.emissao_total.NO.coluna6,
                            data.emissao_total.NO.coluna7
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
        // Salse & Revenue Chart -> Emissao Semanal
        var ctx2 = $("#salse-revenue").get(0).getContext("2d");
        var myChart2 = new Chart(ctx2, {
            type: "line",
            data: {
                labels: ["04/04", "05/04", "06/04", "07/04", "08/04", "09/04", "10/04"],
                datasets: [{
                        label: "Setor A",
                        data: [
                            data.emissao_semanal.Setor_A.linha1,
                            data.emissao_semanal.Setor_A.linha2,
                            data.emissao_semanal.Setor_A.linha3,
                            data.emissao_semanal.Setor_A.linha4,
                            data.emissao_semanal.Setor_A.linha5,
                            data.emissao_semanal.Setor_A.linha6,
                            data.emissao_semanal.Setor_A.linha7
                        ],
                        backgroundColor: "rgba(137, 207, 240, .5)", // linha setor a (Multiple line chart)
                        fill: true
                    },
                    {
                        label: "Setor B",
                        data: [
                            data.emissao_semanal.Setor_B.linha1,
                            data.emissao_semanal.Setor_B.linha2,
                            data.emissao_semanal.Setor_B.linha3,
                            data.emissao_semanal.Setor_B.linha4,
                            data.emissao_semanal.Setor_B.linha5,
                            data.emissao_semanal.Setor_B.linha6,
                            data.emissao_semanal.Setor_B.linha7
                        ],
                        backgroundColor: "rgba(0, 150, 255, .5)", // linha setor b (Multiple line chart)
                        fill: true
                    },
                    {
                        label: "Setor C",
                        data: [
                            data.emissao_semanal.Setor_C.linha1,
                            data.emissao_semanal.Setor_C.linha2,
                            data.emissao_semanal.Setor_C.linha3,
                            data.emissao_semanal.Setor_C.linha4,
                            data.emissao_semanal.Setor_C.linha5,
                            data.emissao_semanal.Setor_C.linha6,
                            data.emissao_semanal.Setor_C.linha7
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
    // Single Line Chart -> Emissao Diaria
    fetchData().then(data => {
        var ctx3 = $("#line-chart").get(0).getContext("2d");
        var myChart3 = new Chart(ctx3, {
            type: "line",
            data: {
                labels: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
                datasets: [{
                    label: "Hora",
                    data: [
                            data.emissao_diaria.noveHoras,
                            data.emissao_diaria.dezHoras,
                            data.emissao_diaria.onzeHoras,
                            data.emissao_diaria.dozeHoras,
                            data.emissao_diaria.trezeHoras,
                            data.emissao_diaria.quatorzeHoras,
                            data.emissao_diaria.quinzeHoras,
                            data.emissao_diaria.dezesseisHoras,
                            data.emissao_diaria.dezesseteHoras,
                            data.emissao_diaria.dezoitoHoras,
                            data.emissao_diaria.dezenoveHoras,
                        ],
                    fill: false,
                    backgroundColor: "rgba(137, 207, 240)" // cor dos pontos (single line chart)
                }]
            },
            options: {
                responsive: true
            }
        });
    });

//-- Há um Grafico nesse momento na tela, que é o Grafico em Linha da index.html

//-- TELA -> chart.html
//-- Grafico em colunas separadas
    // Single Bar Chart
    fetchData().then(data => {
        var ctx4 = $("#bar-chart").get(0).getContext("2d");
        var myChart4 = new Chart(ctx4, {
            type: "bar",
            data: {
                labels: ["A0101", "B0201", "C0301", "D0401", "E0501"],
                datasets: [
                    {
                        label: "Sensor A",
                        fill: false,
                        backgroundColor: [
                            "rgba(0, 71, 171, .9)", // cor das barras (single bar chart)
                            "rgba(0, 150, 255, .9)",
                            "rgba(0, 150, 255, .5)",
                            "rgba(137, 207, 255, .9)",
                            "rgba(137, 207, 255, .7)"
                        ],
                        data: [
                            data.emissao_sensores.A0101,
                            data.emissao_sensores.B0201, 
                            data.emissao_sensores.C0301, 
                            data.emissao_sensores.D0401, 
                            data.emissao_sensores.E0501
                        ]
                    }
                ],
            },
            options: {
                responsive: true
            }
        });
    });

//--Aqui também tem um Grafico na tela. É o Grafico em Colunas da tela index.html

//-- TELA -> chart.html
//-- Grafico em Pizza
    // Pie Chart - Poluentes
    fetchData().then(data => {
        var ctx5 = $("#pie-chart").get(0).getContext("2d");
        var myChart5 = new Chart(ctx5, {
            type: "pie",
            data: {
                labels: ["Monóxido de Carbono", "Dióxido de Carbono","Dióxido de Nitrogênio", "Ozônio"],
                datasets: [{
                    backgroundColor: [
                        "rgba(0, 71, 171, .9)",  // cor das fatias (pie chart)
                        "rgba(0, 150, 255, .9)",
                        "rgba(0, 150, 255, .5)",
                        "rgba(137, 207, 240, .9)",
                        "rgba(137, 207, 240, .4)"
                    ],
                    data: [
                        data.poluentes.monoxidoCarbono,
                        data.poluentes.dioxidoCarbono,
                        data.poluentes.dioxidoNitrogenio,
                        data.poluentes.ozonio
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
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

var warning = true;
window.onbeforeunload = function() { 
  if (warning) {
    return "Você fez mudanças nesta página que ainda não confirmou. Se você navegar para longe desta página, perderá suas alterações não salvas.";
  }
}

$('form').submit(function() {
   window.onbeforeunload = null;
});


//NAV BAR
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("hidden");
  } else {
    document.querySelector(".navbar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}


//PONTO LOC
// Seleciona as áreas do mapa que contêm os pontos de interesse
var areas = document.querySelectorAll('map[name="workmap"] area');

// Seleciona a imagem do mapa
var mapa = document.querySelector('.map-container img');

// Função que atualiza a posição dos pontos na tela
function atualizaPosicaoPontos() {
  // Percorre cada área do mapa
  areas.forEach(function(area) {
    // Obtém as coordenadas da área
    var coords = area.getAttribute('coords').split(',');

    // Converte as coordenadas para valores numéricos
    var x = parseInt(coords[0]);
    var y = parseInt(coords[1]);

    // Obtém a largura e a altura da imagem do mapa
    var mapaWidth = mapa.offsetWidth;
    var mapaHeight = mapa.offsetHeight;

    // Calcula a posição dos pontos em relação à imagem
    var posicaoX = Math.round((x / 100) * mapaWidth);
    var posicaoY = Math.round((y / 100) * mapaHeight);

    // Seleciona o ponto correspondente à área atual
    var ponto = document.querySelector(area.getAttribute('alt'));

    // Define a posição do ponto na tela
    ponto.style.left = posicaoX + 'px';
    ponto.style.top = posicaoY + 'px';
  });
}

// Chama a função de atualização de posição dos pontos quando a página é carregada
window.addEventListener('load', atualizaPosicaoPontos);

// Chama a função de atualização de posição dos pontos quando a janela é redimensionada
window.addEventListener('resize', atualizaPosicaoPontos);

