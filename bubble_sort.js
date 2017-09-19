function bubbleSort(array) {
    let swapped = true;
    let count = 0;
    while(swapped === true) {
        swapped = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                count++;
                swapped = true;
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps`);
    console.log(`First Element: ${array[0]}`);
    console.log(`Last Element: ${array[array.length - 1]}`);
}
