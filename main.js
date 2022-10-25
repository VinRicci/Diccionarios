let dic = {b : 'Audi', a : 'Toyota', c : 'Mazda'};
let a = Object.keys(dic);
let b = Object.values(dic);
let cont = a.length

for (let x = 0; x < cont; x++){
    for (let y = 0; y < cont; y++){
        if( a[y] > a[ y + 1]){
            let auxiliarkey = a[y]
            let auxililiarvalue = b[y]
            a[y] = a[y + 1]
            b[y] = b[y + 1]
            a[y + 1] = auxiliarkey
            b[y + 1] = auxililiarvalue
        }
    }
}

console.log(a, b)