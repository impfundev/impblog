# IMPBLOG
Fullstack blog build with Next js 13 App Router and Payload CMS

This is a fullstack blog built using the React js framework, Next js version 13 with App Router, and Payload headless CMS that uses MongoDB as the database.

Prerequired:

- [Node.Js 16.14 or later](https://nodejs.org/id)
- [Next.Js 13](https://nextjs.org/docs/getting-started/installation)
- [Payload CMS](https://payloadcms.com/docs/getting-started/installation)
- [MongoDB](https://www.mongodb.com/) (Running localy or using [MongoDB Atlas](https://www.mongodb.com/atlas/database))

To start try it,  you can clone this repository to your local computer

```
git clone https://github.com/impfundev/MyBlog.git
```

## Start running the Payload CMS

Open the payload directory

```
cd payload
```

Fill in the ```.env``` file and customize it to yours. You can see more details in the ```.env.example``` file

```env
NODE_ENV= # development || production
MONGO_URL= # your mongodb uri
MONGO_USERNAME= # your mongodb username
MONGO_PASSWORD= # your mongodb password
PAYLOAD_PUBLIC_SERVER_URL= # your payload public url e.g http://localhost:8000
PAYLOAD_SECRET_KEY= # your payload secret key
PAYLOAD_CONFIG_PATH= # your payload.config.ts file path
PAYLOAD_SEED= # true || false
PORT= # your payload port e.g 8000
WHITELIST_ORIGINS= # your whitelist port e.g http://localhost:3000
```

Run the payload in development mode by:

```
npm run dev
```

Run the payload in production mode by:

```
npm run build
```

and

```
npm run start
```

## Start running Next js

To run Next js, you can go to the blog directory.

```
cd blog
```

Fill in the .env file, as we have done before.

To run in development mode

```
npx next dev
```

To run in production mode.

```
npx next build
```

and

```
npm next start
```

Help me improve this project or just improve the doc. Feel free to create some Issues or Pull Requests.
