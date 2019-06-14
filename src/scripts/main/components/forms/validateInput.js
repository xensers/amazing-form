function validateInput(input) {
    let error = false;
    if (!input.value.match(input.pattern)) {
        error = 'pattern';
    }

    if (input.maxLength > 0 && input.maxLength < input.value.length) {
        error = 'maxLength';
    }

    if (input.minLength > 0 && input.minLength > input.value.length) {
        error = 'minLength';
    }

    if (input.required && input.value.length <= 0) {
        error = 'required';
    }

    return error;
}