# Backbone JS 2.0 - Modernized incremental rewrite of Backbone.js MVC

Modularization of the Backbone code using Babel and the Gulp build infrastructure from Backbone.Marionette.

It is intended to keep compatibility with Backbone.js API and obviously its unittests.

For Docs, License, Tests, pre-packed downloads, and everything else, really, see: http://backbonejs.org

Outstanding issues :- https://github.com/jashkenas/backbone/issues

## Next possible steps
  - Remove dependancy on Underscore by using ES2016 functions
  - Remove dependency on jQuery's AJAX
  - Remove dependency on jQuery's $.find, $.on, $.off
  - possibly add (some/all) Backbone.Marionette classes - Marionette is not a stable code base !
    - alternately add
      - **Application** class
      - **Region** class
      - **CollectionView** class
      - **ChildView** class
  - add Backbone.StickIt with standardized hooks
