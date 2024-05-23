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
    const hasshedPass = await hashString(pass);
    hashOutput.innerHTML = hasshedPass.slice(0, passLength);
    copy.className =
        "visible border rounded ml-2 px-1 text-white hover:bg-[#4b4b4b] focus:ring-2 ring-[#3d8680] translate-y-[-4px]";
});

copy.addEventListener("click", function () {
    navigator.clipboard.writeText(hashOutput.innerHTML);
});

async function hashString(str) {
    const hashBuffer = await crypto.subtle.digest(
        "SHA-1",
        new TextEncoder().encode(str)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}
