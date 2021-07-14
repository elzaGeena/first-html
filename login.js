$("#username").keypress(function (event) {
    alert("inside function");
    if(event.keyCode == 13) { 
        textboxes = $("input.username");
        debugger;
        currentBoxNumber = textboxes.index(this);
        if (textboxes[currentBoxNumber + 1] != null) {
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
            event.preventDefault();
            return false; 
        }
    }
});