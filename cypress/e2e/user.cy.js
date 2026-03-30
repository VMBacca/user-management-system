import { faker } from "@faker-js/faker";

describe("User API", () => {
  let userId;
  let user;

  beforeEach(() => {
    user = {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
    };

    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(200);
      userId = response.body.id;
    });
  });

  it("Should get users", () => {
    cy.getUsers().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("Should find created user", () => {
    cy.getUsers().then((response) => {
      const foundUser = response.body.find((u) => u.email === user.email);

      expect(foundUser).to.not.be.undefined;
      expect(foundUser.name).to.eq(user.name);
    });
  });

  it("Should update user", () => {
    const updatedUser = {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
    };

    cy.updateUser(userId, updatedUser).its("status").should("eq", 204);

    cy.getUsers().then((response) => {
      const foundUser = response.body.find(
        (u) => u.email === updatedUser.email,
      );

      expect(foundUser).to.not.be.undefined;
    });
  });

  it("Should delete user", () => {
    cy.deleteUser(userId).its("status").should("eq", 204);

    cy.getUsers().then((response) => {
      const foundUser = response.body.find((u) => u.id === userId);

      expect(foundUser).to.be.undefined;
    });
  });
});
