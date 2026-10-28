//your code here
<script>
    const form = document.getElementById("internshipForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        form.classList.add("was-validated");
    });
</script>