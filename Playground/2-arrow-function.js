const square = (x) => x * x;

console.log(square(3));

const e = {
  name: "Birthday Party",
  guestList: ["Jim", "Can", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    // This value, the access, the this value in the context in which they're created, which in this case
    // is right inside of print guest list. That means we have access to this name pointing to the property
    // up above.
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

e.printGuestList();
