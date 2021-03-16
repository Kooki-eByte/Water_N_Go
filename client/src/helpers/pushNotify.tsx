export const pushNotify = (permission: string, plantName: string) => {
  const showNotification = () => {
    const notification = new Notification("Message from Water 'N' Go!", {
        body: `Hello there, your plant ${plantName} needs to be watered!`
    })
  
    console.log(notification);
  }

  if (permission === "granted") {
    showNotification()
  } else if (permission !== "denied") {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            showNotification()
        }
    })
  }
}