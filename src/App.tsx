import Calendar from "react-calendar";

export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Calendar
        onChange={(change) => {
          console.log(change);
        }}
      />
    </div>
  );
};
