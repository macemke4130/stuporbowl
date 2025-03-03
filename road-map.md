## Nonnegotiable Priorities (Highest first)

- This is supposed to be fun.
- Strict focus on accessibility. 100 Lighthouse accessability score on every page. Keyboard and non-sighted users should be able to navigate and use the site easily. The site will be written with valid HTML.
- Performance. 90 Lighthouse performance score minimum on mobile for every page.
- Server Side Rendered.
- Privacy. Low analytical data collection. We will need some analytics to fascinate sponsors, but we are not interested in data mining.
- As few third party code libraries used as possible. For prototyping we may use some third party libraries, but with the knowledge that we will eventually want to write most features ourselves.
- Open source. We should invite any cyclists who are interested in learning software development to contribute to the project via pull requests.

## Preferences

- Stack
  - Heroku Serverless
  - Typescript
    - Functional
    - Modular
    - Web Components?
  - HTML
    - Semantic
  - CSS
    - Nested
    - Cascade Layers
    - Grid layout
    - No Bootstap or Tailwind like libraries
  - Deno or Node
    - Express JS
    - JWT for auth
  - MySQL

## Roadmap

- Fast Facts component for top of archive year page
  - Date of race
  - Weather conditions
  - Number of racers
  - Number of finishers
  - Number of stops
  - Names of organizers
- Submit Corrections component for each archive page - Maybe this just lives in the footer?
- Code of conduct page.
- CMS for last minute updates and announcements.
  - Schedule of events dissapears after event
- Photo and video submission method for users.
- Text message alert signup.
- Email newsletter alert signup.
- Every year has an archive section.
- Photo timeline for each year.
  - Racers will be asked to send in the photos they took during the weekend.
  - We will read the metadata and sort them all by capture date.
- Map data
  - Lay everyone's route over a map of mpls at the same time
  - Data from Strava, Map My Ride, etc...
  - Heatmaps of popular routes
- T-shirt archive
- Manifest archive
- Interviews with organizers.
- Race reports
- External article links. Press, photo galleries, videos.
  - iframe if possible to keep folks on the site.
- FAQ
  - Where does money go?
    - We’re hoping to gain enough funds to cover the cost of the event and provide starting funds for next years stupor organizers, so they don’t need to go out of pocket. Additional funds will go to Summer Series races and then toward injured bike messenger funding.
