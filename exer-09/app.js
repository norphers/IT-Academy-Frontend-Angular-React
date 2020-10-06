window.addEventListener('click', e => { 
    if (!document.getElementById('rating-group').contains(e.target)) {
        for (i=1; i<=5; i++) {
            $('#star'+[i]).prop('checked', false);
        }
    }
});