$(document).ready(function() {
    function setHeight() {
        windowHeight = $(window).innerHeight();
        headerHeight = $('.main-header').innerHeight();
        footerHeight = $('.main-footer').innerHeight();
        screnHeight = windowHeight - headerHeight - footerHeight;
        $('.fullscreen').css('min-height', screnHeight);
    };
    setHeight();
    $(window).resize(function() {
        setHeight();
    });
    //match height
    $('.fitHeight').matchHeight();
    //step by step
    function brafitCheck() {
        var shape = '';
            band = '';
            breast = '';
            chip = '';
        console.log(shape);
        console.log(band);
        console.log(chip);
        $(document).on('click', '.chipFitFinder', function(e) {
            e.preventDefault();
            $('.fit-finder-step').hide();
            $('.chip-step-1').show();
        });
        $(document).on('click', '.braFitfinder, .sizePrev', function(e) {
            e.preventDefault();
            $('.fit-finder-step').hide();
            $('.bra-step-2').show();
        });
        $(document).on('click', '.finderResult', function(e) {
            e.preventDefault();
            if (shape == '') {
                $('.warningModal').modal('show');
            } else {
                $('.bra-step-result').hide();
                $('.'+shape).show();
                $('.fit-finder-step').hide();
                $('.bra-step-3').show();
            }
        });
        $(document).on('click', '.braShapePrev', function(e) {
            e.preventDefault();
            $('.fit-finder-step').hide();
            $('.bra-step-1').show();
        });
        $(document).on('click', '.braNextStep', function(e) {
            e.preventDefault();
            numberStep = $(this).closest('.fit-finder-step').data('step');
            numberNextStep = (numberStep + 1);
            $('.fit-finder-step').hide();
            $('.bra-step-'+numberNextStep).show();
        });
        $(document).on('click', '.braPrevStep', function(e) {
            e.preventDefault();
            numberStep = $(this).closest('.fit-finder-step').data('step');
            numberPrevStep = (numberStep - 1);
            $('.fit-finder-step').hide();
            if (numberStep !== 1) {
                $('.bra-step-'+numberPrevStep).show();
            } else {
                $('.cover-fit-step').show();
            }
        });
        //Choose shape of bra
        $(document).on('click', '.braShape', function(e) {
            e.preventDefault();
            var shapeCard='';
            shape = $(this).data('product');
            $('.braShape').removeClass('highlight');
            $(this).addClass('highlight');
            $('.bra-step-result .check-card').empty();
            shapeCard = $(this).children().clone().appendTo('.bra-step-result .check-card');
        });
        // size of band
        $(document).on('click', '.braBandSize', function(e) {
            e.preventDefault();
            band = $(this).data('bandsize');
            breast = '';
            $('.braBandSize').removeClass('highlight');
            $(this).addClass('highlight');
            $('.breast-size-list').addClass('disable-lock');
            $('.'+band).removeClass('disable-lock');
        });
        // size of breast
        $(document).on('click', '.braBreastSize', function(e) {
            e.preventDefault();
            breast = $(this).data('bandsize');
            $('.braBreastSize').removeClass('highlight');
            $(this).addClass('highlight');
            $('.bra-result-sumary').fadeIn();
            $('.sizeBra').text(breast+band);
        });
        //size of chip
        $(document).on('click', '.chipSizeControl', function(e) {
            e.preventDefault();
            chip = $(this).data('chipsize');
            $('.chipSizeControl').find('.size-item').removeClass('highlight');
            $(this).find('.size-item').addClass('highlight');
            $('.chip-result-sumary').fadeIn();
            $('.sizeChip').text(chip);
        });
        console.log(shape);
        console.log(band);
        console.log(chip);
    }
    brafitCheck();
});

