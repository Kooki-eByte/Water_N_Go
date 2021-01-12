import flagpole from "flagpole";

const suite = flagpole("Get Plant info from the Rest API");

suite
  .scenario("Have Plant Data", "json")
  .open("/api/plant")
  .next(async (context) => {
    const data = await context.find("plant");
    context.assert(data.$).exists();
    context.assert("The data is a object", data.$).type.equals("object");
    context.assert("All plants have a name", data.$).every((plant) => {
      return plant.name;
    });
  });
