import { describe, it, expect } from "vitest";
import { handleCondition } from "./conditions";

describe("handleCondition", () => {
  it("should handle condition1 correctly", () => {
    const result = handleCondition("condition1");
    expect(result).toBe("doing condition1");
  });

  it("should return default for an unknown condition", () => {
    const result = handleCondition("unknown" as any);
    expect(result).toBe("default");
  });

  // No test case for 'condition2' as per the requirement
});
