<script>
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropbtn');
    dropdown.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
    });
});
</script>
