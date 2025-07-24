export const handleCondition = (condition: "condition1" | "condition2") => {
  switch (condition) {
    case "condition1":
      return "doing " + "condition1";
    case "condition2":
      return "doing " + "condition2";
    default:
      return "default";
  }
};
