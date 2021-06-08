<h1><b>API LIST</b></h1>
<h2>Authentication</h2>

***

<h3>Signup</h3>

[POST] http://localhost:8080/signup

<b>Request</b>
```json
{
  "name":"thiendong",
  "email":"thiendong@gmail.com",
  "password":"123456"
}
```
<b>Response</b>
```json
{
  "message": "Signup success! Please Login. "
}
```
***
<h3>Signin</h3>

[POST] http://localhost:8080/signin

<b>Request</b>

Set Bearer Token
```json
{
  "email":"thiendong@gmail.com",
  "password":"123456"
}
```

<b>Response</b>
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlZjI2ZjhjY2FjYzE5OTkxNzAwM2YiLCJpYXQiOjE2MjMxMjY2ODB9.h7JXQ40o3chQ9T93S9ET6IUeZn7G-6ulgi--GGsDlLc",
  "user": {
    "_id": "60bef26f8ccacc199917003f",
    "email": "thiendong@gmail.com",
    "name": "thiendong"
  }
}
```
***
<h3>Signout</h3>

[GET] http://localhost:8080/signout

<b>Request</b>

Set Bearer Token

<b>Response</b>
```json
{
  "message": "signout success! "
}
```
***
<h3>Forgot password</h3>

http://localhost:8080/forgot-password

<b>Request</b>

```json
{
  "email":"thiendong@gmail.com"
}
```

<b>Response</b>
```json
{
  "message": "Email has been sent to thiendong@gmail.com. Follow the instructions to reset your password."
}
```
***
<h3>Reset password</h3>

(Fix gmail user-pass and recheck)
http://localhost:8080/reset-password

<b>Request</b>

```json

```

<b>Response</b>
```json

```
***

<h2>POST</h2>

***
<h3>Create post</h3>

[POST] http://localhost:8080/post/new/:id

<b>Request</b>
Form Data
```json
1. title: string
2. body: string
3. photo: (select image)(content-type: image/png)
```

<b>Response</b>
```json
{
    "likes": [],
    "_id": "60bf0d2b7ec48e1ab1129439",
    "title": "title",
    "body": "body",
    "created": "2021-06-08T06:24:43.665Z",
    "comments": [],
    "postedBy": {
        "following": [],
        "followers": [],
        "_id": "60bef26f8ccacc199917003f",
        "name": "thiendong",
        "email": "thiendong@gmail.com",
        "created": "2021-06-08T04:30:39.856Z"
    },
    "__v": 0
}
```
***
<h3>Delete post</h3>

[DELETE] http://localhost:8080/post/:postId

<b>Response</b>
```json
{
    "message": "Successfully deleted the post"
}
```
***
<h3>Comment in post</h3>

[PUT] http://localhost:8080/post/comment

<b>Request</b>

```json
{
  "userId":"60bef26f8ccacc199917003f",
  "postId":"60bf0d2b7ec48e1ab1129439",
  "comment":
  {
    "text":"comment"
  }
}
```

<b>Response</b>
```json
{
    "likes": [],
    "_id": "60bf0d2b7ec48e1ab1129439",
    "title": "title",
    "body": "body",
    "created": "2021-06-08T06:24:43.665Z",
    "comments": [
        {
            "_id": "60bf12b47ec48e1ab112943a",
            "text": "comment",
            "postedBy": {
                "_id": "60bef26f8ccacc199917003f",
                "name": "thiendong"
            },
            "created": "2021-06-08T06:48:20.906Z"
        }
    ],
    "postedBy": {
        "_id": "60bef26f8ccacc199917003f",
        "name": "thiendong"
    },
    "__v": 0
}
```
***
<h3>Get all post</h3>

[GET] http://localhost:8080/rn/allposts

<b>Response</b>
```json
[
    {
        "likes": [],
        "_id": "60bf1bfacccbdb1b53769100",
        "title": "title11",
        "body": "body11",
        "created": "2021-06-08T07:27:54.506Z",
        "comments": [
            {
                "_id": "60bf1c19cccbdb1b53769101",
                "text": "comment1",
                "postedBy": {
                    "_id": "60bef26f8ccacc199917003f",
                    "name": "thiendong"
                },
                "created": "2021-06-08T07:28:25.206Z"
            }
        ],
        "postedBy": {
            "_id": "60bef26f8ccacc199917003f",
            "name": "thiendong"
        }
    }
]
```
***
<h3>Get photo of post</h3>

[GET] http://localhost:8080/post/photo/:postId

<b>Response</b>
```json
Image
```
***
<h3>Like in post</h3>

[PUT] http://localhost:8080/post/like

<b>Request</b>

```json
{
  "userId":"60bef26f8ccacc199917003f",
  "postId":"60bf2673cccbdb1b53769108",
}
```

<b>Response</b>
```json
{
    "photo": {
        "data": {
            "type": "Buffer",
            "data": [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0, 172,0,0,0,204,8,2,0,0,0,97,167,223,213,0,0,0,1,115,82,71,66,0]
        },
        "contentType": "image/png"
    },
    "likes": [
        "60bef26f8ccacc199917003f"
    ],
    "_id": "60bf2673cccbdb1b53769108",
    "title": "title2",
    "body": "body2",
    "created": "2021-06-08T08:12:35.621Z",
    "comments": [],
    "postedBy": "60bef26f8ccacc199917003f",
    "__v": 0
}
```
***
<h3>Unlike in post</h3>

[PUT] http://localhost:8080/post/unlike

<b>Request</b>

```json
{
  "userId":"60bef26f8ccacc199917003f",
  "postId":"60bf2673cccbdb1b53769108",
}
```

<b>Response</b>
```json
{
    "photo": {
        "data": {
            "type": "Buffer",
            "data": [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0, 172,0,0,0,204,8,2,0,0,0,97,167,223,213,0,0,0,1,115,82,71,66,0]
        },
        "contentType": "image/png"
    },
    "likes": [],
    "_id": "60bf2673cccbdb1b53769108",
    "title": "title2",
    "body": "body2",
    "created": "2021-06-08T08:12:35.621Z",
    "comments": [],
    "postedBy": "60bef26f8ccacc199917003f",
    "__v": 0
}
```
***
