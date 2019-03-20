# Syntax Highlighter
Syntax Highlighter is an editable text area enhanced by the [Ace Code Editor] (https://ace.c9.io/) to provide a programmer-friendly environment for writing code examples. Offers a fine selection of programming languages to be highlighted.

![Syntax Highlighter](example.png)

# Usage

If you want to use the Syntax Highlighter in your project in Kentico Cloud, follow these steps:

* XX
* In Kentico Cloud open Content types tab
* Open / create a content model to which you want to add the Shopify product selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/Shopify/product-selector.html
* Provide the following JSON parameters for the custom element to connect it to your store, replace the macros with the actual values from Shopify admin UI

```
{
    "storeFrontAccessToken": "<YOUR ACCESS TOKEN>",
    "apiEndpoint": "https://<YOUR STORE NAME>.myshopify.com/api/graphql"
}
```

# Installation

Shopify product selector source code is in following repository: https://github.com/kenticomartinh/kc-shopify

If you want to adjust the implementation, first download [Kentico Cloud Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). Source code of this selector needs be positioned within `/client/custom-elements` folder. For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-elements-samples/Shopify?pixel)