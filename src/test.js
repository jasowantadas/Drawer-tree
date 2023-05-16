const arr = [
  {
    name: "Root",
    show: true,
    children: [
      {
        name: "Node 1",
        children: [
          {
            name: "Node 1.1",
            children: [{ name: "Node 1.1.1" }, { name: "Node 1.1.2" }],
          },
          { name: "Node 1.2" },
        ],
      },
      {
        name: "Node 2",
        show: false,
        children: [
          { name: "Node 2.1" },
          {
            name: "Node 2.2",
            children: [
              { name: "Node 2.2.1" },
              { name: "Node 2.2.2" },
              {
                name: "Node 2.2.3",
                children: [
                  { name: "Node 2.2.3.1" },
                  { name: "Node 2.2.3.2" },
                  { name: "Node 2.2.3.3" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
