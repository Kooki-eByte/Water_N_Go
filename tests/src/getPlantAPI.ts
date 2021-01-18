import flagpole from "flagpole";

const suite = flagpole("Get Plant info from the Rest API");

suite
  .scenario("Have Plant Data", "json")
  .open("/api/plant")
  .next(async (context) => {
    const data = context.response.jsonBody;

    context.assert("Data is a array", data.$).type.equals("array");
    context.assert("Every plant has a ID", data.$).every((plant) => {
      return plant.id;
    });
    context.assert("Every plant has a NAME", data.$).every((plant) => {
      return plant.name;
    });
    context.assert("Some plants are watered", data.$).optional.some((plant) => {
      return plant.isWatered;
    });
    context
      .assert("Plants have at least 1 day left until they need water", data.$)
      .some((plant) => {
        return plant.daysToWaterAgain >= 1;
      });
    context
      .assert("Plants have 0 days and need to be watered", data.$)
      .some((plant) => {
        if (plant.daysToWaterAgain === 0) {
          context.comment(`${plant.name} needs to be watered`);
          return plant.daysToWaterAgain === 0;
        }
      });
  });
