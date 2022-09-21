function checarTriangulo( a: number, b: number, c: number) {
    if(a !== b && b !== c){
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

console.log(checarTriangulo(25,20,30));
