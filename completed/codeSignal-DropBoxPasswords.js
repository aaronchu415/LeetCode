// _NAME: Dropbox - Passwords
// _LINK: https://app.codesignal.com/company-challenges/dropbox/ffibMFaS7mzKZkAE3
// _CATEGORY: Company Challenge

// One Very Important User(VIU) has a Very Confidential Document(VCD) stored on his Dropbox account.He doesn't let anyone see the VCD, especially his roommates who often have access to his devices.

// Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored information, the device is locked out of Dropbox after 10 consecutive failed passcode attempts. We need to implement a function that given an array of attempts made throughout the day and the correct passcode checks to see if the device should be locked, i.e. 10 or more consecutive failed passcode attempts were made.



function incorrectPasscodeAttempts(passcode, attempts) {

  let correct_pass = false
  let wrongNum = 0

  let arr = []

  for (let attempt of attempts) {

    if (passcode === attempt) {

      if (wrongNum < 10) {
        arr.push(true)
      } else {
        arr.push(false)
      }

      wrongNum = 0;

    } else {
      wrongNum++
    }
  }

  return !(arr.every(b => b) && wrongNum < 10)



}
