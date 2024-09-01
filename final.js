document.addEventListener('DOMContentLoaded', function() {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    // Select all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.addBtn');

    // Add click event listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of the button
            
            // Increment the cart count
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Create a Bootstrap alert
            const alertContainer = document.getElementById('alert-container');
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success alert-dismissible fade show';
            alertDiv.role = 'alert';
            alertDiv.innerHTML = `
                Item added to cart!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;

            // Append the alert to the container
            alertContainer.appendChild(alertDiv);

            // Automatically dismiss the alert after 3 seconds
            setTimeout(() => {
                alertDiv.classList.remove('show');
            }, 3000);
        });
    });
});
