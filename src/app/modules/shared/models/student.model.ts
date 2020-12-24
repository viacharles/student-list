export class Student {
    constructor(
        public name: string,
        public score: number,
    ) {
        if (this.score > 90){
            this.scoreClass = 'A+';
        }
        if (this.score <= 90 && this.score > 80){
            this.scoreClass = 'A';
        }
        if (this.score <= 80 && this.score > 70){
            this.scoreClass = 'B';
        }
        if (this.score <= 70 && this.score > 60){
            this.scoreClass = 'C';
        }
        if (this.score <= 60 ){
            this.scoreClass = 'D';
        }
    }
    public scoreClass:string='-';

}