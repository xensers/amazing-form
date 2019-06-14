function initForm(form) {
    let submit = form.querySelector('button[type="submit"]');
    validateForm(form);

    if (submit) {
        submit.onclick = function () {
            let error = validateForm(form);

            if (!error) {
                document.documentElement.classList.add('form_submit');
                setTimeout(() => {
                    form.submit();
                }, 5000);
            }

            return false;
        }
    }

    form.querySelectorAll('input').forEach((input) => {
        inputMask(input);
        input.addEventListener('blur', function(e) {
            let icon;
            if (this.parentNode.classList.contains('form__input')) {
                icon = this.parentNode.querySelector('.icon');
                if(validateInput(this)) {
                    icon.classList.remove('icon_success');
                    icon.classList.add('icon_error');
                } else {
                    icon.classList.remove('icon_error');
                    icon.classList.add('icon_success');
                }
            }
            validateForm(form);
        });

        input.addEventListener('input', function(e) {
            let icon;
            if (this.parentNode.classList.contains('form__input')) {
                icon = this.parentNode.querySelector('.icon');
                icon.classList.remove('icon_error');
                if(validateInput(this)) {
                    icon.classList.remove('icon_success');
                } else {
                    icon.classList.add('icon_success');
                    validateForm(form);
                }
            }
        });

    });
}
