//
// Use Print Scripting to implement policies to change your users print behaviour.  
// You don't have to be a programmer as there are many pre-written recipes available for you to use.
// But if you're confident, you can write your own scripts in JavasScript using snippets
// and the reference documentation.
// To implement copy, scan and faxing policies at the MFD, try out our Device Scripting.
//
function printJobHook(inputs, actions) {
  // your script here
  if(!inputs.client.isRunning) {
    actions.job.chargeToPersonalAccount();
  }
}