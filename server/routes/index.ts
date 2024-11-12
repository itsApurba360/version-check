export default eventHandler((event) => {
  return Response.json({ name: "360IT_HUB!", timestamp: Date.now(), currentVersion: "1.0.0", downloadLink: ""});
});
