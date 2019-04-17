// ABAIXO DESSE CÓDIGO ESTÁ A IDEIA INICIAL PARA O CARROUSSEL COM BOTÕES EMBAIXO. ELES SÓ FUNCIONAM SE CLICADOS EM SEQUÊNCIA E NÃO EM ORDEM ALEATÓRIA. ESTOU TENTANDO RESOLVER ISSO [17/04/19, 11H50]

$(document).ready(function () {
    $('.img01, .p01').css('display', 'flex')
        .hide()
        .delay('600')
        .fadeIn('slow')
    $('.img01, .p01').click(function () {
        $('.img01, .p01').css('display', 'none')
        $('.img02, .p02').css('display', 'flex')
            .hide()
            .delay('600')
            .fadeIn('slow')
    });
    $('.img02, .p02').click(function () {
        $('.img02, .p02').css('display', 'none')
        $('.img03, .p03').css('display', 'flex')
            .hide()
            .delay('600')
            .fadeIn('slow')
    });
    $('.img03, .p03').click(function () {
        $('.img03, .p03').css('display', 'none')
        $('.img04, .p04').css('display', 'flex')
            .hide()
            .delay('600')
            .fadeIn('slow')
    });
    $('.img04, .p04').click(function () {
        $('.img04, .p04').css('display', 'none')
        $('.img05, .p05').css('display', 'flex')
            .hide()
            .delay('600')
            .fadeIn('slow')
    });
    $('.img05, .p05').click(function () {
        $('.img05, .p05').css('display', 'none')
        $('.img06, .p06').css('display', 'flex')
            .hide()
            .delay('600')
            .fadeIn('slow')
    });
    $('.img06, .p06').click(function () {
        $('.img06, .p06').css('display', 'none')
        $('.img01, .p01').css('display', 'flex')
            .hide()
            .delay('600')
            .fadeIn('slow')
    });
});

// $(document).ready(function () {
//     $('.img01').css('display', 'flex')
//         .hide()
//         .delay('600')
//         .fadeIn('slow')
//     $('.button01, .img01').click(function () {
//         $('.img01').css('display', 'none')
//         $('.img02').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.button02, .img02').click(function () {
//         $('.img02').css('display', 'none')
//         $('.img03').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.button03, .img03').click(function () {
//         $('.img03').css('display', 'none')
//         $('.img04').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.button04, .img04').click(function () {
//         $('.img04').css('display', 'none')
//         $('.img05').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.button05, .img05').click(function () {
//         $('.img05').css('display', 'none')
//         $('.img06').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.button06, .img06').click(function () {
//         $('.img06').css('display', 'none')
//         $('.img01').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
// });