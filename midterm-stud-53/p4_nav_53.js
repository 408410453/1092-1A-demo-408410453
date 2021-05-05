function changemenu(index){
    const p = document.querySelector('#player');
    console.log('menu',p);
    switch(index){
        case 1:
            p.innerHTML = `
            <iframe
            width="560"
            height="200"
            src="./p1_53/tictactoe_53.html"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
        break;
        case 2:
            p.innerHTML = `
            <iframe
            width="560"
            height="200"
            src="./p2_53/resume_53.html"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
        break;
        case 3:
            p.innerHTML = `
            <iframe
            width="560"
            height="200"
            src="./p3_53/divjsDemo_53.html"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
        break;

    }
}