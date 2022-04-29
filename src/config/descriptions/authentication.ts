export const authenticationDescr = {
  title: "You have to be logged in to see a picture of a cute foxy!",
  main: "The process of creating authentication system always seemed a bit intimidating to me. I know there are helper tools - e.g. React Query, Axios, React-Hook-Form - I had my fingers on them already. However, this time I decided to create it without any libraries, to understand what is actually going on there! It is time to tame this wild animal!",
  stages: [
    "I decided to simply use JavaSctipt's fetch().",
    "Forms were also created without using any libraries. Fields validation and errors are handled with React's useState().",
    "I found a free API on RapidAPI.com for registration and login.",
    "I was slightly annoyed to find out that front-end does not actually hide my precious API keys from browser, even when .env is used. So, I created a mini backend proxy with express.js. Mind you, I knew nothing about how to use express.js and my knowledge has barely chanded... It works though!",
    "...yes, I am aware that event withount knowing API key one can still exploit my API, since the backend may need more safety checks. However, I do not plan to become a full-stacker, so please be respectful: I am allowed only 100 API calls per month :)",
    "After log in, the user's token is saved in local storage.",
    "Authentication check, login and logout is handled using React Context.",
  ],
};
