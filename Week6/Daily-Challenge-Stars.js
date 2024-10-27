for (let i = 1; i <= 6; i ++) {
    console.log('*'.repeat(i))
};

for (let i = 1; i <= 6; i ++) {
    let str = "";
    for (let j=1; j<=i; j++) {
       str += '*';
    }
    console.log(str);
};
