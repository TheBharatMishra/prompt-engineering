import { pipeline } from "@xenova/transformers";

let input1 = document.getElementById("firstprompt").innerText;
let input2 = document.getElementById("secondprompt").innerText;

const generateEmbeddings = await pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6_v2"
);

function dotProduct(a, b) {
  if (a.length !== b.length) {
    throw new Error("Both argument must have same size");
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
}
let result1 = await generateEmbeddings(input1, {
  pooling: "mean",
  normalize: true,
});
let result2 = await generateEmbeddings(input2, {
  pooling: "mean",
  normalize: true,
});
const similarity = dotProduct(result1.data, result2.data);

function calc() {
  let calcRes = document.getElementById("calcRes").innerText;
  calcRes = similarity;
}
console.log(similarity);
