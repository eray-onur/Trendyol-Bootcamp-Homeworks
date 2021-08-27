# Supermarkets Page Analysis
> URL: https://www.trendyol.com/butik/liste/16/supermarket

## Performance (Best Among All Pages)

- Category images aren't appropriately sized to cellular data (minor issue as this is a desktop-specific page).

- Removing unused javascript or deferring them could be a decent micro-optimization.

- Deferring non-critical CSS data could be a decent micro-optimization.

- DOM size is incredibly huge, a 'windowing' library (react-window) could minimize the number of DOM nodes created if there are repeatable elements in the document.


## Accesibility

- Certain focusable descendants hidden by `[aria-hidden="true"]` prevent them from being accessable by screen reader reliant users.

- Same issues as homepage.

## Best Practices (Lowest Point)

- Same issues as homepage.



## SEO

- Some images lack an "alt" attribute.