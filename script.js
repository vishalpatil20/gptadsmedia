function openTool() {
    document.getElementById('toolModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTool(event) {
    document.getElementById('toolModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeTool();
    }
});
