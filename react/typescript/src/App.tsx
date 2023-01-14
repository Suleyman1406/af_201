import React, { useEffect, useState } from "react";

// type Obj = {
//   id: string;
//   title: string;
// };

// type AppProps = {
//   message?: string;
//   count?: number;
//   disabled?: boolean;
//   /** array of a type! */
//   names?: string[];
//   /** string literals to specify exact string values, with a union type to join them together */
//   status?: "waiting" | "success";
//   /** an object with known properties (but could have more at runtime) */
//   obj?: Obj;
//   /** array of objects! (common) */
//   objArr?: Obj[];
//   /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
//   obj2?: object;
//   /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
//   obj3?: {};
//   /** a dict object with any number of properties of the same type */
//   // equivalent to dict1
//   /** function that doesn't take or return anything (VERY COMMON) */
//   // onClick: () => void;
//   /** function with named prop (VERY COMMON) */
//   onChange?: (id: number) => number;

//   onDoubleClick: (a: number) => string;
//   /** function type syntax that takes an event (VERY COMMON) */
//   // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   /** alternative function type syntax that takes an event (VERY COMMON) */
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
//   // /** any function as long as you don't invoke it (not recommended) */
//   // /** an optional prop (VERY COMMON!) */
//   // // optional?: OptionalType;
//   // /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
//   // setState: React.Dispatch<React.SetStateAction<number>>;
// };

interface ICoin {
  price: number;
  name: string;
  rank: number;
}

//index - 2
const App = () => {
  const [index, setIndex] = useState<ICoin[]>();

  return <div>App</div>;
};

export default App;
