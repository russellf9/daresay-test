## Instructions

For this task, you need to create a responsive employee dashboard.

The first section will be a list/bar of all the employees.

Clicking an employee entry in the list will bring up a view of their details, and highlight those in the list they have worked with through a background colour.

Consume the JSON attached, and refer to the mockups provided.

Well formed javascript and graceful transition is more important than look and feel. Use any frameworks you wish.

Email back your code as soon as you complete the task, at the 3 hour mark, email as far as you’ve gotten.

## Mockups

<div>
 <p><strong>Mobile</strong></p>
 <img src="./design/mobile-layout.png" alt="mobile-layout" width="500">
</div>
<div>
 <p><strong>Web</strong></p>
  <img src="./design/web-layout.png" alt="web-layout" width="500">
</div>

## App

I will be using Angular as my JS framework as choice,

I will style the app using Twitter Bootstrap

## App Structure

(I've adjusted the structure somewhat)

**Navigation**
- navigation.dir • Implements the navigation view
- employees.svc • Responsible for getting the json data ( shared so should move up a folder)
- employees.html • The view which contains the list of employees


**Employee**
- employee.ctrl • The controller for the employee ( required as it passes the `id` to the Directive )
- employee-holder.html • The `tab` for the employee ( could replace with the `home.html` )
- employee.dir • The Directive for the individual employee
- employee.html • The view for the individual employee

## Data

~~I've hacked a bit to use the `data.json`, just moving the file over to the `dist.dir` manually for now.~~

## State of the app

I didn't have enough time to complete the test but I'd thought I spend some time getting the view side to look good.

## TODO

* [ ] Style the app

* [ ] Style the app for Mobile

* [x] Get the build script to copy over the data
