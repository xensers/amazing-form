function validateForm (form) {
    let submit;
    let error = false;

    for (let i = 0; i <= form.length - 1; i++) {
        let input = form[i];

        if (!error) error = validateInput(input);

        if (input.type === 'submit') {
            submit = input;
            submit.disabled = true;
        }
    }

    if (!error) {
        submit.disabled = false;
    }

    return error;
}