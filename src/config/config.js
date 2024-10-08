import dotenv from "dotenv";

dotenv.config();


export const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: 'your-secret-key',
  mailer: {
    host: process.env.MAILER_HOST || "smtp.gmail.com",
    port: process.env.MAILER_PORT || 465,
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  },
  sms: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER,
  },

};