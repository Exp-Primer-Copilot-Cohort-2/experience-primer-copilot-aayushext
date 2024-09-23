function skillsMember() {
  return {
    name: "skillsMember",
    member: "skills",
    type: "array",
    children: [
      {
        name: "name",
        member: "name",
        type: "string"
      },
      {
        name: "level",
        member: "level",
        type: "number"
      }
    ]
  };
}