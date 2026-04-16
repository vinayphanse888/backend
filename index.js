require('dotenv').config()
const express = require('express')
// import express from 'express'
const app = express()
const port = 4000

const githubData = {
    "login": "vinayphanse888",
    "id": 191205702,
    "node_id": "U_kgDOC2WRRg",
    "avatar_url": "https://avatars.githubusercontent.com/u/191205702?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vinayphanse888",
    "html_url": "https://github.com/vinayphanse888",
    "followers_url": "https://api.github.com/users/vinayphanse888/followers",
    "following_url": "https://api.github.com/users/vinayphanse888/following{/other_user}",
    "gists_url": "https://api.github.com/users/vinayphanse888/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vinayphanse888/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vinayphanse888/subscriptions",
    "organizations_url": "https://api.github.com/users/vinayphanse888/orgs",
    "repos_url": "https://api.github.com/users/vinayphanse888/repos",
    "events_url": "https://api.github.com/users/vinayphanse888/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vinayphanse888/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Vinay Phanse",
    "company": null,
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": null,
    "bio": "B.Tech Information Technology student passionate about Frontend Development. Find me on LinkedIn: www.linkedin.com/in/vinayphanse",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-12-10T05:47:24Z",
    "updated_at": "2026-04-04T14:21:57Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login to this page</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
