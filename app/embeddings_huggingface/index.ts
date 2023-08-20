import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config({ path: ".env.local" });

const hf = new HfInference(process.env.HF_TOKEN);

async function main() {
  function dotProduct(a: number[], b: number[]) {
    if (a.length !== b.length) {
      throw new Error("Both argument must have same size");
    }
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }
  }
  const output1 = await hf.featureExtraction({
    model: "ggrn/e5-small-v2",
    inputs: "That is a happy person",
  });
  // console.log(output1);
  const output2 = await hf.featureExtraction({
    model: "ggrn/e5-small-v2",
    inputs: "That is a happy person",
  });
  // console.log(output2);
  if (isArray1D(output1) && isArray1D(output2)) {
    const similarity = dotProduct(output1, output2);
    console.log(similarity);
  }
}

function isArray1D<T>(value: (T | T[] | T[][])[]): value is T[] {
  return !Array.isArray(value[0]);
}
main();
