const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength-text');
const strengthBar = document.getElementById('strength-bar');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);
  
  updateStrengthUI(strength);
});

function getPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W]/.test(password)) strength++;

  return strength;
}

function updateStrengthUI(strength) {
  let strengthLabel = '';
  let color = '';

  switch (strength) {
    case 0:
    case 1:
      strengthLabel = 'Weak';
      color = 'red';
      break;
    case 2:
      strengthLabel = 'Medium';
      color = 'orange';
      break;
    case 3:
    case 4:
      strengthLabel = 'Strong';
      color = 'green';
      break;
  }

  strengthText.textContent = `Strength: ${strengthLabel}`;
  strengthBar.style.backgroundColor = color;
}
