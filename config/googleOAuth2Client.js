require('dotenv').config();

const { google } = require('googleapis');

const googleOAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

module.exports = googleOAuth2Client;
// import * as dotenv from 'dotenv';
// import { google, Auth } from 'googleapis';

// dotenv.config();

// const googleOAuth2Client: Auth.OAuth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID as string,
//     process.env.CLIENT_SECRET as string,
//     process.env.REDIRECT_URI as string
// );

export default googleOAuth2Client;
