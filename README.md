# Ace Code Editor Custom Element for Kentico Kontent

The Ace Code Editor custom element is an editable text area enhanced by the [Ace Code Editor](https://ace.c9.io/) to provide syntax highlighting for writing code examples. Offers a fine selection of programming languages to be highlighted.

![Syntax Highlighter](example.png)

## Setup

If you want to use the Syntax Highlighter in your project in Kentico Kontent, follow these steps:

1. Deploy the code to a secure publis host
    * See [deploying section](#Deploying) for a really quick option
1. Follow the instructions in the [Kentico Kontent documentation](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features#a-3--displaying-a-custom-element-in-kentico-kontent) to add the element to a content model.
    * The `Hosted code URL` is where you deployed to in step 1
    * You can pass optional configuration based on the documented [JSON Parameters section of the readme](#json-parameters).

## JSON Parameters

You can optionally provide the following JSON parameters for the custom element to configure the initial state of the Syntax Highlighter:

```json
{
    "initTheme": "<THEME CODENAME>",
    "initMode": "<PROGRAMMING LANGUAGE CODENAME>"
}
```

* **THEME CODENAME** is a filename substring prefixed by **theme-** of a file located in the **ace** folder (i.e. textmate)
* **PROGRAMMING LANGUAGE CODENAME** is a filename substring prefixed by **mode-** of a file located in the **ace** folder (i.e. plain_text)

## What is saved?

The value contains data about language and code. As Kentico Cloud custom elements can contain only `string` values or `null`, the value is stored as a stringified object. That means the value has to be explicitly parsed.

### Example

The value contains the following string when obtained from Kentico Cloud:
```
"{\"language\":\"javascript\",\"code\":\"var text = 'Hello world';\"}"
```
You need to parse that value to get a proper object (i.e. in JavaScript with the use of the `JSON.parse` method).

## Deploying

Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your GitHub account as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MilanLund/ace-kenticocloud-customelement)

## Licenses

Syntax Highlighter is released under the MIT license.
The Ace source code that Syntax Highlighter uses is released under the BSD license.
