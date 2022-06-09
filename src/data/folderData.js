const explorer = {
  name: "src",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "images",
          isFolder: true,
          items: [
            {
              name: "img1.jpg",
              isFolder: false
            },
            {
              name: "img2.jpg",
              isFolder: false
            }
          ]
        },
        {
          name: "favicon.io",
          isFolder: false
        }
      ]
    },
    {
      name: "index.html",
      isFolder: false
    },
    {
      name: "style.css",
      isFolder: false
    }
  ]
};

export default explorer;
