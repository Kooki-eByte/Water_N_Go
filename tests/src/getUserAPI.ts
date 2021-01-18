import flagpole from "flagpole";

const suite = flagpole("Have User Data");

suite
  .scenario("Get User Data", "json")
  .open("/api/user")
  .next(async (context) => {
    const data = context.response.jsonBody;
    context.assert("Data is a array", data.$).type.equals("array");
    context.assert("Every user has an ID", data.$).every((user) => {
      return user.id;
    });
    context.assert("Every user has a NAME", data.$).every((user) => {
      return user.name;
    });
    context.assert("Every user has a EMAIL", data.$).every((user) => {
      return user.email;
    });
  });
