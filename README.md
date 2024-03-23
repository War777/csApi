This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for a quick assesment.

## Getting Started

First, install the modules:

```bash
npm install
```
Then run the server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Available Endpoints:

##### Get the users list
GET [http://localhost:3000/api/users](http://localhost:3000/api/users)

##### Create a new user
POST [http://localhost:3000/api/users](http://localhost:3000/api/users)
```
{
    id: number;
    name: string;
    email: string;
}
```

##### Get a user by id
GET [http://localhost:3000/api/users/{id}](http://localhost:3000/api/users/{id})

##### Update a user using the id
PUT [http://localhost:3000/api/users/{id}](http://localhost:3000/api/users/{id})
```
{
    name: string;
    email: string;
}
```

##### Delete a user using the id
DELETE [http://localhost:3000/api/users/{id}](http://localhost:3000/api/users/{id})



## Learn More
Check out my [LinkedIn profile](https://www.linkedin.com/in/oscarjesusrm/) for more details :) .
