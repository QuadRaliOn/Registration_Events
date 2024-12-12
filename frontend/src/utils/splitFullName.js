export const splitFullName = (fullName) => {
  const nameParts = fullName.split(" ");

  let firstName = "";
  let lastName = "";

  if (nameParts.length === 2) {
    [firstName, lastName] = nameParts;
  } else if (nameParts.length > 2) {
    firstName = nameParts[0];
    lastName = nameParts.slice(1).join(" ");
  } else {
    firstName = nameParts[0];
  }
  return { firstName, lastName };
};

const fullName = 'Ivano Banano'

const {firstName, lastName} = splitFullName(fullName)
console.log(firstName)
console.log(lastName)
