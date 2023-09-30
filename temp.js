tryLogin();

async function tryLogin() {
  console.log('try login!');
  let account = document.getElementById('inputEmail');
  let pass = document.getElementById('inputPassword');
  let submit = document.querySelector('.btn-signin');
  if (account && pass && submit) {
    account.value = ''; // Clear existing value
    pass.value = ''; // Clear existing value

    // Set new values
    account.value = 'Aye Chan Htun Naing';
    pass.value = 'l5ygn';

    await wait(500);
    submit.click();
    await wait(10000);
  }
  await wait(500);
}

function wait(mili) {
  return new Promise(resolve => setTimeout(resolve, mili));
}
