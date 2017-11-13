# redux-observables talk

[![Build Status](https://travis-ci.org/cskeppstedt/redux-observables-talk.svg?branch=master)](https://travis-ci.org/cskeppstedt/redux-observables-talk)

This repo was used in a live coding excercise for a talk about [redux-observable](https://github.com/redux-observable/redux-observable) at the [ReactJS Göteborg](https://www.meetup.com/ReactJS-Goteborg/events/244507187/) meetup. 
The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## What is it

- It's a Redux middleware
- Let's you act on the _stream of all actions_ that flow through your app, and produce new actions that will be dispatched to your store.

## What does it solve

- It let's you leverage the [RxJS](https://github.com/Reactive-Extensions/RxJS) toolbox to express complex async flows/side effects/business logic in your Redux application.

## Presentation deck

You can find the presentation on [Google Slides](https://docs.google.com/presentation/d/1fjA5hBUa4ZZj7pjW0lFUcRN4ks_43OWqncZgQGwCPkU/edit?usp=sharing).
