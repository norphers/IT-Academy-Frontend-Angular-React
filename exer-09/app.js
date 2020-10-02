function starRange(star) {

    var stars = []; 
    stars.push(
        document.getElementById('star1'),
        document.getElementById('star2'),
        document.getElementById('star3'),
        document.getElementById('star4'),
        document.getElementById('star5')
        );

    for(i=4; i>=parseInt(star);i--) {
        stars[i].style.color = '#f1c40f';
    } 
      
}
