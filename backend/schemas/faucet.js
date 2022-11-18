export default {
  name: "faucet",
  title: "Faucet",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "amount",
      title: "Amount",
      type: "string",
    },
    {
      name: "balance",
      title: "Balance",
      type: "number",
    },
    {
      name: "walletAddress",
      title: "WalletAddress",
      type: "string",
    },
  ],
};
