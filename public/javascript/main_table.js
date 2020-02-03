function row_add(){
    var div = document.createElement('div');

    var element = document.getElementById('row');

    div.innerHTML = document.getElementById('row').innerHTML;

    document.getElementById('table').appendChild(div);

    div = div.classList.add('row');
    
}