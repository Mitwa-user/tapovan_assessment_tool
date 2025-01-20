// script.js

document.getElementById('startAssessment').addEventListener('click', function() {
  // Check if the user is logged in (replace with your actual authentication check)
  if (localStorage.getItem('isAuthenticated')) { 
    window.location.href = 'assessment.html'; 
  } else {
    window.location.href = 'login.html'; 
  }
});

document.querySelector('#evaluatorLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Example: Simple validation (replace with your actual logic)
  if (username === 'evaluator' && password === 'password') {
    alert("Login successful!");
    // Set authentication flag in local storage
    localStorage.setItem('isAuthenticated', true); 
    // Prevent page reload after login
    event.preventDefault(); 
    // Redirect to index page after successful login
    window.location.href = 'index.html'; 
  } else {
    alert("Invalid username or password.");
  }
});

document.querySelector('#parentLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get username and password values
  const username = document.getElementById('parentUsername').value;
  const password = document.getElementById('parentPassword').value;

  // Example: Simple validation (replace with your actual logic)
  if (username === 'parent' && password === 'password') {
    alert("Login successful!");
    // Set authentication flag in local storage
    localStorage.setItem('isAuthenticated', true); 
    // Prevent page reload after login
    event.preventDefault(); 
    // Redirect to index page after successful login
    window.location.href = 'index.html'; 
  } else {
    alert("Invalid username or password.");
  }
});

document.querySelector('#registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get registration form data
  const name = document.getElementById('name').value;
  const regUsername = document.getElementById('regUsername').value;
  const dob = document.getElementById('dob').value;
  const mobile = document.getElementById('mobile').value;
  const regPassword = document.getElementById('regPassword').value;

  // Example: Simple validation (replace with your actual logic)
  if (name && regUsername && dob && mobile && regPassword) {
    alert("Registration successful!");
    // Redirect to login page
    window.location.href = 'login.html';
  } else {
    alert("Please fill in all fields.");
  }
});

document.querySelector('#assessmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect scores from select elements
  const scores = [];
  const selects = document.querySelectorAll('#assessmentForm select');
  selects.forEach(select => {
    scores.push(parseInt(select.value));
  });

  // Calculate total score
  const totalScore = scores.reduce((sum, score) => sum + score, 0);
  const totalPossiblePoints = scores.length * 2; // Assuming each question has a maximum score of 2
  const percentage = (totalScore / totalPossiblePoints) * 100;

  // Determine classification
  let classification = '';
  if (percentage >= 80) {
    classification = 'Normal';
  } else if (percentage >= 60) {
    classification = 'Mild';
  } else if (percentage >= 40) {
    classification = 'Moderate';
  } else if (percentage >= 20) {
    classification = 'Severe';
  } else {
    classification = 'Profound';
  }

  // Store scores and classification in local storage (optional)
  localStorage.setItem('scores', JSON.stringify(scores));
  localStorage.setItem('percentage', percentage);
  localStorage.setItem('classification', classification);

  // Redirect to results page
  window.location.href = 'results.html';
});

// Display results on results page
if (window.location.href.includes('results.html')) {
  const scores = JSON.parse(localStorage.getItem('scores'));
  const percentage = localStorage.getItem('percentage');
  const classification = localStorage.getItem('classification');

  document.getElementById('overallPerformance').textContent = percentage + '%';
  document.getElementById('classification').textContent = classification;

  import('./graph.js').then(({ createPerformanceGraph }) => {
    createPerformanceGraph([50, 60, 70, 90]); // Replace with actual data
  });
}
