let buttonInnerHtml;
for(var i = 0; i< document.querySelectorAll('.btn').length; i++){
    document.querySelectorAll('.btn')[i].addEventListener('click',function(){
        buttonInnerHtml = this.innerHTML//this: U kontekstu funkcije unutar addEventListener-a, this se odnosi na element
        // koji je kliknut (jedno od dugmadi sa klasom .btn).//this.innerHTML: Ovo uzima sadržaj tog dugmeta (tekstualni sadržaj unutar HTML elementa koji je kliknut) i dodeljuje ga promenljivoj buttoninnerhtml.Na primer, ako dugme ima tekst "A", this.innerHTML će biti "A".
        makeSound(buttonInnerHtml)
    })
    document.addEventListener('keydown', function(event){
        makeSound(event.key)
    })
    
    
function makeSound(key){
    switch (key){
        case 'a':
            let crash = new Audio('sounds_crash.mp3')
            crash.play()
            break;
        case 's':
            let kick = new Audio('sounds_kick-bass.mp3')
            kick.play()
            break;   
        case 'd':
            let snare = new Audio('sounds_snare.mp3')
            snare.play()
            break;   
        case 'f':
            let tom1 = new Audio('sounds_tom-1.mp3')
            tom1.play()
            break;    
        case 'g':
            let tom2 = new Audio('sounds_tom-2.mp3')
            tom2.play()
            break;
        case 'h':
            let tom3 = new Audio('sounds_tom-3.mp3')
            tom3.play()
            break;
        case 'j':
            let tom4 = new Audio('sounds_tom-4.mp3')
            tom4.play()
             break;
        default:
            (buttonInnerHtml);
    }
}
   
 
}

