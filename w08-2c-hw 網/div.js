function changeVideo(index){
    const player = document.querySelector('#player');
    console.log('player',player);
    switch(index){
        case 1:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;
        case 2:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;
        case 3:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;
        case 4:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;
        case 5:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;
    }
}

function changeColor(index){
    const p = document.querySelector('#section');
    console.log('color',p);
    switch(index){
        case 1:
            p.style.backgroundColor = 'yellow';
            break;
        case 2:
            p.style.backgroundColor = 'green';
            break;
        case 3:
            p.style.backgroundColor = 'purple';
            break;
    }
}

function changeimg(index){
    const img = document.querySelector('#player');
    console.log('img',img);
    switch(index){
        case 1:
            img.innerHTML ='<img style="width:100%;height:510px;padding:10px"  src="./img1.jpg"></img>';
            break;
        case 2:
            img.innerHTML ='<img style="width:100%;height:510px;padding:10px"  src="./img2.jpg"></img>';
            break;
        case 3:
            img.innerHTML ='<img style="width:100%;height:510px;padding:10px"  src="./img3.jpg"></img>';
            break;
        case 4:
            img.innerHTML ='<img style="width:100%;height:510px;padding:10px"  src="./img4.jpg"></img>';
            break;
        case 5:
            img.innerHTML ='<img style="width:100%;height:510px;padding:10px"  src="./img5.jpg"></img>';
            break;
    }
}






