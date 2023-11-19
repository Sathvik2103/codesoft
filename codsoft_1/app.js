const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.services-list');
hiddenElements.forEach((el) => observer.observe(el));

const workItems = document.querySelectorAll('.work');
let currentIndex = 0;

function showNextItem() {
    if (currentIndex < workItems.length) {
        workItems[currentIndex].style.display = 'block';
        currentIndex++;
    } else {
        clearInterval(interval);
    }
}

const works = document.querySelectorAll('.work');

function fadeInImages() {
    works.forEach((work, index) => {
        setTimeout(() => {
            work.style.display = 'flex';
        }, index * 0); 
    });
}

fadeInImages();

document.getElementById('about').classList.add('active');
