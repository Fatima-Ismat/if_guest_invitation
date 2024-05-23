#! usr/ bin/env node
import inquirer from "inquirer";
let myLoop = true;
let guestInviteList = ["aliza", "noor", "furqan", "nosheen", "ismat", "fatima"];
while (myLoop) {
    let userInput = await inquirer.prompt({
        type: 'input',
        name: 'userName',
        message: 'Please enter your name'
    });
    let guestName = userInput.userName;
    //let {userName} = userInput;
    //console.log(guestName);
    let lowerGuestName = guestName.toLowerCase();
    if (guestInviteList.includes(lowerGuestName)) {
        console.log(`Welcome ${guestName}! please, make yourself comfortable `);
        myLoop = false;
    }
    else {
        console.log(`\nSorry, ${guestName}.Your name is not on the guest list for today.\n`);
        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'otheName',
            message: 'Do you have another name you go by? if so, we can check again!',
            default: false
        });
        if (!askNameAgain.otheName) {
            myLoop = false;
            console.log(`\nwe apologize, you are not on the guest list, Please contact the event organizer.\n`);
        }
    }
}
