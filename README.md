GOV.UK Frontend ·
[![Build Status](https://travis-ci.org/alphagov/govuk-frontend.svg?branch=master)](https://travis-ci.org/alphagov/govuk-frontend)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
=====================

## What is it?

A single package containing everything needed to start building a GOV.UK service.

:rotating_light: **This project is in development and these instructions are likely to change.** :rotating_light:

Guidance for building a GOV.UK service - [GOV.UK Design System](TODO: Insert link to GOV.UK Design System).

## Quick start

:rotating_light: **This will not work until packages are published to npm.** :rotating_light:

```
npm install --save @govuk-frontend/all
```

Include the CSS and JavaScript

```
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <link rel="stylesheet"
          href="node_modules/@govuk-frontend/all/all.min.css">
  </head>
  <body>
    <!-- Copy and paste component HTML-->
    <button class="govuk-c-button">This is a button component</button>
    <script src="node_modules/@govuk-frontend/all/all.min.js"></script>
  </body>
</html>
```

## Installation

## Install all components

```
npm install --save @govuk-frontend/all
```

## Install individual components

Install a button component

```
npm install --save @govuk-frontend/button
```

All components can be found in the packages directory.
Each component has a README with installation and usage instructions.

## Usage

## HTML

Copy and paste component HTML [from here](TODO: Insert link to GOV.UK Design System).

## SCSS

In your main.scss file

```
// All components
@import "@govuk-frontend/all/all";

// Pick and choose components
@import "@govuk-frontend/button/button";
@import "@govuk-frontend/input/input"
```

## Docs

Check out the [GOV.UK Frontend documentation](/docs/index.md).

## Licence

[MIT license](LICENSE.txt).

## Contributing

[View our contribution guidelines](CONTRIBUTING.md).
