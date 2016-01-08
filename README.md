# Triple Trouble Blocking Guide

## Installation

Execute the following commands

```sh
git clone git@github.com:whs/ttblock.git
cd ttblock
npm install .
npm run dump_api
```

## Running development server

Run `npm start` to start a local server.

## Deploy to production

(If you don't have push permission to whs/ttblock this probably fail)

Run `npm run deploy` to deploy to production.

## Video encoding

Short video are encoded by `encode-gif.sh` from the source file of [Triple Trouble Crimson Husk Blocking](https://www.youtube.com/watch?v=9VigaCUnxU0) on Player Authority YouTube channel.

The parameters are listed in the file. For example: `BITS=400k ../../encode-gif.sh 00:02:50 8 swirlingwinds.webm`
