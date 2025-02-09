<script>
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let name = document.getElementById("name").value.trim();
        let gender = document.querySelector('input[name="gender"]:checked');
        let country = document.querySelector('select[name="Country"]').value;
        let ipl = document.querySelector('input[name="ipl"]:checked');
        let favouriteTeam = document.getElementById("Team").value;
        let favouritePlayer = document.querySelector('textarea[name="Name"]').value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return false;
        }

        if (!gender) {
            alert("Please select your gender.");
            return false;
        }

        if (country === "") {
            alert("Please select your country.");
            return false;
        }

        if (!ipl) {
            alert("Please select whether you watch IPL.");
            return false;
        }

        if (ipl.value === "Yes" && favouriteTeam === "") {
            alert("Please select your favorite team.");
            return false;
        }

        if (favouritePlayer === "") {
            alert("Please enter something about your favorite player.");
            return false;
        }

        alert("Form submitted successfully!");
        document.querySelector("form").submit(); // Submit the form after validation
    });
});
</script>
