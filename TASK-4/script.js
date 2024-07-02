// script.js
// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', event => {
	  event.preventDefault();
	  const targetId = link.getAttribute('href').substring(1);
	  document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
	});
  });
  
  // Add animation to home section
  const homeSection = document.getElementById('home');
  homeSection.addEventListener('scroll', () => {
	const skillsList = homeSection.querySelector('ul');
	const skillsItems = skillsList.querySelectorAll('li');
	skillsItems.forEach((item, index) => {
	  item.style.transform = `translateY(${index * 20}px)`;
	});
  });
  
  // Add hover effect to project images
  const projectImages = document.querySelectorAll('#projects img');
  projectImages.forEach(image => {
	image.addEventListener('mouseover', () => {
	  image.style.transform = 'scale(1.1)';
	});
	image.addEventListener('mouseout', () => {
	  image.style.transform = 'scale(1)';
	});
  });
  
  // Add scroll-to-top button
  const scrollTopButton = document.createElement('button');
  scrollTopButton.textContent = 'Back to top';
  scrollTopButton.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(scrollTopButton);
  
  // Add event listener to window scroll
  window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
	  scrollTopButton.style.display = 'block';
	} else {
	  scrollTopButton.style.display = 'none';
	}
  });