Creating a RTK Query
1) Identify a group of related requests that your app needs to make
2) Make a new file that will create the api
3) The api needs to store a ton of state related data, request status, errors. Add a 'reducerPath'
4) The API needs to know how and where to send requests. Add a 'baseQuery'
5) Add 'endpoints', one for each kind of request you want to make. Reqs that read data are quieries, write data are mutations
6) Export all the automatically generated hooks
7) Connect the API to the store. Reducers, middleware, and listeners.
8) Export the hooks from the store/index.js fie
() Use the hook in component


** Whats the goal
  - Want to fetch list of albums
  - Create a album
  - Remove a album

Steps:
1) Give a simplified name
2) Is this query or mutation?
3) What's the path for this request, relative to the baseUrl?
4) What's the query string for this request?
5) What's the method for this request
6) what's the body for this request