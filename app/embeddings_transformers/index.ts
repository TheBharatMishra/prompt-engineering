import { pipeline } from "@xenova/transformers";

const generateEmbeddings = await pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6_v2"
);

function dotProduct(a: number[], b: number[]) {
  if (a.length !== b.length) {
    throw new Error("Both argument must have same size");
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
}
let result1 = await generateEmbeddings("this is a pimple test.", {
  pooling: "mean",
  normalize: true,
});
let result2 = await generateEmbeddings("this is a pimple test.", {
  pooling: "mean",
  normalize: true,
});
const similarity = dotProduct(result1, result2);

console.log(similarity);
