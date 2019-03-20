(function () {
    var isDisabled = false;

    var updateDisabled = function (disabled) {
        isDisabled = disabled;
        var textarea = document.querySelector('textarea');

        if (disabled) {
            textarea.disabled = false;
        } else {
            textarea.disabled = true;
        }
    }

    var setupAce = function (initValue) {
        var textarea = document.querySelector('textarea');
        textarea.value = initValue;

        textarea.addEventListener('input', function () {

            if (!isDisabled) {
                // Send updated color to Kentico Cloud
                CustomElement.setValue(textarea.value);
            }
        });
    }

    var updateSize = function () {
        // Update the Custom element height in the Kentico Cloud UI
        var height = document.querySelector('html').offsetHeight;
        CustomElement.setHeight(height);
    }

    var initCustomElement = function () {
        try {
            CustomElement.init((element, _context) => {
                // Setup with initial value and disabled state
                setupAce(element.value);
                updateDisabled(element.disabled);
                updateSize();
            });
            // React when the disabled state changes (e.g. when publishing the item)
            CustomElement.onDisabledChanged(updateDisabled);
        } catch (err) {
            // Initialization with the Custom elements API failed 
            // (page displayed outside of the Kentico Cloud UI)
            console.error(err);
            setupAce();
            updateDisabled(true);
        }
    }

    initCustomElement();
})();