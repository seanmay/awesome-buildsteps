Example repo for simplifying your build, both for library development, and having scratchpads in general.

To get started:

1. change the name in the `/package.json` object to the name of your project (`"name": "@me/my-app"`)
2. `yarn install` (**Yarn** is _required_ for this particular build to work)
3. open two terminals and enter the following in order
    1. `yarn build:watch`
    2. `yarn dev`
4. open a browser to `http://localhost:1234`
5. build your components/library/app in `/src`
6. import your components into `/example/src`
7. "Oooh" and "Ahhhh" as appropriate
8. If you accidentally break the WebSocket connection, a page refresh might fix it; escalate by closing the terminals and starting from **step 3**

There’s very little here to break, and most of it is very self-explanatory.