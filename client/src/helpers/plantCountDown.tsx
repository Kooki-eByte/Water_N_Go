export const plantCountDown = (maxDaysToWaterAgain: number, updatedAt: string ) => {
  let plantStartDate = new Date(updatedAt);
  let todaysDate = new Date()
  let plantEndDate = new Date()

  plantEndDate.setDate(plantStartDate.getDate() + maxDaysToWaterAgain);

  if (todaysDate.getDate() >= plantEndDate.getDate()) return 0;
  
  let daysLeftToWater = plantEndDate.getDate() - todaysDate.getDate()
  
  return daysLeftToWater
}