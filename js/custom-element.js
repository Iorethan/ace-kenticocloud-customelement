(function () {
    var isDisabled = false;
    var editor;

    var updateDisabled = function (disabled) {
        isDisabled = disabled;

        if (editor) {
            if (disabled) {
                editor.setReadOnly(true);
            } else {
                editor.setReadOnly(false);
            }
        }
    };

    var setupAce = function (initValue) {
        editor = ace.edit('editor');
        editor.setTheme('ace/theme/textmate');
        editor.session.setMode('ace/mode/javascript');

        if (initValue) editor.setValue(initValue);

        editor.addEventListener('change', function () {
            if (!isDisabled) {
                // Send updated color to Kentico Cloud
                CustomElement.setValue(editor.getValue());
            }
        });

        // React on window resize to adjust the height
        window.addEventListener('resize', updateSize);
    };

    var updateSize = function () {
        // Update the Custom element height in the Kentico Cloud UI
        var height = document.querySelector('html').offsetHeight;
        
        CustomElement.setHeight(height);
    };

    var initCustomElement = function () {
        try {
            CustomElement.init((element, _context) => {
                // Setup with initial value and disabled state
                setupAce(element.value);
                updateDisabled(element.disabled);
                updateSize();
                editor.clearSelection();
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
    };

    initCustomElement();
})();