function handleClick(callback){
    alert('This button has been clicked');
    if (callback){
        callback();
    }
}

function doSomethingElse(){
    document.writeln('Test Message');
}