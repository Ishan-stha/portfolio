// Liquid blob effect
const liquidBlob = document.getElementById('liquidBlob');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    liquidBlob.style.left = mouseX + 'px';
    liquidBlob.style.top = mouseY + 'px';
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(item.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Parallax effect for glass containers
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const containers = document.querySelectorAll('.glass-container');
    
//     containers.forEach((container, index) => {
//         const speed = (index + 1) * 0.05;
//         container.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

// Add interactive hover effects
document.querySelectorAll('.glass-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
        container.style.background = 'rgba(255, 255, 255, 0.15)';
    });
    
    container.addEventListener('mouseleave', () => {
        container.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Parallax effect in navbar
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const containers = document.querySelectorAll('.nav');
    
//     containers.forEach((container, index) => {
//         const speed = (index + 1) * 0.05;
//         container.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.classList.add('scrolled');      // Add 'scrolled' class
    } else {
        navbar.classList.remove('scrolled');   // Remove 'scrolled' class
    }
});

// Certificate download functionality
function downloadCertificate(filename) {
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = `certificates/${filename}`;
    link.download = filename;
    link.click();
    
    // Alternative: If you want to show a message instead
    // alert(`Downloading ${filename}`);
    console.log(`Downloading certificate: ${filename}`);
}

function toggleDescription(button) {
    const description = button.closest('.education-item').querySelector('.description');
    const icon = button.querySelector('i');
    
    if (description.classList.contains('collapsed')) {
        description.classList.remove('collapsed');
        description.classList.add('expanded');
        button.classList.add('expanded');
        button.querySelector('span').textContent = 'Hide';
    } else {
        description.classList.remove('expanded');
        description.classList.add('collapsed');
        button.classList.remove('expanded');
        button.querySelector('span').textContent = 'Details';
    }
}
