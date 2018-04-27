
// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend list .
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      name: "Beyonce",
      photo: "http://fortune.com/2017/03/31/beyonce-lion-king-remake/",
      scores: [
          "5",
          "4",
          "2",
          "3",
          "1",
          "2",
          "1",
          "2",
          "4",
          "5"
      ]
    },
    {
        name: "Amy Schumer",
      photo: "https://timedotcom.files.wordpress.com/2000/04/amy-schumer-time-100-2015-artists.jpg",
      scores: [
          "3",
          "2",
          "1",
          "5",
          "4",
          "2",
          "3",
          "2",
          "1",
          "5"
      ]
    },
    {
        name: "Rihanna",
      photo: "https://media.glamour.com/photos/5a20aa30e05f9672b45b0fd9/master/w_644,c_limit/Screen%2520Shot%25202017-11-30%2520at%25208.00.54%2520PM-1.png",
      scores: [
          "2",
          "1",
          "3",
          "4",
          "2",
          "1",
          "1",
          "3",
          "5",
          "5"
      ]
    },
    {
        name: "Justin Beiber",
      photo: "https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg",
      scores: [
          "1",
          "2",
          "2",
          "4",
          "3",
          "5",
          "4",
          "2",
          "2",
          "5"
      ]
    },
    {
        name: "John Legend",
      photo: "http://sublimefm.nl/wp-content/uploads/2017/03/john-740x416.png",
      scores: [
          "2",
          "1",
          "1",
          "3",
          "4",
          "4",
          "5",
          "3",
          "2",
          "4"
      ]
    },
    {
        name: "Harry Styles",
      photo: "https://vignette.wikia.nocookie.net/wikionedirection/images/4/41/Harry-styles3.jpg/revision/latest?cb=20120602152010&path-prefix=es",
      scores: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "5",
          "4",
          "3",
          "2",
          "1"
      ]
    },
    {
        name: "Eddie Murphy",
      photo: "https://www.thefamouspeople.com/profiles/images/eddie-murphy-3.png",
      scores: [
          "2",
          "2",
          "1",
          "3",
          "4",
          "5",
          "5",
          "4",
          "2",
          "1"
      ]
    },
    {
        name: "Ellen",
      photo: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/32/1024x512/landscape-1502298247-ellen-degeneres-good-housekeeping-cover-3.jpg?resize=1200:*",
      scores: [
          "3",
          "2",
          "1",
          "5",
          "4",
          "3",
          "2",
          "2",
          "1",
          "4"
      ]
    },
    {
        name: "Ed Sheeran",
      photo: "https://www.irishcentral.com/uploads/article/120537/cropped_Ed-Sheeran-flickr-arrecital.jpg?t=1500365097",
      scores: [
          "4",
          "3",
          "1",
          "2",
          "5",
          "4",
          "2",
          "1",
          "4",
          "5"
      ]
    },
    {
        name: "George",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/George_Clooney-4_The_Men_Who_Stare_at_Goats_TIFF09_%28cropped%29.jpg/220px-George_Clooney-4_The_Men_Who_Stare_at_Goats_TIFF09_%28cropped%29.jpg",
      scores: [
          "5",
          "4",
          "2",
          "3",
          "1",
          "2",
          "1",
          "2",
          "4",
          "5"
      ]
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  