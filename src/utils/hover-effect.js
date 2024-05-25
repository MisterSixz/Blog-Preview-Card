const hoverFX = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const headers = document.querySelectorAll('.card__header');
    
        headers.forEach(header => {
            header.addEventListener('mouseover', function() {
                this.parentElement.classList.add('hover-effect');
            });
    
            header.addEventListener('mouseout', function() {
                this.parentElement.classList.remove('hover-effect');
            });
        });
    });
}

export default hoverFX;