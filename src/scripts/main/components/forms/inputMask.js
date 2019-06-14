function inputMask(input) {
    if (input.dataset.mask) {
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask);
        input.addEventListener("focus", function (e) {
            if (this.value.length === 0) {
                this.value = this.dataset.mask;
            }
        }, true);

        input.addEventListener("blur", function (e) {
            if (this.dataset.mask === this.value) {
                this.value = '';
            }
        }, true);
    }

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    function mask(event) {
        let matrix = this.dataset.mask,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix !== this.dataset.mask ? i++ : i = matrix.indexOf("_");
        requestAnimationFrame(() => setCursorPosition(i, this));
    }
}
