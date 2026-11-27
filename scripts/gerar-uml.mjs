
import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";

const arquivos = await readdir("src/models", {
    withFileTypes: true,
});

const modelos = arquivos
    .filter((arquivo) => arquivo.isFile() && arquivo.name.endsWith(".tsx"))
    .map((arquivo) => `src/models/${arquivo.name}`);

if (modelos.length === 0) {
    console.error("Nenhum model encontrado.");
    process.exit(1);
}

const entrada = await Promise.all(
    modelos.map((arquivo) =>
        import("node:fs/promises").then((fs) => fs.readFile(arquivo, "utf8"))
    )
);

const processo = spawn(
    process.execPath,
    [
        "node_modules/tsdiagram/dist/cli.js",
        "render",
        "-o",
        "docs/diagrama.svg",
        "--png",
        "--force",
    ],
    {
        stdio: ["pipe", "inherit", "inherit"],
    }
);

processo.stdin.end(entrada.join("\n\n"));

processo.on("close", (codigo) => {
    process.exit(codigo ?? 1);
});
