let multiples = () => {
    let result;
    for (let i = 1; i <= 99; i++) {
        if (i % 3 === 0 && i % 7 === 0 ) {
            result = 'OpenSource';
          } else if (i % 3 === 0) {
            result = 'Open';  
          } else if (i % 7 === 0) {
            result = 'Source';
          } else {
            result = i;
          }           
          console.log(result);
    }
};

multiples();