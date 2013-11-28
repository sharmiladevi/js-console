//Console
var Console = function () {
    this.evaluatorObject = new Evaluator();
    this.historyObject = new HistoryHandler();
    this.autoCompletionObject = new AutoCompletionHandler();
};
Console.prototype.handleKeyUp = function (event) {
    switch (event.keyCode) {
        case 13:
            if(!event.shiftKey){
                this.historyObject.handle(event.keyCode);
                this.evaluatorObject.handle();
            }
            break;
        case 38:
        case 40:
            this.historyObject.handle(event.keyCode);
            break;
        default:
            this.autoCompletionObject.handle();
    }
}

//Evaluator
var Evaluator = function () {
};
Evaluator.prototype.handle = function () {
    var text = $("#inputText").val();
    var outputValue;
    try {
        outputValue = window.eval(text);
    }
    catch (err) {
        outputValue = err.message;
    }
    if (typeof (outputValue) == "undefined")
        outputValue = "undefined";
    var outputBlock = $("#outputBlock");
    var outputList1 = $('<p></p>');
    outputList1.text(text);
    outputBlock.append(outputList1);
    var outputList2 = $('<p></p>');
    outputList2.text(outputValue);
    outputBlock.append(outputList2);
    $("#inputText").val("");
}

//Handler
var HistoryHandler = function () {
    this.histroyArray = [];
    this.index = this.histroyArray.length - 1;
};
HistoryHandler.prototype.handle = function (keyCode) {
    if (keyCode == 13)
        this.handleEnter();
    else if (keyCode == 38)
        this.handleUp();
    else if (keyCode == 40)
        this.handleDown();
}
HistoryHandler.prototype.handleEnter = function () {
    this.histroyArray.push($("#inputText").val().trim());
    this.index = this.histroyArray.length;
}
HistoryHandler.prototype.handleUp = function () {
    if (this.index >= 0) {
        this.index--;
        $("#inputText").val(this.histroyArray[this.index]);
    }
    else
        $("#inputText").val("");
}
HistoryHandler.prototype.handleDown = function () {
    if (this.index <= this.histroyArray.length - 1) {
        this.index += 1;
        $("#inputText").val(this.histroyArray[this.index]);
    }
    else
        $("#inputText").val("");
}

// Autocompleter
var AutoCompletionHandler = function () {
};
AutoCompletionHandler.prototype.handle = function () {
}
