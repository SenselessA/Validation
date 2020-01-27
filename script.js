const inputs = document.querySelectorAll('input')

const patterns = {
    telephone: /^\d{11}$/,
    login: /^\w{5,12}$/,
    password: /^[\w@-]{8,20}$/,
    profileLink: /^[a-z\d-]{8,20}$/,
    email: /^(?<name>[a-z\d\.-]{1,25})@(?<domen>[a-z\d-]{2,15})\.(?<gDomen>[a-z]{2,8})(?<gDomen2>\.[a-z]{2,8})?$/

}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.remove('invalid')
        field.classList.add('valid')
    } else {
        field.classList.remove('valid')
        field.classList.add('invalid')
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})