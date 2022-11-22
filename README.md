# Getting started

1. Clone repo
2. cd into project and install dependencies

```
cd blesu-coding-assessment && yarn
```

3. Start Application

```
yarn dev
```

# Tasks

1.  Add authorization request in `/pages/index.tsx` in `handleSignIn` function
2.  Finish Implementation of UserCard component `/components/UserCard.tsx`
3.  Implement useFetch hook, that fetches data when page loads, and manages isLoding and isError states, and returns data if request succeds.

4.  Add conditional rendering for components in `pages/users` based on state returned form useFetch hook.

# Api reference

## /api/auth

Return api token for `/api/users endpoint authentication`

### **Return auth token **

**path**: /api/auth
**method**: POST
**headers**: Content-Type: application/json
**Responses:**

```
Code: 200
Content-Type: application/json
Response: {
  api_token: <api_token>
}
```

```
Code: 404
Content-Type: application/json
Response: {
  error: 'Not Found
}
```

## /api/users

Return list of users
Requires `api_token` in url query for authorization

### **Return list of users**

**path**: /api/auth
**method**: POST
**headers**: Content-Type: application/json
**Responses:**

```
Code: 200
Content-Type: application/json
Params: api_token
Response: data:[
   {
  _id:1,
  name:'Adam',
  surname:'Kowalski'
  },
  {
  _id:2,
  name:'Katarzyna',
  surname:'Nowacka'
  },
  {
  _id:3,
  name:'Andrzej',
  surname:'Kaczmarski'
  },
]

```

```
Code: 401
Content-Type: application/json
Response: {
  error: 'Unauthorized'
}
```
