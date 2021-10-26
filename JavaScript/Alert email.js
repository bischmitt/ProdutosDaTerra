function enviarDados1() {
if (document.form.email.value == "" || document.form.email.value.length < 8) {
    alert("Preencha campo email corretamente!");
    document.form.email.focus();
    return false;
}
}