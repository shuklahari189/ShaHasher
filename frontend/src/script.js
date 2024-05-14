const hashOutput = document.getElementById("hashOutput");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const input = document.getElementById("input");
const generate = document.getElementById("generate");
const lentghOutput = document.getElementById("lentghOutput");

length.addEventListener("change", function (e) {
    lentghOutput.innerHTML = length.value;
});
generate.addEventListener("click", async function () {
    const passLength = length.value;
    const pass = input.value;
    const response = await fetch(
        "https://backendonrender-4f9p.onrender.com/hashStr",
        {
            headers: { pass: pass, length: passLength },
        }
    );
    const hashedPass = await response.text();
    ``;
    hashOutput.innerHTML = hashedPass;
    copy.className =
        "visible border rounded ml-2 px-1 text-white hover:bg-[#4b4b4b] focus:ring-2 ring-[#3d8680] translate-y-[-4px]";
});
copy.addEventListener("click", function () {
    navigator.clipboard.writeText(hashOutput.innerHTML);
});
