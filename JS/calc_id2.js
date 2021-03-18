"use strict"

$(function(){
    
    let massa = [
        ['кг', 'гр='+1000+'; т='+ 1000],
        ['гр', 'кг='+1000000+'; т='+ 1000000000],
        ['т', 'кг='+1000+'; гр='+ 7],
    ]
   
    $(".input_unit").on('input', function(){
        for (let key of massa){
            for (let i = 0; i < massa.length; i++) {
                if($(".input_unit").val() === key[i]){
                    console.log(i)
                }    
            }   
         }
    })       
});


