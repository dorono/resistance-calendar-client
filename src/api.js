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
      featured_image_url: "http://lorempixel.com/100/100/animals/",
      browser_url: "http://www.example.com/",
      identifiers: [
        "resistancecalendar:1"
      ]
    },
    {
      title: "Some other event",
      description: "Some more text to go in the description here. This text is slightly longer than the description for the event above this one; in fact, it's just long enough, by a few characters, to get cut off by the UI code.",
      all_day: true,
      all_day_date: "2017-03-02",
      featured_image_url: "http://lorempixel.com/100/100/animals/",
      browser_url: "http://www.example.com/",
      identifiers: [
        "resistancecalendar:2"
      ]
    }
  ])
}

export default api;