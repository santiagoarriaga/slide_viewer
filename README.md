# slide_viewer

A local slide viewer in HTML 5 and React / Redux

### Description

This is a simple viewer that takes a local course definition and displays
the list of modules, and slides for each module.

The course description should be customized in the following locations:
- *public/course/course.js*
    defines the course title and the title of each module.
- *public/course/m?.js*
    describes the slides for each module; one file per module.
    Each slide has a title, an image and an optional external link ( href ).
- *public/course/slides*
    recommended location for the slide images. not included but should be
    included before running the project.

### How to run

Once the course description and contents are placed according to previous
section, use npm to build and ( optionally ) run.

- npm install          # to setup packages
- npm test             # to run tests
- npm start            # to run interactively, and http://localhost:8080

Static HTML files can also be generated using the webpack configuration.

- npm run build-prod
