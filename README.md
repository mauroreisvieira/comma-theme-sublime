<p align="center">
    <img width="960px" src="./assets/screen.png">
</p>

<p align="center">
    <a href="https://github.com/meetio-theme/sublime-meetio-theme/releases" title="GitHub tag">
        <img src="https://img.shields.io/github/release/meetio-theme/sublime-meetio-theme.svg?style=for-the-badge"/>
    </a>
    <a href="" title="Sublime Version">
        <img src="https://img.shields.io/badge/built_for_sublimetext-3179-e79330?style=for-the-badge&logo=sublime-text"/>
    </a>
    <a href="https://packagecontrol.io/packages/Meetio%20Theme" title="Package Control">
        <img src="https://img.shields.io/packagecontrol/dt/Meetio%20Theme?style=for-the-badge"/>
    </a>
</p>

-   [Installation](#installation)
-   [Activate theme](#activate-theme)
-   [Theme Settings](#theme-settings)
-   [Override Theme Variables](#override-theme-variables)
-   [Recommended Settings for a better experience](#recommended-settings)
-   [Other resources](#other-resources)

## Installation

**Easy:**

1. Open `Command Palette` using menu item `Tools → Command Palette` or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> +<kbd>P</kbd>.
2. Choose `Package Control: Install Package`.
3. Type `Meetio Theme` and press <kbd>ENTER</kbd>.

**Manually:**

1. Download latest release and unzip. it into your Packages folder.
2. Go to `Sublime Text → Preferences → Browse Packages`.
3. Move folder to inside and rename the folder to `Meetio Theme`.

## Activate Theme

**You can active this theme from:**

1. Command Palette `Tools → Command Palette` or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>.
2. Typing `UI: Select Theme` next find for `Meetio Theme` and press <kbd>ENTER</kbd>.
3. Same process for scheme go to the Command Palette.
4. Typing `UI: Select Color Scheme` choose you favorite scheme and press <kbd>ENTER</kbd>.

Manually you can go to (**Preferences > Settings - User**) and paste the following code:

```json
{
    "color_scheme": "Packages/Meetio Theme/schemes/Meetio-Theme-Light.sublime-color-scheme",
    "theme": "Meetio-Theme.sublime-theme"
}
```

## Theme Settings

This theme provide a visual configuration tool that allow you to configure the theme by activating the available options from an inline popup.

-   Just click in `Sublime Text → Preferences → Packages Settings → Meetio Theme → Edit Settings`.
-   You can also open the settings from the Command Palette by searching `Meetio Theme: Edit Settings`.

```js
{
  // Tabs
  "meetio_tabs_diff_icon": true, // show icon diff in tab
  "meetio_tabs_diff_pencil_icon": false, // show diff pencil icon in tab

  // Sidebar
  "meetio_icon_folder": false, // replace colorful folder to a flat icon folder
  "meetio_sidebar_disclosure": false, // set disclosure tree controls

  // Panels
  "meetio_input_search_icon": true, // show icon search in inputs

  // Status bar
  "meetio_status_badges": true, // show vcs status badges in the status bar
}
```

## Override Theme Variables

**Meetio Theme** provides a bunch of variables to improve your experience with theming.

-   `Sublime Text → Preferences → Packages Settings → Meetio Theme → Theme Configuration`.
-   Command Palette <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> searching `Meetio Theme: Theme Configuration`.

```json
{
    "variables": {
        "colorAccent": "#6772e4",
        "statusbarBackground": "var(colorAccent)",
        "statusbarLabelColor": "#fff"
    }
}
```

## File Icons

`Meetio Theme` from version `3.0.0` supports customization via [A File Icon](https://github.com/SublimeText/AFileIcon) package.Please install it and restart Sublime for better experience.

## Recommended Settings

To enjoy a better experience of using the **Meetio Theme** in your Sublime Text, please check the following settings.

```js
{
    "font_face": "Fira Code",
    "highlight_line": true,
    "font_options": ["gray_antialias", "subpixel_antialias"], // On retina Mac & Windows
    "indent_guide_options": ["draw_normal", "draw_active"], // Highlight active indent
    "margin": 20,
    "line_padding_bottom": 7,
    "line_padding_top": 7
}
```

## Other resources

-   [Meetio Color](https://github.com/meetio-theme/meetio-colors)
-   [Meetio Icons](https://github.com/meetio-theme/meetio-icons)
-   [Scheme Generator](https://github.com/meetio-theme/scheme-generator)
