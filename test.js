tryLogin();

async function tryLogin() {
  console.log('try login!');
  let account = document.getElementById('form-group--1');
  let pass = document.getElementById('form-group--3');
  let submit = document.querySelector('.helpers--auth-submit-button--2K2dh');
  if (account && pass && submit) {
    account.value = ''; // Clear existing value
    pass.value = ''; // Clear existing value

    // Set new values
    account.value = 'achn.dev@gmail.com';
    pass.value = 'PeaceChan@2022';

    await wait(500);
    submit.click();
    await wait(10000);
  }
  await wait(500);
}

function wait(mili) {
  return new Promise(resolve => setTimeout(resolve, mili));
}
