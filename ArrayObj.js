const arrays = {
    _arr1: ["Hi", "Hello!", "Heya"],
    _arr2: ["how are you?", "you good?", "how is your day going?"],
    _arr3: ["I am fine, thank you", "No problem at all", "Yes Sir!"],
};

const pickMessage = () => {
        
    const arr1 = arrays._arr1;
    const arr2 = arrays._arr2;
    const arr3 = arrays._arr3;

    const random1 = Math.floor(Math.random() * arr1.length);
    const random2 = Math.floor(Math.random() * arr2.length);
    const random3 = Math.floor(Math.random() * arr3.length);

    return `${arr1[random1]} ${arr2[random2]} ${arr3[random3]}`;
};



