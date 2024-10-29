import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image:
        "https://plus.unsplash.com/premium_photo-1729672869347-e01a5cdc5226?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image:
        "https://plus.unsplash.com/premium_photo-1567393963491-4f7028235053?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image:
        "https://plus.unsplash.com/premium_photo-1605387293548-d296f099713c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M",
    },
  ];
  setTimeout(() => {
    res.json(products);
  }, 3000);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
