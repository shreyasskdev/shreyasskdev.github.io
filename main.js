class typeWriter {
	constructor() {
		
        this.typeElement = document.querySelector(".discription .type");
        this.words = ["programming", "3d drawing", "drawing", "crafting"];
        this.wordIndex = 0;
        this.txt = "";
        this.isDeleting = false;
        // this.typeSpeed = 500;
        this.wait = 2000;


	}
    type() {

        let currentWord = this.wordIndex % this.words.length;
        let fulltxt = this.words[currentWord];

        if (this.isDeleting) {
            // remove
            this.txt = fulltxt.substring(0, this.txt.length -1);
        } else {
            // add
            this.txt = fulltxt.substring(0, this.txt.length +1);
        }

        this.typeElement.textContent = "my hobies are " + this.txt
        // console.log(this.txt);

        this.typeSpeed = 300

        if (this.isDeleting) {
            this.typeSpeed /= 3;
        }    

        // if word is complete
        if (!this.isDeleting && this.txt === fulltxt) {
            this.isDeleting = true;
            this.typeSpeed = this.wait;
        }else if (this.isDeleting && this.txt === "") {
            this.typeSpeed = 1000;
            this.isDeleting = false;
            this.wordIndex++;
        }


        setTimeout(() => this.type(), this.typeSpeed);
    }
}


const typewriter = new typeWriter();
typewriter.type();

