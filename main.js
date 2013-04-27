$(document).ready(function(){

	$('#input1').on('keyup', function() {
		$(this).css('border', '1px solid red');
		$('#output1').val($(this).val().seoURL({'transliterate': false, 'lowercase': true}));
	})

	$('#input2').on('keyup', function() {
		$(this).css('border', '1px solid green');
		
		$('#output2').val($(this).val().seoURL());
	})

	$('#output1').val($('#input1').val().seoURL({'transliterate': false, 'lowercase': true}));
	$('#output2').val($('#input2').val().seoURL());

});