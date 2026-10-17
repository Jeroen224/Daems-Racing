# Daems Racing

Website for Daems Racing Team, Geel. Plain HTML, CSS and JavaScript, no build step: open `index.html` or host the folder as-is (e.g. GitHub Pages).

## Files

- `index.html`: all page content, in English
- `js/script.js`: Dutch/English translations (`dict`), mobile menu, Instagram feed
- `css/styles.css`: styles; brand colours are at the top
- `assets/img/`: full-size photos; `assets/img/small/` holds 800px copies used for the driver grid and Instagram tiles

## Editing text

Every translated element has a `data-i18n="key"` attribute. Change the English text in `index.html` **and** both languages for that key in `dict` in `js/script.js`.

## Drivers

Each driver is one `<li>` in the `.drivers` list in `index.html`: photo, class, name. To add a driver photo, put an 800px-wide copy in `assets/img/small/`.

## Instagram feed

The News section shows six placeholder photos that link to instagram.com/daemsracing. To show real posts, set `INSTAGRAM_FEED_URL` in `js/script.js` to an endpoint that returns the Instagram Graph API media list (`{ "data": [{ "media_type", "media_url", "thumbnail_url", "permalink", "caption" }] }`). The access token must stay on a server (for example a small serverless function); never put it in the JavaScript file.
