const keyTrainer = {
    // properties
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: 0,
    task : [],
    userInput: [],
    userErrors: 0,
    errorsArray: [],
    //methods
    setCharCount: function() {
        let a = parseInt(prompt('Введите правильное число символов', ""));
        this.charCount = this.checkPositiveInteger(a);
    },
    checkPositiveInteger: function(a) {
        if (a>0) {
           return a
        } else {
            while( a <= 0) {
                return this.setCharCount();
            }
        }
    },
    createTask: function() {
        this.task = [];
        for(i=0 ; i<this.charCount; i++){
           let random = Math.floor(Math.random()*this.chars.length);
           this.task.push(this.chars[random]);
        }
    },

    startTask: function () {
        this.userErrors = 0;
        this.errorsArray = [];
        var taskString = prompt(this.task.join(""), "");
        this.userInput = taskString.split("");
        for(let i = 0; i < this.task.length; i++){
            if(this.task[i] !== this.userInput[i]){
                this.errorsArray.push(`${this.task[i]} !== ${this.userInput[i]}`);
            }
        }
        this.userErrors = this.errorsArray.length;
    },

    showResult: function() {
        console.log(this.userErrors);
        if(this.userErrors === 0){
            alert("Yeeeeee, ma BOY");
        } else {
            alert(`Quality of mistakes is ${this.userErrors}; Mistakes: ${this.errorsArray}`);
        }

    }

};


function run() {
    keyTrainer.setCharCount();
    // console.log(keyTrainer.charCount);
    keyTrainer.createTask();
    // console.log(keyTrainer.task);
    keyTrainer.startTask();
    // console.log(keyTrainer.userErrors);
    keyTrainer.showResult();
}

run();















