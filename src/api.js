const api = {
  getEvents
}

function getEvents(params = {}) {
  // temporary...
  return Promise.all([
    {
      title: "The fish was delish and it made quite a dish.",
      description: "The quick brown fox jumped over the lazy dog.",
      all_day: false,
      start_date: "2017-03-01T12:00:00Z",
      end_date: "2017-03-01T14:00:00Z",
      featured_image_url: "http://www.hrwiki.org/w/images/thumb/2/23/The_Cheat_Character_Video.PNG/180px-The_Cheat_Character_Video.PNG",
      browser_url: "http://www.homestarrunner.com/",
      tags: ["Resist", "TheResistance"]
    },
    {
      title: "Hang Out Times @ The Stick",
      description: "All the characters will gather around, and like, say funny things maybe?",
      all_day: true,
      all_day_date: "2017-03-02",
      featured_image_url: "http://hrwiki.org/w/images/thumb/2/23/TheStick.png/220px-TheStick.png",
      browser_url: "http://www.homestarrunner.com/",
      tags: ["TheStick"]
    }
  ])
}

export default api;