(function () {
    var isDisabled = false;
    var editor;
    var language;
    var languageSelector = document.querySelector('#language');

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

    var setupAce = function (initValue, config) {
        editor = ace.edit('editor');
        editor.setTheme('ace/theme/' + ((config && config.initTheme) ? config.initTheme : 'monokai'));
        if (initValue && initValue.code) editor.setValue(initValue.code);

        if (initValue && initValue.language) {
            language = initValue.language;
        } else if (config && config.initMode) {
            language = config.initMode;
        } else {
            language = 'javascript';
        }

        languageSelector.value = language;
        editor.session.setMode('ace/mode/' + language);

        languageSelector.addEventListener('change', function () {
            language = languageSelector.value;
            editor.session.setMode('ace/mode/' + languageSelector.value);
        });

        editor.addEventListener('change', function () {
            if (!isDisabled) {
                // Send updated color to Kentico Cloud
                CustomElement.setValue('{"language": "' + language + '", "code": "'+ editor.getValue() + '"}');
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
                setupAce(element.value, element.config);
                updateDisabled(element.disabled);
                updateSize();
                if (editor) editor.clearSelection(); 
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