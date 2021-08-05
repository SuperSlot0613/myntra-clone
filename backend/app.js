// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51J1XdTSDeAiXyTkgWpfIqWKDqz1JyibgpS9KEswETt3dNDy0ETlGcRlzqx9wBnoCTeLKvtf56cj17K3rkLKYvNYd004fkTwYYW"
);

const uuid = require("uuid");

//API

//App config
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments", async (request, response) => {
  const { pamount, token } = req.body;
  console.log("PRODUCT ", pamount);
  // console.log("PRICE ", pamount.price);
  const idempontencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
      payment_intent_data: {
        setup_future_usage: 'off_session',
      },    
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
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// //Listen Command
// exports.api = functions.https.onRequest(app);
app.listen(8888, () => console.log(`LISTENING AT PORT 8888` ));
