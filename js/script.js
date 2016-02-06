$(function posterChild(){

    $('#main').addClass('fadingin1sec');

    $('li').on('click', function() { if ($(this).attr('class') == 'selected')
        { $(this).attr('class', 'notselected'); }
        else {
            $('li').each(function() { $('li').attr('class','notselected');});
            $(this).attr('class', 'selected');
        }    
    });
    
    $('button').on('click', submissionChecker);
    
     function submissionChecker() {
        if ($('input').val().length > 0) {
             if ($(".selected").length > 0) {
                alert('Placeholder for generating poster.');
            }
            else { alert('Please select a poster.'); } 
        }  
        else { 
            alert('Enter your Office 365 email address.');
         }
     }

});



