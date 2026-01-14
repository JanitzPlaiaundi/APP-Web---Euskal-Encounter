document.addEventListener("DOMContentLoaded", () => {
            if (window.location.hash === "#register") {
                const registerTab = new bootstrap.Tab(
                    document.querySelector('#register-tab')
                );
                registerTab.show();
            }
        });