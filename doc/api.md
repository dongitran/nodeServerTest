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
