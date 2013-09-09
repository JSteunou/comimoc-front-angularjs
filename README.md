# Comimoc Front AngularJS

Comimoc Front AngularJS is a front-end in angularjs part of the Comimoc project.

It is a simple AngularJS app that provide a front-end to [Comimoc Back](https://github.com/JSteunou/comimoc-back), easy to add and customise for any website.


# Features

* list all comments of webpage
* provide a form to add comments
* i18n

# How to...

## use it?

Just look at the example file named `index.html` inside the src folder.

All you need is to declare the comimoc app...

```html
<div ng-app="comimoc" ng-controller="CommentCtrl" ng-include="'./views/comimoc.html'"></div>
```

... add the angular dependencies (1.2.0-rc2, waiting for the ultimate stable release)...

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-resource.min.js"></script>
```

... create the AngularJS Comimoc module...

```html
<script>
    angular.module('comimoc', ['ngResource'])
        .constant('COMIMOC_CONFIG', {
            'RESOURCES_LOCATION':   'http://myapp.herokuapp.com',
            'WEBSITE':              'www.comimoc.dev',
            'HASH':                 false,
            'ARGS':                 false,
            'LOCALE':               'en'
            });
</script>
```

... and add the comimoc app:

```html
<script src="http://www.mydomain.net/assets/js/comimoc.min.js"></script>
```

You can see it uses a template named `views/comimoc.html`, use it, hack it, write your own, it is very easy. Also there is no CSS by default, so it is up to you to style it the way you like.

## see it in action?

You can go to my blog http://wwW.jeromesteunou.net where I am using it like so with just some CSS, nothing more.

## set it?

You can pass some options when creating the comimoc module:

* **RESOURCES\_LOCATION**: it has to be the full url where comimoc back-end api is accessible. No trailing slash please.
* **WEBSITE**: can be any string you want. It is here as the first element of the comments keys (website, page). It has to have significative meaning more than technical. It can be useful to separate comments from a same domain name but with multiple subsite without subdomain. e.g.: http://domain.com/blog1 will load the app with `WEBSITE='blog1'` and http://domain.com/blog2 will load the app with `WEBSITE='blog2'` but both can have the same `RESOURCES_LOCATION`.
* **HASH**: Default is false even when not set. Set it on true if you want the location path after the hashbang set into the page key. Hash should be consider only if your website is an app (like angular app) with pages location define by hash for routage. Be careful about hash used for anchors, for tabs, etc. If set to true it could separate the comments of one page into multiple pages, and this is not what you want. e.g.: domain.com/page#title1 (2 comments) domain.com/page#title3 (1 comment) instead of domain.com/page (3 comments).
* **ARGS**: Default is false even when not set. Like `HASHBANG`, set it on true if you **really** need this and be aware of side effects.
* **LOCALE**: Default is 'en' when not set. It is used in the view for the view title, the form title and the button. Only `en` and `fr` exist but you can help me to add more locale.


# Why Comimoc?

Comimoc stands for **COM**ments **I**n **M**y **O**wn **C**loud. As I create my [blog](http://jeromesteunou.net) with [Pelican](http://docs.getpelican.com/) to keep the control on my content and also having a very simple system with tools I know very well (Python and Github) I wanted the same for my comments. But I did not find it. A lot of people goes for Disqus but I think it is giving to much data and control. So I create Comimoc which is very simple, light and can be run on your own server or at Heroku or at Red Had Cloud OpenShift, etc. And for nothing! For a simple blog, running Comimoc on PaaS services cost nothing and you can backup your comments everyday.

So that's it, I wrote it and I am sharing it so everyone can use it and keep control on their own data.


# Source code

You can access the source code at: https://github.com/JSteunou/comimoc-front-angularjs

Feel free to dive in, hack in, contribute or ask features (You can ask, I might not add it).
