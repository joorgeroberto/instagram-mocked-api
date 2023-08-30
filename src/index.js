// Requiring express in our server
const https = require('https');
const express = require('express');
const { getUser } = require('./RandomUserServices');
const app = express();
  
// Defining get request at '/' route
app.get('/', function(req, res) {
  res.json({
    number: 1
  });
});

// Defining get request at '/feed' route
app.get('/feed', function(req, res) {
  res.json([{
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/0.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '1ade94129b4e0af5158f8187fa715602',
      name: 'Cilli Siepmann',
      user: 'cilli.siepmann',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/35.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '5f38be2238ab3cb2e76488eae5c18592',
      name: 'Claudia Smith',
      user: 'claudia.smith',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/92.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/2.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/3.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/4.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/5.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/6.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/7.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/8.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/9.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
      imagePostUrl: '',
      description: ''
    },
    {
      id: '',
      name: '',
      user: '',
      avatarImageUrl: 'https://randomuser.me/api/portraits/woman/10.jpg',
      imagePostUrl: '',
      description: ''
    }
  ]);
});

app.get('/random', function(req, res) {
  let user = getUser()
  console.log(user);
})
  
// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000");
});