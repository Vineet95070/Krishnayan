const fs = require('fs');

const galleryItems = [
    { src: 'assets/gallary/vit_1.jpeg', alt: 'VIT Vellore' },
    { src: 'assets/gallary/vit_2.jpeg', alt: 'VIT Vellore Session' },
    { src: 'assets/gallary/vit_3.jpeg', alt: 'VIT Vellore Group' },
    { src: 'assets/training/Tamil%20Nadu_1.jpeg', alt: 'SMIT College Chennai' },
    { src: 'assets/training/Tamil%20Nadu_2.jpeg', alt: 'SMIT College Chennai Session 2' },
    { src: 'assets/training/Tamil%20Nadu_3.jpeg', alt: 'SMIT College Chennai Group' },
    { src: 'assets/gallary/DSC_0169.JPG', alt: 'Corporate Training' },
    { src: 'assets/gallary/IMG_2028.jpg', alt: 'Leadership Workshop' },
    { src: 'assets/training/PSIT_Kanpur.jpg', alt: 'PSIT Kanpur' },
    { src: 'assets/training/PSIT_Kanpur_2.jpg', alt: 'PSIT Kanpur Workshop' },
    { src: 'assets/gallary/gniot.jpg', alt: 'GNIOT Greater Noida' },
    { src: 'assets/gallary/ggi_2.jpg', alt: 'GGI Ludhiana' },
    { src: 'assets/gallary/kit_2.jpg', alt: 'KIT Kanpur' },
    { src: 'assets/gallary/lpu_1.jpeg', alt: 'LPU Training' },
    { src: 'assets/gallary/lpu_2.jpeg', alt: 'LPU Workshop' },
    { src: 'assets/gallary/mits_jammu.jpg', alt: 'MITS Jammu' },
    { src: 'assets/gallary/vrindavan.jpeg', alt: 'Vrindavan Training' },
    { src: 'assets/gallary/girls_polytechnic_amithe.jpeg', alt: 'Girls Polytechnic Amethi' },
    { src: 'assets/gallary/girls_polytechnic_amithe_2.jpg', alt: 'Girls Polytechnic Workshop' },
    { src: 'assets/gallary/IMG-20241114-WA0007.jpg', alt: 'Training Highlights' },
    { src: 'assets/gallary/IMG-20251106-WA0026.jpg', alt: 'Team Photo' },
    { src: 'assets/gallary/IMG_20240913_000012.jpg', alt: 'Evening Session' },
    { src: 'assets/gallary/IMG_20241112_113257.jpg', alt: 'Student Interaction' },
    { src: 'assets/gallary/IMG_20250417_123826289.jpg', alt: 'Campus Activity' },
    { src: 'assets/gallary/IMG_20250417_123827313.jpg', alt: 'Group Project' },
    { src: 'assets/gallary/Screenshot%202024-09-20%20021024.png', alt: 'Digital Class' },
    { src: 'assets/gallary/1733039625162.jfif', alt: 'Event Memory' }
];

let html = '';
galleryItems.forEach((item, index) => {
    const hiddenClass = index >= 5 ? ' gallery-hidden' : '';
    html += `                <div class="gallery-item${hiddenClass}" onclick="openLB(${index})"><img src="${item.src}" alt="${item.alt}" loading="lazy"></div>\n`;
});

let fileContent = fs.readFileSync('gallery.html', 'utf8');
const startTag = '<div class="gallery-grid fade-up" id="galleryGrid">';
const endTag = '<!-- ====== CALL TO ACTION ====== -->';

const startIndex = fileContent.indexOf(startTag) + startTag.length;
const divEndIndex = fileContent.indexOf('</div>\n            <div class="see-more-wrap">', startIndex);

if (startIndex > startTag.length - 1 && divEndIndex !== -1) {
    fileContent = fileContent.substring(0, startIndex) + '\n' + html + fileContent.substring(divEndIndex);
    fs.writeFileSync('gallery.html', fileContent);
    console.log('Successfully updated gallery.html images.');
} else {
    console.log('Could not find the gallery grid bounds in the file.');
}
