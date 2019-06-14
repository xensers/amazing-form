// init blurBox
readyjs.push(blurBox);

// initForm
readyjs.push(() =>
    document.querySelectorAll('form.form').forEach((form) => initForm(form))
);
