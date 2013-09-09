



RESOURCES_LOCATION: it has to be the full url where comimoc backend api is accessible.

WEBSITE: can be any string you want. It is here as the first element of the comments keys (website, page). It has to have significative meaning more than technical. It can be useful to separate comments from a same domain name but with multiple subsite without subdomain.
> e.g.: http://domain.com/blog1 will load the app with WEBSITE='blog1' and http://domain.com/blog2 will load the app with WEBSITE='blog2'

HASH: Default is false. Set it on true if you want the location path after the hashbang into the page key. Hash should be consider only if your website is an app (like angular app) with pages location define by hash. Be careful about hash used for anchors, for tabs, etc. If set to true it could separate the comments of one page into multiple pages, and this is not what you want.
> e.g.: domain.com/page#title1 (2 comments) domain.com/page#title3 (1 comment) instead of domain.com/page (3 comments)

ARGS: Default is false. Like HASHBANG, set it on true if you **really** need this and be aware of side effects.