function calculateBodaFare (distanceInKm) {
    const baseFare = 50; //Base Fare in Kes
    const chargeperKm = 15; // charges per Km in Kes
    const totalFare = baseFare + (distanceInKm * chargeperKm); //calculates total fare estimate

    //Displays fare breakdown
    console.log(`Uko kwote? Io ni ${distanceInKm} km`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda PikiPiki!");

    const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?":); //Propmts user to enter distance in Kilometers
    const distanceInKm = parseFloat(input); //Converts input to a number

}