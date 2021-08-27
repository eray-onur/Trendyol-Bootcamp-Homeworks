# Homepage Analysis

## Performance

- document.write should be avoided as it might delay page load by seconds.

- Static assets are not served with an efficient cache policy. Supporting this policy can speed up repeat visits to the page.


- DOM size is incredibly huge, a 'windowing' library (react-window) could minimize the number of DOM nodes created if there are repeatable elements in the document.

## Accessibility (Lowest Point)

- Certain fonts are way too low contrasted which makes it more difficult to read for users with sight problems.

- Link labels can be more expressive and unique, which will improve the semantics of controls in the application.

- Search input at the top of page has a problematic tabindex value. It might make navigating through the page a bit more problematic for users who rely on assistive technologies.

- Lists contain other types of elements than <li>.

## Best Practices

- Certain stylesheets(CSS) are unsafe in terms of cross-origin destinations. Adding `rel="noopener" or rel="noreferrer" ` might help with avoiding security issues and microperformance issues.

- This page uses jQuery 3.4.0, which is a library with known security vulnerabilities.

- Placeholder images have wrong aspect ratios.

- An 'unload' listener is utilized in the page. It is an unreliable event for disposing streams of data and it can prevent certain browser optimizations (i.e: Back-Forward Cache). 'pagehide' or 'visibilityChange' might prove more useful in such a case.

- Certain network unresolved problems are logged into the console. It might be best to test network related issues in integration tests rather than logging them on client side.



## SEO

- Story image elements exists without an alt tag - minor issue.