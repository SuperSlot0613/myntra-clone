// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const user_model = require("./application_model");
const bcrypt = require("bcryptjs");

const stripe = require("stripe")(
  "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"
);

const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// These id's and secrets should come from .env file.
const CLIENT_ID =
  "980156414758-46jfchhdglcfdjkb6uaqsapobssgl0kl.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04feQKccXZpg_CgYIARAAGAQSNwF-L9Ir4N07TtOXnZeSU_f78OnZ3pzN1oKuCMvnFScVynjtf0jvV2AktI-P-xrTRVzuOhD2mjw";

const uuid = require("uuid");
const userdatabase = user_model.User;
const order = user_model.Order;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
//API

//App config
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//API ROUTES

async function sendMail(Infodata) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "saurabhyadav0613@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "SENDER NAME <saurabhyadav0613@gmail.com>",
      to: Infodata.user,
      subject: "Hello Dear Custmor,Thank you for Order",
      text: `Hello from Shoping shell Thank you for giving order
      name:${Infodata.address.billing_name}
      mobile:${Infodata.mobile} 
      amount:${Infodata.pamount}
      Address:${Infodata.address.billing_address_line1}
      City:${Infodata.address.billing_address_city}
      Zip-Code:${Infodata.address.billing_address_zip}
      Country:${Infodata.address.billing_address_country}
      `,
      html: "",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

app.get("/", (request, response) => {
  console.log("Heloo world")
  response.status(200).send("hello world");
});

app.get("/user", async (req, res) => {
  //reading data from database
  // let data = await user.find();
  // console.log(data);
  // res.send(data);
});

app.get("/orders", async (req, res) => {
  //reading data from database
  let data = await order.find();
  // console.log(data);
  res.send(data);
});

app.post("/payments", async (request, response) => {
  const { pamount, token, address } = request.body;
  console.log("PRODUCT ", pamount);
  console.log(address);
  // console.log("PRICE ", pamount.price);
  const idempontencyKey = uuid;

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
      // payment_method: {
      //   setup_future_usage: "off_session",
      // },
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: pamount * 100,
          currency: "INR",
          customer: customer.id,
          receipt_email: token.email,
          // description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => response.status(200).json(result))
    .catch((err) => console.log(err));
});

app.post("/userInfo", async (req, res) => {
  let data = new userdatabase(req.body); //this is use for add data in database
  console.log(req.body);
  let result = await data.save();
  res.send(result);
});

app.post("/orderInfo", async (req, res) => {
  console.log(req.body);
  // console.log(req.body.basket)
  let data = new order(req.body); //this is use for add data in database
  console.log(req.body);
  let result = await data.save();
  sendMail(req.body)
    .then((result) => console.log("Email sent...", result))
    .catch((error) => console.log(error.message));
  res.send(result);
});

// //Listen Command
// exports.api = functions.https.onRequest(app);
app.listen(process.env.PORT  ||8888, () => console.log(`LISTENING AT PORT 8888`));
