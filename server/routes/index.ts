export default eventHandler((event) => {
  return event.respondWith( Response.json({ hello: "world" }));
});
