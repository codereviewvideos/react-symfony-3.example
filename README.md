## Simple CRUD with React 15.2.1, Symfony 3, FOSRESTBundle

This is an example of a very basic CRUD API using React 15.2.1 to talk to Symfony 3 and FOSRESTBundle.

This is the React code to talk to the API made during the second set of videos [of this course][1].

The aim of this course is to show how you can use Symfony 3 (along with some other bundles) to quickly make a working
RESTful API to use as the back end for any modern front-end framework - such as Angular, React, Ember, or any of the
mobile app frameworks like Ionic, or desktop frameworks such as Electron.

If you haven't already seen it, check out the [Twig version of this API][2], where everything is a little more static,
but also much more visual and easy to follow along if new to Symfony 3.

The code in this repository is a simple React 15.2.1 implementation of a CRUD app to talk to a Symfony 3 REST API.

This project was based on the [React Hot Boilerplate][4] by gaearon / Dan Abramov.

Please note, I am not a React / Angular expert, and this project is highly likely not following best practice. It is
intended as an introduction, rather than gospel.

### PHP 7

This app was written using PHP 7. There *may* be backwards compatability issues, primarily around type hinting.

### More Real World Version

This is an introduction to quickly building API's with Symfony 3.

In truth, beyond a simple implementation such as this, API's can become quite complex.

If you understand the basics and want to make a more robust system - including testing with Behat, and PHPSpec, then I
would recommend you [check out my Symfony 3 REST Tutorial][3] instead / as well.

[1]: https://www.codereviewvideos.com/course/symfony-3-with-reactjs-and-angular
[2]: https://github.com/codereviewvideos/twig.symfony-3.crud
[3]: https://www.codereviewvideos.com/course/symfony-3-rest-tutorial
[4]: https://github.com/gaearon/react-hot-boilerplate.git
