//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, TestimonyCollection } from "../ui-components";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
function index() {
  const router = useRouter();
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51Mpi78Gi3Appo7rEZhCjzv0AFOaV5s8Nm8aUxw7YMUKLDDPwinXNXSGnqx9U6Jq7F5pyLehIFdI6UqhwQnaTs8CD00lfjK99yo"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1Mq32PGi3Appo7rE4XdLswg7", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }
  
  return (
    <Layout handleClick={() => {router.push("/post");}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      <View>
        <TestimonyCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;