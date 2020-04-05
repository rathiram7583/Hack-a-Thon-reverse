

var input = document.getElementById('nvalue');
var element= document.getElementById('submit');
var dlElement=document.querySelector('dl');

element.addEventListener( 'click' , event =>  
                {

        
                    var n=input.value;
                    var reverse=0;
                    while(n !=0)
                    {
                        var number=parseInt(n%10);
                        reverse=parseInt(reverse*10+number);
                        n = parseInt(n/10);
                        
                    }
                            
                            dlElement.innerHTML +=`<dt>The reverse of the number is :</dt>
                                    <dd>${reverse}</dd>`;
         
               });

        