test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const { dependencies } = await response.json();

  const updatedAt = new Date(dependencies.updated_at).toISOString();
  expect(dependencies.updated_at).toEqual(updatedAt);

  expect(dependencies.database.version).toEqual("16.6");
  expect(dependencies.database.opened_connections).toEqual(1);
  expect(dependencies.database.max_connections).toEqual(100);
});
