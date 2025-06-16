const basicFee = 0.015 //basic transaction fee os 1.5% of the transaction amount

function estimateTransactionFee(amountToSend) {
    const calculatedFee = amountToSend * basicFee;
    let fee;

    if (calculatedFee < 10) {
        fee = 10; //Minimum fee 
    } else if (calculatedFee > 70) {
        fee = 70; //Maximum fee
    } else {
        fee = calculatedFee; 
    }

    const total = amountToSend + fee; //Calculates total amount that will be debited

    //Output the result
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");   
}

//Prompt user to enter an amount
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(input);

if (amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali andika kiasi halali.");
}

