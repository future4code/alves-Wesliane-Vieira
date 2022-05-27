~~~
function calculaNota(ex, p1, p2) {
    
    const mediaP = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)
   
    if (mediaP > 9.0)
        return "A"
    if(mediaP >= 7.5 && mediaP < 9.0)
        return "B"
    if(mediaP >= 6.0 && mediaP < 7.5)
        return "C"
    if(mediaP < 6.0)
    return "D"
}
~~~