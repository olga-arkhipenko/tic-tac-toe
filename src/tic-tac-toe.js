class TicTacToe {

    constructor(){
        this.currentSymbol = "x";
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];

    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex){
        if(!this.noMoreTurns() && !this.matrix[rowIndex][columnIndex]){
            this.matrix [rowIndex][columnIndex] = this.currentSymbol;
            if(this.currentSymbol === "x") this.currentSymbol = "o";
            else this.currentSymbol = "x";
        }
    }

    isFinished() {
        if(this.getWinner() || this.noMoreTurns()) return true;
        else return false;
    }

    getWinner() {

        for(let i = 0; i < 3; i++){
            if(this.matrix[i][0] === this.matrix[i][1] &&
                this.matrix [i][1] === this.matrix[i][2]){
                return this.matrix[i][0];
            }
        }

        for(let i = 0; i < 3; i++){
            if(this.matrix[0][i] === this.matrix[1][i] &&
                this.matrix [1][i] === this.matrix[2][i]){
                return this.matrix[0][i];
            }
        }

        if(this.matrix[0][0] === this.matrix[1][1] &&
            this.matrix[1][1] === this.matrix[2][2]){
            return this.matrix[0][0];
        }

        if(this.matrix[0][2] === this.matrix[1][1] &&
            this.matrix[1][1] === this.matrix[2][0]){
            return this.matrix[0][2];
        }

        return null;
    }

    noMoreTurns() {
        return this.matrix.every(cur => {
            return cur.every(cur => cur !== null);
        });
    }

    isDraw() {
        return (!this.getWinner() && this.noMoreTurns());
    }

    getFieldValue(rowIndex, colIndex){
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
