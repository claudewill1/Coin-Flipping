
const TossCoin = () => {
    return Math.random() > 0.5 ? "heads":"tails";
}
const FiveHeads = () => {
    return new Promise ((resolve, reject)=>{
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5){
            attempts++;
            let result = TossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads"){
                headsCount++;
                if(headsCount === 5)
                {
                    resolve(`It took ${attempts} tries to flip five "heads"`);
                }
            }
            else {
                headsCount = 0;
            }
            if(attempts === 100){
                reject("You have reached the maximum number of flips");
            }
        }
    });
}

FiveHeads()
    .then(res=> console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?")
