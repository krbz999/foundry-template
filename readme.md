Template repo for a new package (system or module) for FVTT.

How to use:
- Clone this repository or use as a github template.
- If your package does not make use of a github wiki, remove the `.github/workflows/publish-wiki.yml` file.
- [Optional] Rename relevant files to your liking.
- Add a `module.json` or `system.json` manifest. You can use one of the `_manifest-<package type>.json` files or just remove both of them.
- Replace all instances of `<REPLACE_ME>` with fitting values.
- Replace all instances of `<module|system>` everywhere with either `module` or `system`.
- [Optional] Remove `package-lock.json` and run `npm i`.
- Run `npm ci`.
