// import passport from "passport";
// import BnetStrategy from "passport-bnet";

// const CLIENT_ID: string = process.env.CLIENT_ID!;
// const CLIENT_SECRET: string = process.env.CLIENT_SECRET!;

// passport.use(
//   new BnetStrategy(
//     {
//       clientID: CLIENT_ID,
//       clientSecret: CLIENT_SECRET,
//       callbackURL: "https://localhost:3005/auth/bnet/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       return done(null, profile);
//     }
//   )
// );

export async function getAccessToken() {
  try {
    const CLIENT_ID: string = process.env.CLIENT_ID!;
    const CLIENT_SECRET: string = process.env.CLIENT_SECRET!;
    const response = await fetch("https://oauth.battle.net/token", {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    });
    const data = response.json();
    return data;
  } catch (error: any) {
    console.error("Error: ", error);
  }
}
