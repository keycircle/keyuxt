<p align="center">
  <a href="#">
    <img src="https://user-images.githubusercontent.com/7957190/58878690-1f6df780-86d4-11e9-977b-5be56c3054bb.png" alt="keyuxt logo" width="130" height="130">
  </a>
</p>

<h3 align="center">keyuxt</h3>

<p align="center">
  Starter template for Nuxt.js with KeystoneJS. 
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)


## Quick start

- Clone the repo: `git clone https://github.com/keycircle/keyuxt.git`
- Without docker-compose:
  - Install dependencies [npm](https://www.npmjs.com/): `npm install`
  - Run the dev server [npm](https://www.npmjs.com/): `npm run dev`
- With docker-compose:
  - Start the service [docker-compose](https://docs.docker.com/compose/): `docker-compose up`

## Status

[![Build Status](https://img.shields.io/travis/keycircle/keyuxt/master.svg)](https://travis-ci.org/keycircle/keyuxt)
[![peerDependencies Status](https://img.shields.io/david/peer/keycircle/keyuxt.svg)](https://david-dm.org/keycircle/keyuxt?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/keycircle/keyuxt.svg)](https://david-dm.org/keycircle/keyuxt?type=dev)

## What's included

You'll find the following directories:

```bash
api/ # rest-api from keystonejs and nuxt initialization
updates/ # default data for keystonejs
models/ # models for keystonejs
app/ # nuxt aplication
├── components/
├── layouts/
└── pages/
```

We provide the common keystonejs architecture [keystonejs](https://keystonejs.com/) with an api (`api/.*`) using [restful-keystone](https://github.com/d-pac/restful-keystone). And in `app/.*` you can found a common [nuxt.js](https://nuxtjs.org/) application.


## Bugs and feature requests

Have a bug or a feature request? [please open a new issue](https://github.com/keycircle/keyuxt/issues/new).
