// Print functionality for the CV
const handlePrint = () => {
    window.print();
};

// Add event listener to the print button
document.addEventListener('DOMContentLoaded', function() {
    const btnPrint = document.getElementById('print');
    
    if (btnPrint) {
        btnPrint.addEventListener('click', handlePrint);
        console.log('Print button found and event listener added');
    } else {
        console.log('Print button not found');
    }
});

// Alternative method for older browsers
if (typeof window !== 'undefined') {
    window.handlePrint = handlePrint;
} 