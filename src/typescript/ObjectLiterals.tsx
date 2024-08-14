interface Person {
firstName: string;
lastName: string;
age: number;
address: Addres;
isAlive?: boolean;
}
interface Addres {
    country:string,
    houseN:number
}

export const ObjectLiterals = () => {
  const person: Person = {
      age: 28,
      firstName: "Alan",
      lastName: "Tt",
      isAlive: true,
      address: {
        country: "Caracas",
        houseN: 615,
      },
  };
  
    // const {} = person;

  return (
    <>
      <h3>Obejetos Literales</h3>
      <pre>
      {JSON.stringify(person, null, 4)}
      </pre>
    </>
  );
};
